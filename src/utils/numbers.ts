type ValueType = string | number;

const isE = (number: ValueType) => {
  const str = String(number);

  return !Number.isNaN(Number(str)) && str.includes('e');
};

export const trimNumber = (numStr: string) => {
  let str = numStr.trim();

  if (str === '' || str === '0') {
    return {
      negative: false,
      negativeStr: '',
      trimStr: '',
      integerStr: '0',
      decimalStr: '',
      fullStr: str,
    };
  }

  let negative = str.startsWith('-');

  if (negative) {
    str = str.slice(1);
  }

  str = str
    // Remove decimal 0. `1.000` => `1.`, `1.100` => `1.1`
    .replace(/(\.\d*[^0])0*$/, '$1')
    // Remove useless decimal. `1.` => `1`
    .replace(/\.0*$/, '')
    // Remove integer 0. `0001` => `1`, 000.1' => `.1`
    .replace(/^0+/, '');

  if (str.startsWith('.')) {
    str = `0${str}`;
  }

  const trimStr = str || '0';
  const splitNumber = trimStr.split('.');

  const integerStr = splitNumber[0] || '0';
  const decimalStr = splitNumber[1] || '0';

  if (integerStr === '0' && decimalStr === '0') {
    negative = false;
  }

  const negativeStr = negative ? '-' : '';

  return {
    negative,
    negativeStr,
    trimStr,
    integerStr,
    decimalStr,
    fullStr: `${negativeStr}${trimStr}`,
  };
};

const validateNumber = (num: string | number) => {
  if (typeof num === 'number') {
    return !Number.isNaN(num);
  }

  // Empty
  if (!num) {
    return false;
  }

  return (
    // Normal type: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(num) ||
    // Pre-number: 1.
    /^\s*-?\d+\.\s*$/.test(num) ||
    // Post-number: .1
    /^\s*-?\.\d+\s*$/.test(num)
  );
};

const getNumberPrecision = (number: ValueType) => {
  const numStr = String(number);

  if (isE(number)) {
    let precision = Number(numStr.slice(numStr.indexOf('e-') + 2));

    const decimalMatch = numStr.match(/\.(\d+)/);
    if (decimalMatch?.[1]) {
      precision += decimalMatch[1].length;
    }
    return precision;
  }

  return numStr.includes('.') && validateNumber(numStr)
    ? numStr.length - numStr.indexOf('.') - 1
    : 0;
};

const maxPrecision = (pre: ValueType, cur: ValueType) =>
  Math.max(getNumberPrecision(pre), getNumberPrecision(cur));

const add = (pre: ValueType, cur: ValueType) => {
  const preValue = Number(pre);
  const curValue = Number(cur);

  const totalValue = preValue + curValue;
  if (totalValue > Number.MAX_SAFE_INTEGER || totalValue < Number.MIN_SAFE_INTEGER) {
    return bigIntDecimalAdd(pre, cur);
  }
  return totalValue.toFixed(maxPrecision(pre, cur));
};

const makeBigIntDecimal = (value: ValueType) => {
  // We need convert back to Number since it require `toFixed` to handle this
  if (isE(value)) {
    value = Number(value);
  }

  value = typeof value === 'string' ? value : num2str(value);

  if (validateNumber(value)) {
    const trimRet = trimNumber(value);
    const numbers = trimRet.trimStr.split('.');
    const decimalStr = numbers[1] || '0';

    return {
      value: value,
      negative: trimRet.negative,
      integer: BigInt(numbers[0]),
      decimal: BigInt(decimalStr),
      decimalLen: decimalStr.length,
    };
  }
  return null;
};

type BigIntDecimalType = {
  value: string;
  negative: boolean;
  integer: BigInt;
  decimal: BigInt;
  decimalLen: number;
};

const bigIntDecimalAdd = (pre: ValueType, cur: ValueType) => {
  const preValue = makeBigIntDecimal(pre) as BigIntDecimalType;
  const curValue = makeBigIntDecimal(cur) as BigIntDecimalType;

  if (!preValue || !curValue) return '';

  const maxDecimalLength = Math.max(
    preValue.decimal.toString().padStart(preValue.decimalLen, '0').length,
    curValue.decimal.toString().padStart(curValue.decimalLen, '0').length,
  );
  const preDecimal = BigInt(
    `${preValue.negative ? '-' : ''}${preValue.integer.toString()}${preValue.decimal
      .toString()
      .padStart(preValue.decimalLen, '0')
      .padEnd(maxDecimalLength, '0')}`,
  );
  const curDecimal = BigInt(
    `${curValue.negative ? '-' : ''}${curValue.integer.toString()}${curValue.decimal
      .toString()
      .padStart(curValue.decimalLen, '0')
      .padEnd(maxDecimalLength, '0')}`,
  );

  const valueStr = (preDecimal + curDecimal).toString();

  // We need fill string length back to `maxDecimalLength` to avoid parser failed
  const { negativeStr, trimStr } = trimNumber(valueStr);
  const hydrateValueStr = `${negativeStr}${trimStr.padStart(maxDecimalLength + 1, '0')}`;

  return trimNumber(
    `${hydrateValueStr.slice(0, -maxDecimalLength)}.${hydrateValueStr.slice(-maxDecimalLength)}`,
  ).fullStr;
};

export const num2str = (value: number): string => {
  let numIn = value.toString();
  if (value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER) return numIn;
  let sign = ''; // To remember the number sign
  if (numIn.charAt(0) === '-') {
    numIn = numIn.substring(1);
    sign = '-';
  }
  let str = numIn.split(/[eE]/g); // Split numberic string at e or E

  if (str.length < 2) return sign + numIn; // Not an Exponent Number? Exit with orginal Num back

  const power = Number(str[1]); // Get Exponent (Power) (could be + or -)
  if (!power || power === 0) return sign + str[0]; // If 0 exponents (i.e. 0|-0|+0) then That's any easy one

  const deciSp = (1.1).toLocaleString().substring(1, 2); // Get Deciaml Separator
  str = str[0].split(deciSp); // Split the Base Number into LH and RH at the decimal point

  let baseRH = str[1] || ''; // RH Base part. Make sure we have a RH fraction else ""
  let baseLH = str[0]; // LH base part.

  if (power > 0) {
    // ------- Positive Exponents (Process the RH Base Part)
    if (power > baseRH.length) baseRH += '0'.repeat(power - baseRH.length); // Pad with "0" at RH
    baseRH = baseRH.slice(0, power) + deciSp + baseRH.slice(power); // Insert decSep at the correct place into RH base
    if (baseRH.charAt(baseRH.length - 1) === deciSp) baseRH = baseRH.slice(0, -1); // If decSep at RH end? => remove it
  } else {
    // ------- Negative Exponents (Process the LH Base Part)
    const num = Math.abs(power) - baseLH.length; // Delta necessary 0's
    if (num > 0) baseLH = '0'.repeat(num) + baseLH; // Pad with "0" at LH
    baseLH = baseLH.slice(0, power) + deciSp + baseLH.slice(power); // Insert "." at the correct place into LH base
    if (baseLH.charAt(0) === deciSp) baseLH = '0' + baseLH; // If decSep at LH most? => add "0"
  }
  return sign + baseLH + baseRH; // Return the long number (with sign)
};

export default add;

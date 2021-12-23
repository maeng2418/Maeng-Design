/** color?.replace(NOT_STRING_REGEX, '')}${SUB_COLOR_IDX} */
export const NOT_STRING_REGEX = /[^a-zA-Z]/g;

export const NOT_NUM_REGEX = /[^0-9]/;

/**
  - String.value.replace(NOT_NUM_REGEX, '').replace(PHONE_NUMBER_REGEX, `$1-$2-$3`);
  - PHONE_NUMBER_REGEX.test(value)
*/
export const PHONE_NUMBER_REGEX = /^(\d{2,3})(\d{3,4})(\d{4})$/;

/** EMAIL_REGEX.test(value) */
export const EMAIL_REGEX =
  /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;

const REGEX = {
  NOT_STRING_REGEX,
  NOT_NUM_REGEX,
  PHONE_NUMBER_REGEX,
};

export default REGEX;

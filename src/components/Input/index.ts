import Checkbox from './Checkbox';
import OriginalInput from './Input';
import InputNumber from './InputNumber';
import Radio from './Radio';
import RadioGroup from './Radio/RadioGroup';

export type InputType = typeof OriginalInput & {
  InputNumber: typeof InputNumber;
  Checkbox: typeof Checkbox;
  Radio: typeof Radio;
  RadioGroup: typeof RadioGroup;
};

const Input = OriginalInput as InputType;
Input.InputNumber = InputNumber;
Input.Checkbox = Checkbox;
Input.Radio = Radio;
Input.RadioGroup = RadioGroup;

export default Input;

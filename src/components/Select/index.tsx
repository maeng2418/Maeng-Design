import Option from './Option';
import OriginalSelect from './Select';

export type SelectType = typeof OriginalSelect & {
  Option: typeof Option;
};

const Select = OriginalSelect as SelectType;
Select.Option = Option;

export default Select;

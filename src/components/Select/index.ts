import Option from './Option';
import OriginSelect from './Select';

export type SelectProps = typeof OriginSelect & {
  Option: typeof Option;
};

const Select = OriginSelect as SelectProps;
Select.Option = Option;

export default Select;

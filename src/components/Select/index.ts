import Option from './Option';
import OriginalSelect from './Select';

export type SelectType = typeof OriginalSelect & {
  Option: typeof Option;
};

const Menu = OriginalSelect as SelectType;
Menu.Option = Option;

export default Menu;

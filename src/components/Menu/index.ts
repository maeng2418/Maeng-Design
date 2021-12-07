import Item from './Item';
import ItemGroup from './ItemGroup';
import OriginalMenu from './Menu';

export type MenuType = typeof OriginalMenu & {
  Item: typeof Item;
  ItemGroup: typeof ItemGroup;
};

const Menu = OriginalMenu as MenuType;
Menu.Item = Item;
Menu.ItemGroup = ItemGroup;

export default Menu;

import React, { ReactElement } from 'react';

interface ItemGroupProps {
  title: string;
  href?: string;
  children?: ReactElement | readonly ReactElement[];
}

const ItemGroup: React.FC<ItemGroupProps> = ({ children }) => {
  return <>{children}</>;
};

export default ItemGroup;

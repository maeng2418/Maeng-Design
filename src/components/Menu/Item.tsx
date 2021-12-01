/** @jsxImportSource @emotion/react */
import React from 'react';

interface ItemProps {
  children: React.ReactNode;
  href: string;
  disabled?: boolean;
}
const Item: React.FC<ItemProps> = ({ children, href, disabled }) => {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
};

export default Item;

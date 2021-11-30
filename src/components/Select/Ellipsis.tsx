import React from 'react';

interface EllipsisProps {
  content: React.ReactNode;
}

const Ellipsis: React.FC<EllipsisProps> = ({ content }) => {
  return <span className="ellipsis">{content}</span>;
};

export default Ellipsis;

const sizeTranslator = (size: string | number) => {
  if (typeof size === 'string') return size;
  if (typeof size === 'number') return `${size}px`;
};

export default sizeTranslator;

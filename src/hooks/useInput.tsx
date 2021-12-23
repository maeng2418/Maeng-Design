import { ChangeEvent, useCallback, useState } from 'react';

const useInput = (initialValue: any = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};

export default useInput;

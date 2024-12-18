import {useCallback, useState} from 'react';

type Params = {
  placeholder?: string;
  initialValue?: string;
};

export const useInput = (params?: Params) => {
  const [value, setValue] = useState(params?.initialValue);

  const handleChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  return {
    handleChange,
    value,
    placeholder: params?.placeholder,
    initialValue: params?.initialValue,
  };
};

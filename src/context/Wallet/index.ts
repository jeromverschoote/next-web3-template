import { createContext } from 'react';

interface Props {
  value: any;
  set: (value: any) => void;
  clear: () => void;
}

export default createContext<Props>({
  value: {},
  set: () => {},
  clear: () => {},
});

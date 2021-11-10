import { useState } from 'react';

export const useWallet = () => {
  const [wallet, setWallet] = useState(null);

  const handleSetWallet = (newWallet: any) => {
    setWallet(newWallet);
  };

  const handleClearWallet = () => {
    setWallet(null);
  };

  return {
    value: wallet,
    set: handleSetWallet,
    clear: handleClearWallet,
  };
};

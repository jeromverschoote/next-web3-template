import { useCallback, useEffect, useState } from 'react';

import detectEthereumProvider from '@metamask/detect-provider';

export const useMetaMask = () => {
  const [provider, setProvider]: any = useState(null);
  const [account, setAccount]: any = useState(null);
  const [chainId, setChainId]: any = useState(null);

  const ethereum = window.ethereum as any;

  const handleDetectProvider = useCallback(async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      if (provider !== window.ethereum) {
        return console.error('Do you have multiple wallets installed?');
      }

      setProvider(provider);
    } else {
      console.log('Please install MetaMask!');
    }
  }, []);

  const handleChangeAccount = useCallback(
    (accounts: any[]) => {
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
      } else if (accounts[0] !== account) {
        setAccount(accounts[0]);
      }
    },
    [account],
  );

  const handleChangeChain = useCallback(() => {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload();
  }, []);

  const handleFetchAccounts = useCallback(async () => {
    try {
      const accounts = await ethereum?.request({ method: 'eth_accounts' });

      if (accounts) {
        handleChangeAccount(accounts);
      }
    } catch (err) {
      console.log({ err });
    }
  }, [handleChangeAccount]);

  const handleFetchChain = useCallback(async () => {
    try {
      const chainId = await ethereum?.request({ method: 'eth_chainId' });

      if (chainId) {
        console.log(chainId);
        setChainId(chainId);
      }
    } catch (err) {
      console.log({ err });
    }
  }, []);

  // Init.
  useEffect(() => {
    handleDetectProvider();
    handleFetchAccounts();
    handleFetchChain();
  }, [handleDetectProvider, handleFetchAccounts, handleFetchChain]);

  // Listen for events.
  useEffect(() => {
    if (provider) {
      ethereum?.on('chainChanged', handleChangeChain);
      ethereum?.on('accountsChanged', handleChangeAccount);
    }
  }, [handleChangeAccount, handleChangeChain, provider]);

  return {
    provider,
    account,
    chainId,
  };
};

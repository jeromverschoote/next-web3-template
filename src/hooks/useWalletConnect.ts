import { useEffect, useState } from 'react';
import Web3 from "web3";
import Web3Modal from "web3modal";

import config from "../config";

let provider: any = null;
let web3Modal: any = null;
let web3: any = null;
let contract: any = null;

export const useWalletConnect = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeCerts, setActiveCerts] = useState("0");
  const [tokenCount, setTokenCount] = useState("0");

  const initWeb3Modal = async () => {
    const providerOptions = {};

    web3Modal = new Web3Modal({
      network: "testnet", // optional
      cacheProvider: false, // optional
      providerOptions // required
    });

    if (window.ethereum) {
      web3 = new Web3(window.ethereum as any);
  } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    };

    const accounts = await web3.eth.getAccounts();

    if (!!accounts.length) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  const initIrecContract = async () => {
    contract = new web3.eth.Contract(config.IREC_ABI, config.IREC_CONTRACT);

    contract.methods.totalSupply().call(function (err: any, res: any) {
      if (err) {
        console.log("An error occured", err);
        return;
      }

      setActiveCerts(res);
    })
  }

  const initVoltContract = async () => {
    const contract = new web3.eth.Contract(config.VOLT_ABI, config.VOLT_CONTRACT);

    contract.methods.totalSupply().call(function (err: any, res: any) {
      if (err) {
        console.log("An error occured", err);
        return;
      }

      setTokenCount(res);
    })
  }

  const openModal = async () => {
    provider = await web3Modal.connect();

    web3.setProvider(provider);
  }

  useEffect(() => {
    initWeb3Modal();
    initIrecContract();
    initVoltContract();
  }, []);

  return {
    provider,
    openModal,
    isLoggedIn,
    activeCerts,
    web3,
    contract,
    tokenCount
  };
};

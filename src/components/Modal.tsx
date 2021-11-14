import { Dialog, Transition } from '@headlessui/react';
import { useWalletConnect } from 'hooks/useWalletConnect';
import { Fragment, useRef } from 'react';

import Button from "./Button";

const VOLT_ADDRESS = "0xd25fdf4f89Fcb3385bf90841cB4bc73FCa360D52";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<Props> = (props) => {
  const { isOpen, setIsOpen } = props;
  const { contract, web3 } = useWalletConnect();
  const inputRef = useRef(null as any);

  const handleFractionize = async () => {
    console.log(contract.methods);
    const value = inputRef?.current?.value;

    console.log(contract.methods);

    if (value) {
      const accounts = await web3.eth.getAccounts();

      contract.methods.transfer(VOLT_ADDRESS, value)
        .send({ from: accounts[0] })
        .then((success: any) => console.log(success))
        .catch((err: any) => console.log(err));
    } else {
      return;
    }

    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
          </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="w-full max-w-md py-12 px-6 my-8 overflow-hidden inline-flex flex-col items-center text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title className="text-2xl font-bold">Fractionize IREC</Dialog.Title>

              <Dialog.Description className="text-gray-400 mt-2 mb-4">
                Load up your certificates to tokenize them.
              </Dialog.Description>

              <div className="flex flex-col mb-6 mx-auto">
                <input
                  type="number"
                  placeholder="1"
                  name="count"
                  id="count"
                  min="0"
                  ref={inputRef}
                  className="mt-1 px-4 py-2 text-2xl max-w-xs focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-inner border-2 rounded-md"
                />
              </div>

        <Button.Primary onClick={handleFractionize}>
          Fractionize IREC
              </Button.Primary>

              <button onClick={() => setIsOpen(false)} className="mt-4">
                Cancel
              </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
  );
};

export default Modal;

"use client";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
interface ModalProps {
  isOpen?: boolean;
  onClosed?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClosed,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  // call back functionx
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleOnClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(isOpen);

    setTimeout(() => {
      onClosed!();
    }, 300);
  }, [disabled, onClosed]);

  const handleOnSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit!();
  }, [disabled, onSubmit]);
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* overlay for the modal sheets  */}
      <div className=" justify-center items-center bg-neutral-800/70 z-50 flex fixed inset-0 outline-none focus:outline-none overflow-x-hidden overflow-y-auto">
        <div className=" h-full relative w-full my-6 mx-auto lg:h-auto md:h-auto md:w-4/6 lg:w-3/6 xl:w-2/5">
          {/* content of modal sheet  */}

          <div
            className={`
      translate duration-300 h-full
      ${showModal ? " translate-y-0" : " translate-y-full"} 
      ${showModal ? " opacity-100" : " opacity-0"} 
      `}
          >
            <div className="translate h-full  bg-white lg:h-auto md:h-auto  flex flex-col w-full outline-none focus:outline-none  relative rounded-lg shadow-lg border-0 ">
              {/* header  */}
              <div className=" flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                {/* close button */}
                <button
                  onClick={handleOnClose}
                  className=" p-1 border-0 absolute transition left-9 hover:opacity-70"
                >
                  <IoMdClose size={18} />
                </button>
                {/* modalsheet title  */}
                <div className=" text-lg font-semibold"> hello there</div>
              </div>
              {/* body  */}
              <div className=" relative p-6 flex-auto">{body}</div>
              {/* footer  */}
              <div className=" flex flex-col gap-2 p-6">
                <div className=" flex flex-row item-center gap-4 w-full">
                  {
                   secondaryAction&& secondaryLabel&&( 
                    <Button
                     outline
                    disabled={disabled}
                    onclick={secondaryAction}
                    label={secondaryLabel}
                  />)
}
                  <Button
                    disabled={disabled}
                    onclick={handleOnSubmit}
                    label={actionLabel}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

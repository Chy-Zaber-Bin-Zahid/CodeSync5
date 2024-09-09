"use client";

import { useMyContext } from "@/context/MyProvider";

function Modal() {
    const { toggleModal, setToggleModal } = useMyContext();
    const handleBackgroundClick = () => {
        setToggleModal(false);
    };
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div
            onClick={handleBackgroundClick}
            className={`fixed top-0 w-full h-screen z-50 flex justify-center items-center ${toggleModal ? "block" : "hidden"
                }`}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div
                onClick={handleContentClick}
                className="relative bg-white rounded p-4 max-w-[500px] w-full mx-auto z-50"
            >
                Modal Content
            </div>
        </div>
    );
}

export default Modal;

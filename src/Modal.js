import React, { forwardRef, useImperativeHandle } from "react";
import "./modal.css";

// modal component
const Modal = forwardRef((props, ref) => {
    // config object allowing to hide the close button and to pass down some customContent to the modal (a react component is preferred)
    let config = {
        showCloseButton: props.showCloseButton,
        customContent: props.customContent,
    };
    const showModal = () => {
        const modal = document.querySelector(".modal");
        const modalwrapper = document.querySelector(".modal-page-wrapper");
        modalwrapper.classList.add("modal-toggle");
        modal.classList.add("modal-toggle2");
    };
    // the modal will hide if you click on the close button or anywhere in the background
    const hideModal = () => {
        const modal = document.querySelector(".modal");
        const modalwrapper = document.querySelector(".modal-page-wrapper");
        modalwrapper.classList.remove("modal-toggle");
        modal.classList.remove("modal-toggle2");
    };
    useImperativeHandle(ref, () => ({
        showModal,
        hideModal,
    }));
    if (config.showCloseButton === false) {
        let closeButton = document.querySelector(".modal-close");
        closeButton.style.display = "none";
    }
    if (config.customContent !== undefined) {
        props.message = "";
        return (
            <div className="modal-component">
                <div onClick={hideModal} className="modal-page-wrapper"></div>
                <div className="modal">
                    <div>{props.customContent}</div>

                    <button onClick={hideModal} className="modal-close">
                        X
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="modal-component">
                <div onClick={hideModal} className="modal-page-wrapper"></div>
                <div className="modal">
                    <div>
                        <p className="modal-message">{props.message}</p>
                    </div>

                    <button onClick={hideModal} className="modal-close">
                        X
                    </button>
                </div>
            </div>
        );
    }
});

Modal.defaultProps = {
    showCloseButton: true,
    customContent: undefined,
    message: "this is a default message, you can modify this by giving a string to the message prop of the Modal. You can also give a custom component to the customContent prop",
};
export default Modal;

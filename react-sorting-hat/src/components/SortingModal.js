import React from "react";
import Modal from "react-modal";

const SortingModal = (props) => {
    return (
    <Modal isOpen={!!props.modalState}
    ariaHideApp={false}
    >
    <h2>Welcome to Hogwarts</h2>
    <h3>To begin the sorting hag ceremony, click below:</h3>
    <button>Start</button>
    </Modal>
    )
};

export default SortingModal;
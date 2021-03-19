import React from 'react';
import { Modal } from 'react-responsive-modal';
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import 'react-responsive-modal/styles.css';
import './RegistrationButton.css'

const RegistrationButton = () => {
    const [isOpen, setOpen] = React.useState(false);
    const OpenModal = () => setOpen(true);
    const CloseModal = () => setOpen(false);

    return (
        <>
            <button className="registration-button" onClick={OpenModal}>
                Оставить заявку
            </button>

            {isOpen && (
                <Modal
                    open={isOpen}
                    onClose={CloseModal}
                    center
                    classNames={{
                        overlayAnimationIn: 'customEnterOverlayAnimation',
                        overlayAnimationOut: 'customLeaveOverlayAnimation',
                        modalAnimationIn: 'customEnterModalAnimation',
                        modalAnimationOut: 'customLeaveModalAnimation',
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}
                    animationDuration={300}
                    aria-labelledby="my-modal-title"
                    aria-describedby="my-modal-description"
                >
                    <RegistrationForm />
                </Modal>
            )}
        </>
    );
};

export default RegistrationButton;

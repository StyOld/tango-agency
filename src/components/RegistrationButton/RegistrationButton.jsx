import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { defaultValues } from '../../config'
import 'react-responsive-modal/styles.css';
import './RegistrationButton.css'

const RegistrationButton = () => {
    const [isOpen, setOpen] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const valuesFromStorage = JSON.parse(localStorage.getItem('formValues')) || defaultValues;
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <>
            <button className="registration-button" onClick={openModal}>
                Оставить заявку
            </button>

            {isOpen && (
                <Modal
                    open={isOpen}
                    onClose={closeModal}
                    center
                    classNames={{
                        overlayAnimationIn: 'customEnterOverlayAnimation',
                        overlayAnimationOut: 'customLeaveOverlayAnimation',
                        modalAnimationIn: 'customEnterModalAnimation',
                        modalAnimationOut: 'customLeaveModalAnimation',
                        overlay: 'customOverlay',
                        modal: isSubmit ? 'customModalThanks' : 'customModalForm',
                    }}
                    animationDuration={300}
                    aria-labelledby="my-modal-title"
                    aria-describedby="my-modal-description"
                >
                    <RegistrationForm
                        defaultValues={valuesFromStorage}
                        isSubmit={isSubmit}
                        setIsSubmit={setIsSubmit}
                        closeModal={closeModal}
                    />
                </Modal>
            )}
        </>
    );
};

export default RegistrationButton;

import React from 'react';
import './ThankYouForm.css'

const ThankYouForm = ({ closeModal }) => {
    return (
        <div className="thank-you-form__container">
            <div className="thank-you-form__title">
                Спасибо за заявку, данные успешно отправлены и мы скоро свяжемся с Вами!
            </div>
            <button
                onClick={closeModal}
                className="thank-you-form__title__button"
            >
                Закрыть форму
            </button>
        </div>
    );
};

export default ThankYouForm;

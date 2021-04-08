import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';
import Select from 'react-select';
import countryToFlag from '../../utils/countryToFlag'
import ThankYouForm from '../ThankYouForm/ThankYouForm';
import { countries, englishLevel } from '../../config'
import './RegistrationForm.css'

const formatOptionLabel = ({ value, label }) => (
    <div style={{ display: "flex" }}>
        <div>{countryToFlag(value)}</div>
        <div style={{ marginLeft: "10px" }}>{label}</div>
    </div>
);

const RegistrationForm = ({ defaultValues, closeModal, setIsSubmit, isSubmit }) => {
    const {
        register,
        handleSubmit,
        errors,
        clearErrors,
        control,
        setValue,
    } = useForm({
        defaultValues: defaultValues,
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        shouldFocusError: false,
    });
    const onSubmit = (data) => {
        setIsSubmit(true);
        localStorage.setItem('formValues', JSON.stringify(data))
    };

    return (
        <>
            {!isSubmit ? (
                <form
                    className="registration-form__container"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <section className="registration-form__section">
                        <label
                            htmlFor="name"
                            className="registration-form__label"
                        >
                            Имя
                        </label>
                        <input
                            name="name"
                            placeholder="Введите Ваше имя"
                            className={`registration-form__input${errors.name ? '-error' : ''}`}
                            ref={register({ required: true, minLength: 3 })}
                            onClick={() => clearErrors('name')}
                        />
                        <div className="registration-form__error-validation">
                            {errors.name?.type === "required" && 'Это поле обязательно для заполнения'}
                            {errors.name?.type === "minLength" && 'Минимум 3 буквы'}
                        </div>
                    </section>

                    <div className="registration-form__section-double" style={{ marginBottom: '13px' }}>
                        <section className="registration-form__section" style={{ flexGrow: 1, marginRight: 10}}>
                            <label
                                htmlFor="age"
                                className="registration-form__label"
                            >
                                Возраст
                            </label>
                            <Controller
                                name="age"
                                as={Select}
                                options={Array.from({length: 45}, (v, i) => ({value: 17+i, label: 17+i}))}
                                control={control}
                                menuColor='red'
                            />
                        </section>

                        <section className="registration-form__section" style={{flexGrow: 2}}>
                            <label
                                htmlFor="country"
                                className="registration-form__label"
                            >
                                Страна проживания
                            </label>
                            <Controller
                                name="country"
                                control={control}
                                render={({ onChange, value }) => (
                                    <Select
                                        options={countries}
                                        formatOptionLabel={formatOptionLabel}
                                        onChange={(value) => {
                                            onChange(value);
                                            setValue('phone', `${value.phone}-`);
                                        }}
                                        value={value}
                                    />
                                )}
                            />
                        </section>
                    </div>

                    <section className="registration-form__section" style={{marginBottom: '27px'}}>
                        <label
                            htmlFor="english_level"
                            className="registration-form__label"
                        >
                            Уровень владения английским языком
                        </label>
                        <Controller
                            name="english_level"
                            as={Select}
                            options={englishLevel}
                            control={control}
                        />
                    </section>

                    <section className="registration-form__section">
                        <label
                            htmlFor="additional_lang"
                            className="registration-form__label"
                        >
                            Дополнительные языки
                        </label>
                        <Controller
                            as={
                                <TextareaAutosize
                                    minRows={2}
                                    maxRows={2}
                                    placeholder="Напишите другие языки и уровень их владения"
                                    className={`registration-form__textarea${errors.additional_lang ? '-error' : ''}`}
                                    onClick={() => clearErrors('additional_lang')}
                                />
                            }
                            name="additional_lang"
                            control={control}
                            rules={{ required: true }}
                        />
                        <div className="registration-form__error-validation">
                            {errors.additional_lang && 'Это поле обязательно для заполнения'}
                        </div>
                    </section>

                    <section className="registration-form__section">
                        <label
                            htmlFor="about"
                            className="registration-form__label"
                        >
                            Ваше хобби
                        </label>
                        <Controller
                            as={
                                <TextareaAutosize
                                    minRows={2}
                                    maxRows={2}
                                    placeholder="В кратце опишите Ваши увлечения"
                                    className={`registration-form__textarea${errors.about ? '-error' : ''}`}
                                    onClick={() => clearErrors('about')}
                                />
                            }
                            name="about"
                            control={control}
                            rules={{ required: true }}
                        />
                        <div className="registration-form__error-validation">
                            {errors.about && 'Это поле обязательно для заполнения'}
                        </div>
                    </section>

                    <section className="registration-form__section">
                        <label
                            htmlFor="phone"
                            className="registration-form__label"
                        >
                            Контактный телефон (Telegram / WhatsApp)
                        </label>
                        <input
                            name="phone"
                            placeholder="Введите Ваши контакты"
                            className={`registration-form__input${errors.phone ? '-error' : ''}`}
                            ref={register({ required: true })}
                            onClick={() => clearErrors('phone')}
                        />
                        <div className="registration-form__error-validation">
                            {errors.phone && 'Это поле обязательно для заполнения'}
                        </div>
                    </section>

                    <button type="submit" className="registration-form__button">
                        Отправить
                    </button>
                </form>
            ) : (
                <ThankYouForm
                    closeModal={closeModal}
                />
            )}
        </>
    );
};

export default RegistrationForm;

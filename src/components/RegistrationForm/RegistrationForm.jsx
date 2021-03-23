import React from 'react';
import { useForm, Controller } from "react-hook-form";
import TextareaAutosize from 'react-textarea-autosize';
import './RegistrationForm.css'

const defaultValues = {
    Name: "",
    About: "",
};

const RegistrationForm = () => {
    const { register, handleSubmit, watch, errors, control } = useForm({
        defaultValues,
        // mode: 'onBlur',
        mode: 'onSubmit',
        shouldFocusError: true,
    });
    const onSubmit = data => console.log(data);

    return (
        <form
            className="registration-form__container"
            onSubmit={handleSubmit(onSubmit)}
        >
            <section className="registration-form__section">
                <label
                    htmlFor="Name"
                    className="registration-form__label"
                >
                    Имя
                </label>
                <input
                    name="Name"
                    // placeholder="Введите Ваше имя"
                    className={`registration-form__input${errors.Name ? '-error' : ''}`}
                    ref={register({ required: true, minLength: 3 })}
                />
                <div className="registration-form__error-validation">
                    {errors.Name?.type === "required" && 'Это поле обязательно для заполнения'}
                    {errors.Name?.type === "minLength" && 'Минимум 3 символа'}
                </div>
            </section>

            <section className="registration-form__section">
                <label
                    htmlFor="About"
                    className="registration-form__label"
                >
                    Ваше хобби
                </label>
                <Controller
                    as={
                        <TextareaAutosize
                            style={{padding: '10px 15px', fontSize: '16px', borderRadius: '4px'}}
                        />
                    }
                    name="About"
                    minRows={3}
                    maxRows={6}
                    control={control}
                    ref={register({ required: true, minLength: 10 })}
                />
                <div className="registration-form__error-validation">
                    {errors.About?.type === "required" && 'Это поле обязательно для заполнения'}
                    {errors.About?.type === "minLength" && 'Минимум 10 символа'}
                </div>
            </section>

            <input type="submit" />
        </form>
    );
};

export default RegistrationForm;

import React from 'react';
import { useForm, Controller } from "react-hook-form";
import TextareaAutosize from 'react-textarea-autosize';
import Select from 'react-select-native';
import './RegistrationForm.css'

const defaultValues = {
    name: "",
    about: "",
    age: 17,
};

const RegistrationForm = () => {
    const { register, handleSubmit, errors, clearErrors, control } = useForm({
        defaultValues,
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        shouldFocusError: false,
    });
    const onSubmit = data => console.log(data);
    console.log('errors=', errors)

    return (
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
                    {errors.name?.type === "minLength" && 'Минимум 3 символа'}
                </div>
            </section>

            <section className="registration-form__section">
                <label
                    htmlFor="age"
                    className="registration-form__label"
                >
                    Ваш возраст
                </label>
                <Controller
                    render={(
                        { onChange, value, ref }
                    ) => (
                        <Select
                            onChange={e => onChange(e)}
                            options={Array.from({length: 45}, (v, i) => ({value: 17+i, label: 17+i}))}
                            unselected={{value: 17, label: 17}}
                            value={value}
                            inputRef={ref}
                            className='registration-form__select'
                            open={true}
                        />
                    )}
                    name="age"
                    control={control}
                />
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
                            minRows={3}
                            maxRows={6}
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

            <input type="submit" />
        </form>
    );
};

export default RegistrationForm;

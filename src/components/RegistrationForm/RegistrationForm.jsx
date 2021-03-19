import React from 'react';
import { useForm } from "react-hook-form";
import './RegistrationForm.css'

const RegistrationForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form
            className="registration-form__container"
            onSubmit={handleSubmit(onSubmit)}
        >
            {/* register your input into the hook by invoking the "register" function */}
            <input name="example" defaultValue="test" ref={register} />

            {/* include validation with required or other standard HTML validation rules */}
            <input name="exampleRequired" ref={register({ required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
};

export default RegistrationForm;

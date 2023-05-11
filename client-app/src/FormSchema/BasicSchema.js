import * as yup from "yup";

const passwordValidator = /^.*(?=.{6,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
// Password must contain at least 6 characters, one uppercase, one number

export const basicSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email"),
    password: yup
        .string()
        .min(6)
        .matches(passwordValidator, {message: 'include an upper case, lower case, and number'}),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords do not match")
});
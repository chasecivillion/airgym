import * as yup from "yup";

const passwordValidator = /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
// Password must contain at least 8 characters, one uppercase, one number and one special case character

const basicSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),
    password: yup
        .string()
        .min(6)
        .matches(passwordValidator, {message: 'Password must be a minimum of 6 characters including 1 upper case, 1 lower case and 1 special character'})
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords did not match")
        .required("Required")
})
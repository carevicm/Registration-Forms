import * as yup from "yup";

const emailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email field is required.")
    .email("Please enter a valid e-mail.")
});

export default emailValidationSchema;

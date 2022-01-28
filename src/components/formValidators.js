import * as yup from "yup";

export const messageSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required!")
    .max(25, "Must be maximum 25 characters!"),
  message: yup
    .string()
    .required("Message is required!")
    .min(15, "Must be at least 15 characters!"),
});

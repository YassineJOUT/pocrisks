import * as Yup from "yup";

const validEmail = Yup.string()
  .email("Must be a valid email address")
  .max(255, "Too long for an email");

const validPassword = Yup.string()
  .min(8, "Password must have at least 8 caracters")
  .max(255, "Too long password")
  .required("Password is required");

const validUsername = Yup.string()
  .min(3, "Username must have more than 3 caracters")
  .max(50, "Username must have less than 50 caracters")
  .required("Username is required");

export const validPhoneNumber = Yup.number()
.typeError("That doesn't look like a phone number")
.positive("A phone number can't start with a minus")
.integer("A phone number can't include a decimal point")
.max(15)
.required('A phone number is required');

const validUrl = Yup.string().matches(
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
  "Enter correct url!"
);

export const resetPasswordSchema = Yup.object().shape({
  password1: validPassword,
  password: Yup.string().oneOf(
    [Yup.ref("password1"), null],
    "Passwords must match"
  ),
});

export const loginValidationSchema = Yup.object().shape({
  email: validEmail.required("Email is required"),
  password: validPassword,
});


export const registrationSchema = Yup.object().shape({
  username: validUsername,
  name: validUsername,
  email: validEmail,
  password: validPassword,
});


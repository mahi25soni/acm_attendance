import * as yup from "yup";

export const attendanceSchema = yup.object().shape({
    name : yup.string().required("Enter your name"),
    rollnumber : yup
    .string()
    .required("Enter your roll number")
    .min(7, "Invalid roll number")
    .max(7, "Invalid roll number"),

    semester : yup.string().required("Enter your semester"),
    department : yup.string().required("Enter your name"),
    section : yup.string().required("Enter your name")

})  
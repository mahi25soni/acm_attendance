import * as yup from "yup";

export const attendanceSchema = yup.object().shape({
    name : yup.string().required("Enter your name"),
    rollnumber : yup
    .string()
    .required("Enter your roll number")
    .min(6, "Invalid roll number"),
    semester : yup.string().required("Ent,er your semester"),
    department : yup.string().required("Enter your department"),
    section : yup.string().required("Enter your section")

})  
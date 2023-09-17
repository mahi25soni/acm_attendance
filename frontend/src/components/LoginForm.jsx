import React , {useEffect, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { attendanceSchema } from "../schema/allSchema";
import { UserContext } from "../context/UserContext";


export default function LoginForm() {
  const history = useNavigate()
  const {takeAttendance} = useContext(UserContext)
  const formik = useFormik({
    initialValues: {
      name: '',
      rollnumber: '',
      semester: '', // Initialize semester field
      department: '', // Initialize department field
      section: '', // Initialize class field
    },
    validationSchema : attendanceSchema,
    onSubmit: async function (values) {
      const nothing =  await takeAttendance(values)
      console.log("the nothing is ", nothing)
      if(nothing.success) {
        history("/taken")
      }
      else {
        alert("Need roll number is already registed")
      } 
    }
  });

  return (
    <div className="min-h-screen flex items-start justify-center " id="belowNavbar">
      <div className="p-8 rounded shadow-xl w-96 mt-12" id="theLoginForm">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-500 underline">Attendance</h2>    
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full border rounded-md px-3 py-2  focus:outline-none focus:border-blue-500 focus:border-2"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="rollnumber"
              name="rollnumber"
              onChange={formik.handleChange}
              value={formik.values.rollnumber}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:border-2"
              placeholder="Roll number"
            />
          </div>
          <div className="mb-4">
            <select
              id="semester"
              name="semester"
              onChange={formik.handleChange}
              value={formik.values.semester}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:border-2 lighter-placeholder"
            >
              <option value="" disabled>Select Semester</option>
              <option value="first">1st</option>
              <option value="third">3rd</option>
              <option value="firth">5th</option>
              <option value="seventh">7th</option>
            </select>
          </div>
          <div className="mb-4">
            <select
              id="department"
              name="department"
              onChange={formik.handleChange}
              value={formik.values.department}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:border-2 lighter-placeholder"
            >
              <option value="" disabled>Select Department</option>
              <option value="CEC">CEC</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="ME">ME</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="section"
              name="section"
              onChange={formik.handleChange}
              value={formik.values.section}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:border-2"
              placeholder="Class"
            />
          </div>
          <div className="flex items-center justify-between text-center">
            <button
              type="submit"
              className="bg-white text-blue-500 px-4 py-2 rounded-lg font-bold hover:bg-blue-600 hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

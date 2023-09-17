import React from "react";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-start justify-center " id="belowNavbar">
      <div className="p-8 rounded shadow-xl w-96 mt-12" id="theLoginForm">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-400 underline">Attendance</h2>    
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              className="w-full border rounded-md px-3 py-2  focus:outline-none focus:border-blue-500 focus:border-2"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="rollnumber"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:border-2"
              placeholder="Roll number"
            />
          </div>
          <div className="mb-4">
            <select
              id="semester"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:border-2 lighter-placeholder"
            >
              <option value="" disabled selected>Semester</option>
              <option value="first">1st</option>
              <option value="third">3rd</option>
              <option value="firth">5th</option>
              <option value="seventh">7th</option>

              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <select
              id="department"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:border-2 lighter-placeholder"
            >
              <option value="" disabled selected>Department</option>
              <option value="cec">CEC</option>
              <option value="it">IT</option>
              <option value="ece">ECE</option>
              <option value="me">ME</option>

              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="class"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:border-2"
              placeholder="Class"
            />
          </div>
          <div className="flex items-center justify-between text-center">
            <button
              type="submit"
              className="bg-white text-blue-500 px-4 py-2 rounded-lg font-bold hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

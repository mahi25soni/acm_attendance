import { UserContext  } from "./UserContext";
import { useState  } from "react";
import axios from "axios"


const UserState = (props) => {
    const [user, setUser] = useState({})

    const takeAttendance = async (data) => { // Make takeAttendance async
      console.log("take attendance ke function mei aa gaya ", data);
      try {
        const response = await axios.post("http://localhost:3000/register/", data);
        return response.data;
      } catch (error) {
        console.log("Error : ", error);
        throw error; // Rethrow the error to be caught in the onSubmit function
      }
    };

    return (
        <UserContext.Provider value={{takeAttendance}}>
          <div>{props.children}</div>
        </UserContext.Provider>
    );
}

export default UserState
import React, { useEffect, useState, useRef } from "react";
// import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import axios from "axios";
import DatePicker from "react-date-picker";

const CreateExercise = (props: any) => {
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const onChangeUsername = (e: any) => setUserName(e.target.value);
  const onChangedescription = (e: any) => setDescription(e.target.value);
  const onChangeDuration = (e: any) => setDuration(e.target.value);
  const onchangeDate = () => setDate(date);

  console.log("This is the current date: ", date);
  const onSubmit = (e: any) => {
    e.preventDefault();
    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };
    console.log(exercise);

    axios
      .post("/exercise/add", exercise)
      .then((res) => {
        console.log(res.data);
        //console.log({exercise});
        setUserName("");
        // window.location='/'
      })
      .catch(function () {
        console.log("Exercises NOT AAADED");
      });

    // window.location='/'
  };

  const getUsersFromDataDB2 = () => {
    axios
      .get("/user/getUsers")
      .then((res) => {
        console.log("This are the users DB23 --------------> ", res.data);
        if (res?.data.length > 0) {
          setUsers(res?.data?.map((user: any) => user.username));
          console.log(`this is the Iteration from get userfrom db ${res.data}`);
          setUserName(res.data[0].username); // This set the user index to show in the drop down username :
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUsersFromDataDB2();
    setDate(date);
  }, []);

  const inputRef = useRef(null);

  return (
    <div>
      <h3>Create new Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select ref={inputRef} required className="form-control" value={username} onChange={onChangeUsername}>
            {users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangedescription}
          ></input>
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input type="text" required className="form-control" value={duration} onChange={onChangeDuration}></input>
        </div>
        <div className="form-group">
          <label>Date: </label>
          <DatePicker onChange={onchangeDate} />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Awomse exercise log" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};
export default CreateExercise;

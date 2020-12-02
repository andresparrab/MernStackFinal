import React, { useEffect, useState, useRef } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import axios from "axios";

export const editExercise = (props: any) => {
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const onChangeUsername = (e: any) => setUserName(e.target.value);
  const onChangedescription = (e: any) => setDescription(e.target.value);
  const onChangeDuration = (e: any) => setDuration(e.target.value);
  const onchangeDate = () => setDate(date);

  useEffect(() => {
    getUsersFromDataDB2();
    // console.log("this is props match id", props.match.params.id);
  }, []);

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
      .put("/exercise/update/" + props.match.params.id, exercise)
      .then((res) => {
        console.log(res.data);
        // window.location='/'
      })
      .catch(function () {
        console.log("Exercises NOT AAADED");
      });
  };

  const getUsersFromDataDB2 = () => {
    axios
      .get("/exercise/" + props.match.params.id)
      .then((res) => {
        setUserName(res.data.username);
        setDescription(res.data.description);
        setDuration(res.data.duration);
        setDate(new Date(res.data.date));
        console.log("this is the exerceise/+props.match.id", res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("/user/getUsers")
      .then((res) => {
        if (res.data.length > 0) {
          setUsers(res.data.map((user: any) => user.username));
          console.log("this is the Iteration from get userfrom DB", res.data);
        }
      })
      .catch((error) => console.log(error));
  };

  const inputRef = useRef(null);

  return (
    <div>
      <h3>Edit Exercise Log</h3>
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
          <DatePicker onChange={onchangeDate}></DatePicker>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit exercise log" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default editExercise;

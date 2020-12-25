import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => (
  <tr>
    <td> {props.exercise.username} </td>
    <td> {props.exercise.description} </td>
    <td> {props.exercise.duration} </td>
    <td> {props.exercise.date.substring(0, 10)} </td>
    <td>
      <Link to={"/update/" + props.exercise._id} className="btn btn-primary">
        {" "}
        Edit{" "}
      </Link>{" "}
      <a href="#" onClick={() => props.deleteExercise(props.exercise._id)} className="btn btn-danger">
        Delete
      </a>
    </td>
  </tr>
);

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
    };
  }

  exerciseList = () => {
    return this.state.exercises.map((curr) => {
      return <Exercise exercise={curr} deleteExercise={this.deleteExercise} key={curr._id} />;
    });
  };

  deleteExercise = (id) => {
    axios.delete("http://localhost:5000/exercises/" + id).then((res) => console.log(res.data));

    this.setState((prevState) => ({
      exercises: prevState.exercises.filter((el) => el._id !== id),
    }));
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((res) => {
        console.log(res);
        this.setState({
          exercises: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h3> Logged Exercises </h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th> Username </th>
              <th> Description </th>
              <th> Duration </th>
              <th> Date </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

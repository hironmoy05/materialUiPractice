import "./styles/style.scss";
import { render } from "react-dom";
import App from "./components/App";

render (<App />, document.getElementById("root"));

const user = {
  name: "Hironmoy Dhar",
  age: 32,
  job: "Web Developer",
};

const newUser = {
  ...user,
  name: "Gaurav",
  age: 33,
  job: "full stack Developer"
}

console.log(user);
console.log(newUser);

//import "react";
// import "react-dom";
import React from "react";
var ReactDOM = require("react-dom");
const name = "kalaiselvan";
var date = new Date();
var year = date.getFullYear();
ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));
ReactDOM.render(
  <div>
    <h1>
      This is {name}'s checklist {year}
    </h1>
    <ul>
      <li>dsa</li>
      <li>full stack</li>
      <li>app dev</li>
    </ul>
    <p>Copyrights year {}</p>
  </div>,
  document.getElementById("root")
);
// var h1 = document.createElement("h1");
// h1.innerText = "hello world";
// document.getElementById("root").append(h1);

// import "react";
// import "react-dom";
import React from "react";
var ReactDOM = require("react-dom");
ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));
ReactDOM.render(
  <div>
    <h1>This is my checklist</h1>
    <ul>
      <li>dsa</li>
      <li>full stack</li>
      <li>app dev</li>
    </ul>
  </div>,
  document.getElementById("root")
);
// var h1 = document.createElement("h1");
// h1.innerText = "hello world";
// document.getElementById("root").append(h1);

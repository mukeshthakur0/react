import React from "react";
function Box() {
  const addEventListener = () => {
    alert("Task added");
};
    return (
      <div className="box">
        <h1>add your task</h1>
        <input type="text"  placeholder="enter your task"/>
        <button onClick={addEventListener}>add</button>
        <script>
          
        </script>
      </div>
    )
  }
export default Box;

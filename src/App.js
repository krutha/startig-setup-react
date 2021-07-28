import React from "react";
import Expenses from "./componets/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 400,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  // Syntax in react
  // we can't return more then on thing , we can't write the two separate  elemets side by side  eing returned thats y we need wrapper.
  return React.createElement(
    "div",
    {}, //--  empty object , this div has no attributes so we can put empty
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses })
  );

  // CODE IN jsx
  // return (
  //   <div>
  //     <h2>Let's get started!</h2> // first child in the elements
  //    <Expenses items = {expenses}/>
  //   </div>
  // );
}

export default App;

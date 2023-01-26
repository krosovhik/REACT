import React from "react";
import "./CFooter.css";

// function CFooter() {
//   let date = new Date();
//   return (
//     <div>
//       <h5>AKIS, przykdowy serwis React. Dzisiaj mamy: {date.toString()}</h5>
//     </div>
//   );
// }

// export const CFooter = () => {
//   let date = new Date();
//   return (
//     <div>
//       <h5>AKIS, przykdowy serwis React. Dzisiaj mamy: {date.toString()} </h5>
//     </div>
//   );
// };

// export named CFooter;

// export const CFooter = () => {
//   let date = new Date();
//   return React.createElement(
//     "div",
//     { className: "footerDivClass" },
//     null,
//     React.createElement(
//       "h5",
//       { id: "footerText", className: "footerTextClass" },
//       "AKIS, przykdowy serwis React. Dzisiaj mamy:" +
//         date.toLocaleDateString("pl-PL")
//     )
//   );
// };

export const CFooter = (props) => {
  let date = new Date();
  return (
    <div>
      <h5>
        AKIS, przykdowy serwis React. Dzisiaj mamy:{" "}
        {date.toLocaleDateString("pl-PL")}
        <br />
        Stan pogody: {props.weather}, temperatura: {props.temp}
        <br />
        {props.children}
      </h5>
    </div>
  );
};

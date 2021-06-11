import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./searchParams";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt me!"),
  //   React.createElement(Pet, {
  //     name: "preppie",
  //     animal: "Dog",
  //     breed: "Rotweiller",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Sanchy",
  //     animal: "Dog",
  //     breed: "German Shepherd",
  //   }),
  // ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));

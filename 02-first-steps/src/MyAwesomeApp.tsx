/*export function MyAwesomeApp() {
   return(
    <>
        <h1>David</h1>
        <h3>Gallegos</h3>
    </>
   );    
}*/

import type { CSSProperties } from "react";

const myStyles: CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: 10,
  padding: 10,
  marginTop: 30,
};

// same with diferent implementation
export const MyAwesomeApp = () => {
  const firstName = "David";
  const lastName = "Gallegos";
  const games = ["Elden Ring", "Smash", "Metal Gear"];
  const isActive = true;
  const address = {
    zipCode: "18002",
    country: "Spain",
  };

  return (
    <>
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>

      <p> {games.join(", ")} </p>

      <h1> {isActive ? "active" : "inactive"} </h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
};

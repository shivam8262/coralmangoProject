import React from "react";

const CardList = ({ sortedData }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {sortedData.map((person) => (
        <div style={{ width: "30%", margin: "10px", borderRadius:"20px"}}>
          <div style={{ padding: "20px", background: "#eee" }}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.mJgPfg9oxD6l0YdvMUjEngHaHa&pid=Api&P=0"
              alt={person.name}
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <h1 className="name">{person.name}</h1>
            <p className="occupation">{person.occupation} </p>
            <p className="age">{person.age} years</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
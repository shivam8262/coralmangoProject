import React, { useState } from "react";
import CardList from "./CardList";
import Navigation from "./Navigation";

const DataTable = ({  }) => {
  const[show,setShow]=useState(false);
  const a = [1, 3, 5, 2, 4]
    const data = [
        {
          name: "John Doe",
          age: 32,
          occupation: "Developer"
        },
        {
          name: "Jane Doe",
          age: 27,
          occupation: "Designer"
        },
        {
          name: "Bob Smith",
          age: 45,
          occupation: "Manager"
        }
      ]
      
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const sortedData = data
    .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });

    // const result1 = a.filter
    // const filteredItems= a.filter((item,index) =>{
    //   return (index ℅ 2 ===0 )
    //   })

    const result1 = a.filter((item, index) => {
      if(index%2 === 0) {
          return item;
      }
  })
  console.log(result1);


      const result2 = a.map(x => x * x );
      console.log("result2",result2)

      const result3 = a.filter((item, index) => {
        if(index%2 === 0) {
            return item * item;
        }
    })
    console.log("result3",result3);


  return (
    <div className="datatable">
      <div className="nav">
        <Navigation />
      </div>
      <div className="input">
        <input className="inputtab"
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="togglerbutton" onClick={()=>setShow(!show)}>View in card</button>
      </div>
      {searchTerm && (
        <div>
          Viewing filtered results for "{searchTerm}"
        </div>
      )}
      {!show ?
      <div className="tabledata">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("age")}>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      </div> : <CardList sortedData={sortedData} /> }
    </div> 
  );
};

export default DataTable;
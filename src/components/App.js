import React, {useState} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import db from "../data/db.json"

function App() {
  console.log("db", db);
  const [list, setList] = useState(db.planeteers);

  const onSearch = (search) => {
    console.log("search", search);

    // filter the list
    const filtered = db.planeteers.filter((planet) => {
      return planet.name.toLowerCase().includes(search.toLowerCase()) || planet.bio.toLowerCase().includes(search.toLowerCase());
    });

    setList(filtered);
  }

  return (
    <div>
      <Header />
      <onSearch={onSearch}/>
      <RandomButton />
      <PlaneteersContainer list={list} />
    </div>
  );
}

export default App;

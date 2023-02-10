import React, {useState} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import db from "../data/db.json"

function App() {
  
  const [list, setList] = useState(db.planeteers);

  const onSearch = (search) => {
    console.log("search", search);

       const filtered = db.planeteers.filter((planties) => {
      return planties.name.toLowerCase().includes(search.toLowerCase()) || planties.bio.toLowerCase().includes(search.toLowerCase());
    });

    setList(filtered);
  }

  return (
    <div>
      <Header />
      <onSearch onSearch={onSearch}/>
      <RandomButton />
      <PlaneteersContainer list={list} />
    </div>
  );
}

export default App;

import React , {useState, useEffect}from "react";
import Datatable from "./datatable";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(()=>{
    fetch("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI")
    .then(response => response.json())
    .then((json) => setData(json));
  }, [])

  function search(rows) {
    return rows.filter((row) => row.branch.toLowerCase().indexOf(q) > -1);
  }

  return (
    <div>
      <div>
        <input type="text" value={q} onChange={(e)=> setQ(e.target.value)}/>
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );
}

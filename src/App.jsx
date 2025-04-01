import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  let [name, setname] = useState();

  async function fetchingdata() {
    let res = await axios.get("http://localhost:2000/getdata");
    setname(res.data);
    console.log(res);
  }

  useEffect(() => {
    fetchingdata();
  }, []);

  return (
    <>
      <h1>Hii , Mr. {name} </h1>
    </>
  );
}

export default App;

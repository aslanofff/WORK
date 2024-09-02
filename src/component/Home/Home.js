import { useEffect, useState } from "react";
import "./Home.css";

let Home = () => {
  let [msg, setMsg] = useState("Send")
  useEffect(() => {
    fetch('https://acb-api.algoritmika.org/api/transaction')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error", err));
  }, [])

  return (
    <div>
      {msg}
    </div>
  )
}
export default Home;

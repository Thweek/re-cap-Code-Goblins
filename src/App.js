import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react"

const clientId = process.env.REACT_APP_V_ID;
const clientSecret = process.env.REACT_APP_V_SECRET;
const accessToken = process.env.REACT_APP_V_TOKEN;

let Vimeo = require("vimeo").Vimeo;
let client = new Vimeo(clientId, clientSecret, accessToken);

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    async function getData() {
      await client.request(
        {
          method: "GET",
          path: "/me/videos", //"/tutorial",
        },
        function (error, body, status_code, headers) {
          if (error) {
            console.log(error);
          }
      
          console.log(body);
          setData(body)
          console.log(data)
        }
        );
    }
    getData();
  }, []);
   

function handleChange(e){
  console.log(e.target.value)
} 


  return (
    <div className="App">
      <select onChange = {handleChange}>
        {/* <option value={data[0].uri}>{data[0].name}</option>
        <option value={data[1].uri}>{data[1].name}</option>
        <option value={data[2].uri}>{data[2].name}</option>
        <option value={data[3].uri}>{data[3].name}</option> */}
      </select>
    </div>
  );
}

export default App;

import { useState, useEffect, useContext } from "react";
import "../stylings/Home.css"
import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar"
// import Create from "../components/Create";
// import Create from "../screens/Create";
// import Delete from "./Delete";
// import SideBar from "../components/SideBar";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { valOfSearch, valOfSearchContext } from "../App";

const Home = () => {

  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [search, setSearch] = useState('');
  const { data: contextData } = useContext(valOfSearchContext)
  useEffect(() => {
    fetchData(contextData);
  },
    [contextData]
  )
 

  // const thisActAaSetSearch = (newValue) => {
  //   setSearch(newValue)
  // }

  const fetchData = (name) => {
    fetch(`https://api.escuelajs.co/api/v1/products?title=${name}`)
      .then((res) => {
        if (!res.ok) {
          setError(true)
          throw Error(`Error Encountered. ${res.status} ${res.statusText}`)
        } else {
          console.log('Data Incoming');
          return res.json();
        }
      }
      )
      .then((data) => {
        console.log(data);
        setData(data)
      })
  }
  function showcase() {
    return (
      <div className="cardList">
        {data
          // .filter((item) => {
          //     return search.toLocaleLowerCase === '' ? item : item.title.toLocaleLowerCase().includes(search)
          // })
          .map((data) => {
            // const { title, id, images, description, price } = data
            return (
              <div className="card" key={data.id}  >
                <div className="imgBox">
                  <img src={data.images} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <h5 className="card-title">Id - {data.id}</h5>
                  <p className="card-text">{data.description}</p>
                  <h2 className="price"> ${data.price}</h2>
                </div>
              </div>
            )
          }).reverse()
        }
      </div>
    )
  }
  return (

    <div className='App' >
      <div className="mainBox">
        <div>
          {/* <Create passdata={setData} /> */}
          {/* <Navbar newValue={search} thisActAaSetSearch={thisActAaSetSearch} /> */}
        </div>


        <div className="displayBox">
          {showcase()}

        </div>
      </div>
    </div>

  );
}

export default Home;
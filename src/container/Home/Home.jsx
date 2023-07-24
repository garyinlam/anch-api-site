import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header'
import Table from '../../components/Table/Table'
import "./Home.scss"

const Home = () => {

  const defaultData  = [
    {
      id: '',
      name: {
        "name-USen": ''
      },
      "image-uri": "",
      species: "",
      "catch-phrase": '',
    },
  ]

  const [data, setData] = useState(() =>[...defaultData]);

  const getVillagers = async () => {
    const res = await fetch(
      `https://acnhapi.com/v1/villagers/`
    );
    const data = await res.json();
    const dataArray = Object.values(data)
    setData(dataArray);
    console.log(dataArray);
  };

  useEffect(() => {
    getVillagers();
  }, []);

  return (
    <div className="home">
      <Header/>
      <Table data={data}/>
    </div>
  )
}

export default Home
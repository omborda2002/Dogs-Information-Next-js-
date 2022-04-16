import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";
import DefaultLayout from "../../layouts/DefaultLayout";

//TODO: http://localhost:3000/dogs
//FIXME: HERE 2 times function run and Card component in "img "
export default function Index() {
  const [dogs, setDogs] = useState([]);
  //Fetching dogs
  const fetchDogs = async () => {
    let res = await axios.get("/api/dogs");
    const { data } = res;
    setDogs(data);
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <>
      <DefaultLayout>
        <div className="main__h1">
          <h1>DOGS COLLECTION</h1>
        </div>
        <div className="main__card">
          {dogs.map((data, i) => {
            return (
              <Card
                key={i}
                image={data.image.url}
                id={data.id}
                name={data.name}
                bred_for={data.bred_for}
                origin={data.origin}
              />
            );
          })}
        </div>
      </DefaultLayout>
    </>
  );
}

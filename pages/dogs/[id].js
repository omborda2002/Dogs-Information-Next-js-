import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import DefaultLayout from "../../layouts/DefaultLayout";
import axios from "axios";
import Style from "../../styles/inImage.module.css";

export default function Ids() {
  const [dog, setDog] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;
    const fetching = async () => {
      const res = await axios(`/api/dogs/${id}`);
      const data = res.data;
      setDog(data);
    };
    fetching();
  }, [router.isReady]);

  return (
    <>
      <DefaultLayout>
        <div className={Style.con}>
          {/* ID: {id} */}
          <h1>Dog Data</h1>
          <img
            className={Style.imgSrc}
            src={dog && dog?.image?.url}
            alt={dog && dog?.name}
          />
          <p>Name : {dog.name ? dog.name : "Not found"}</p>
          <p>bread_for : {dog.bred_for ? dog.bred_for : "Not found"}</p>
          <p>
            bread_group:
            {dog.breed_group ? dog.breed_group : "Not found"}
          </p>
          <p>life_span : {dog.life_span ? dog.life_span : "Not found"}</p>
          <p>temperament : {dog.temperament ? dog.temperament : "Not found"}</p>
          <p>origin : {dog.origin ? dog.origin : "Not found"}</p>
          <p>
            weight : imperial - {dog?.weight?.imperial} || metric :
            {dog?.weight?.metric}
          </p>
          <p>
            height : imperial - {dog?.height?.imperial} || metric :
            {dog?.height?.metric}
          </p>
        </div>
      </DefaultLayout>
    </>
  );
}

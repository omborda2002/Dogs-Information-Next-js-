import React from "react";
import style from "../styles/card.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Card(props) {
  const router = useRouter();
  // let u = props?.now[0]?.image?.url;
  return (
    <div
      className={style.card}
      onClick={() => router.push(`/dogs/${props.id}`)}
    >
      {/* <Image
      src={u}
      alt="Picture of the author"
      width={500}
      height={500}
    /> */}

      <img className={style.imgs} src={props.image} alt={props.name} />
      <div className={style.card_in}>
        <h2 className={style.h2}>{props.name}</h2>
        <p className={style.p_for}>{props.bred_for} </p>
        <p className={style.p_for}>{props.origin} </p>
      </div>
    </div>
  );
}

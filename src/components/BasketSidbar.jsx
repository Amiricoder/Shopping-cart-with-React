import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";

import styles from "./BasketSidebar.module.css";

function BasketSidbar({ state, clickHandler }) {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total :</p>
        <span>{state.total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>quantity :</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status :</p>
        <span>{!state.checkout && "pending ..."}</span>
      </div>
      <button onClick={() => clickHandler("CECKOUT")}>CheckOut</button>
    </div>
  );
}

export default BasketSidbar;

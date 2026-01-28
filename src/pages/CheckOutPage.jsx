import React from "react";
import { useCart } from "../context/CartProvider";
import { TbBasketExclamation } from "react-icons/tb";
import BasketCard from "../components/BasketCard";
import BasketSidbar from "../components/BasketSidbar";

import styles from "./CheckOutPage.module.css";

function CheckOutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, data) => {
    dispatch({ type: type, payload: data });
  };

  if (!state.itemsCounter) {
    return (
      <div className={styles.Tb}>
        <TbBasketExclamation />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSidbar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;

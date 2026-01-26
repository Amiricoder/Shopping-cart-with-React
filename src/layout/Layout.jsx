import React from "react";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { useCart } from "../context/CartProvider";
function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Home</Link>
        <div>
          <Link to="/checkout">
            <PiShoppingBagOpenBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </Link>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By M.Amiri</p>
      </footer>
    </>
  );
}

export default Layout;

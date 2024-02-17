import React, { useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

export const themeContext = React.createContext();
function ThemeContext({ children }) {
  const [activeSide, setActiveSide] = useState(false);
  const [activeCard, setActiveCard] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [cartItems, setCartItems] = useLocalStorageState([], "cartItems");

  function addItemToCart(
    id,
    title,
    image,
    quantity,
    price,
    category,

    initialPrice
  ) {
    let itemExists = false;
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        itemExists = true;
        return {
          ...item,
          quantity: item.quantity + quantity,
          price: price * (item.quantity + quantity),
          // Assuming price is the unit price, we do not need to update it here
        };
      }
      return item;
    });

    if (!itemExists) {
      const newItemObject = {
        id,
        title,
        image,
        quantity,
        price, // store the unit price
        category,

        initialPrice,
      };
      updatedCartItems.push(newItemObject);
    }

    setCartItems(updatedCartItems);
  }

  return (
    <themeContext.Provider
      value={{
        activeSide: activeSide,
        setActiveSide: setActiveSide,
        activeCard: activeCard,
        setActiveCard: setActiveCard,
        activeSearch: activeSearch,
        setActiveSearch: setActiveSearch,
        cartItems: cartItems,
        addItemToCart: addItemToCart,
      }}
    >
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContext;

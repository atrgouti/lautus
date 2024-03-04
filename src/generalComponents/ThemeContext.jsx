import React, { useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

export const themeContext = React.createContext();
function ThemeContext({ children }) {
  const [activeSide, setActiveSide] = useState(false);
  const [activeCard, setActiveCard] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [cartItems, setCartItems] = useLocalStorageState([], "cartItems");
  const [wishList, setWishList] = useLocalStorageState([], "wishList");
  const [sizeGuide, setSizeGuide] = useState(false);

  function addItemToCart(
    id,
    title,
    image,
    quantity,
    price,
    category,
    initialPrice,
    city,
    shipping
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
        city,
        shipping,
      };
      updatedCartItems.push(newItemObject);
    }

    setCartItems(updatedCartItems);
  }

  function handleDeleteMovies(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }

  function increaseQuantity(id) {
    setCartItems((allItems) =>
      allItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: (item.quantity + 1) * item.initialPrice,
            }
          : item
      )
    );
  }

  function decreaseQuntity(id) {
    setCartItems((allItems) =>
      allItems.map((item) =>
        item.id === id
          ? item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: (item.quantity - 1) * item.initialPrice,
              }
            : item
          : item
      )
    );
  }

  //wish list functions
  function addItemsToWishList(id, title, image, initialPrice) {
    const checkIfExists = wishList.some((item) => item.id === id);

    if (checkIfExists) {
      const updatedList = wishList.filter((item) => item.id !== id);
      setWishList(updatedList);
    }
    if (!checkIfExists) {
      const newItem = {
        id,
        title,
        image,
        initialPrice,
      };
      const updatedWishList = [...wishList, newItem];
      setWishList(updatedWishList);
      // console.log("zdnah jdid");
    }
  }

  function deleteProductWishList(id) {
    setWishList((item) => item.filter((item) => item.id !== id));
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
        handleDeleteMovies: handleDeleteMovies,
        increaseQuantity: increaseQuantity,
        decreaseQuntity: decreaseQuntity,
        addItemsToWishList: addItemsToWishList,
        deleteProductWishList: deleteProductWishList,
        wishList: wishList,
        sizeGuide: sizeGuide,
        setSizeGuide: setSizeGuide,
      }}
    >
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContext;

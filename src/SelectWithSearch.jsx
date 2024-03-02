import React, { useState, useEffect, useRef } from "react";

const SelectWithSearch = ({ cities, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleSelectOption = (option) => {
    setSearchTerm("");
    setIsOpen(false);
    onSelect(option);
  };

  const filteredOptions = Object.keys(cities).filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      ref={selectRef}
      style={{ position: "relative", width: "300px", margin: " 0px 10px" }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
        }}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderTop: "none",
            borderRadius: "0 0 4px 4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            height: "200px",
            overflowY: "auto",
          }}
        >
          {filteredOptions.map((city, index) => (
            <div
              key={index}
              style={{
                padding: "8px",
                cursor: "pointer",
              }}
              onClick={() => handleSelectOption(city)}
            >
              {city} - Shipping price: {cities[city]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectWithSearch;

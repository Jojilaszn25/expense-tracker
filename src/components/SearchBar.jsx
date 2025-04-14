import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="🔍 Search expenses..."
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "8px",
        margin: "20px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    />
  );
};

export default SearchBar;

import React from "react";

const ExpenseForm = ({ formData, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2>Add Expense</h2>
      <input
        type="text"
        name="description"
        placeholder="Enter expense title"
        value={formData.description}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="notes"
        placeholder="Enter expense description"
        value={formData.notes}
        onChange={onChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Enter category"
        value={formData.category}
        onChange={onChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Enter amount"
        value={formData.amount}
        onChange={onChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={onChange}
        required
      />
      <button type="submit" style={{ background: "black", color: "white", padding: "10px", border: "none" }}>
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;

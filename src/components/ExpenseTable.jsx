import React from "react";

const thStyle = { padding: "10px", textAlign: "left" };
const tdStyle = { padding: "10px", borderBottom: "1px solid #ccc" };

const ExpenseTable = ({ expenses }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "black", color: "white" }}>
            <th style={thStyle}>Expense</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={index} style={{ background: index % 2 === 0 ? "#eee" : "#fff" }}>
              <td style={tdStyle}>{item.description}</td>
              <td style={tdStyle}>{item.notes}</td>
              <td style={tdStyle}>{item.category}</td>
              <td style={tdStyle}>{item.amount}</td>
              <td style={tdStyle}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;

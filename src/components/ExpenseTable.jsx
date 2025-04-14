import React from "react";

const thStyle = { padding: "10px", textAlign: "left" };
const tdStyle = { padding: "10px", borderBottom: "1px solid #ccc" };

const ExpenseTable = ({ expenses }) => {
  return (
    <div style={{ overflowX: "auto", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", background: "#fff" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#111", color: "#fff", textTransform: "uppercase" }}>
            <th style={thStyle}>Expense</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={index} style={{ background: index % 2 === 0 ? "#f4f4f4" : "#fff" }}>
              <td style={tdStyle}>{item.description}</td>
              <td style={tdStyle}>{item.notes}</td>
              <td style={tdStyle}>{item.category}</td>
              <td style={tdStyle}>Ksh {item.amount}</td>
              <td style={tdStyle}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;

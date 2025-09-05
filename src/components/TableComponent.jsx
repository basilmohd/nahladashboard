import React from "react";

// Example Column type:
// columns = [
//   { key: "name", header: "Name" },
//   { key: "age", header: "Age" },
// ]

const TableComponent = ({ columns, data, label }) => (
    <div style={{ overflowX: "auto", maxWidth: "100%" }}>
        {label &&
            <div>
                <h4>{label}</h4>
            </div>
        }
        <table style={{ borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    {columns.map((column, idx) => (
                        <th key={idx} style={{ border: "1px solid #ddd", padding: "8px", width: column.width }}>
                            {column.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rIdx) => (
                    <tr key={rIdx}>
                        {columns.map((column, cIdx) => (
                            <td key={cIdx} style={{ border: "1px solid #ddd", padding: "8px", width: column.width }}>
                                {row[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

);

export default TableComponent;

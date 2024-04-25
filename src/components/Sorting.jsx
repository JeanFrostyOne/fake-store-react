import React from "react";

export default function Sorting({ sort, setSort }) {
  return (
    <div className="select-container">
        <h2 className="select-sort">Sorting:</h2>
      <select
        className="select"
        value={sort}
        onChange={(event) => setSort(event.target.value)}
      >
        <option value={""}>default</option>
        <option value={"desc"}>in descending order</option>
        <option value={"asc"}>in ascending order</option>
      </select>
    </div>
  );
}

import React, { useState } from "react";

export default function Lists() {
  const [type, setType] = useState("Restaurants");
  return (
    <div className="container">
      <h4 className="mx-auto mt-1 ">
        Hotels, Restaurants & Attractions around you
      </h4>
      <form>
        <select
          className="form-select"
          aria-label="Default select example"
          value={type}
          onChange={""}
        >
          <option value="Restaurants">Restaurants</option>
          <option value="Hotels">Hotels</option>
          <option value="Attractions">Attractions</option>
        </select>
      </form>
    </div>
  );
}

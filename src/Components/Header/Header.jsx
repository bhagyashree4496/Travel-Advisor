import React from "react";
import { Autocomplete } from "@react-google-maps/api";

export default function Header() {
  return (
    <nav
      className="navbar navbar-light  "
      style={{ backgroundColor: "purple" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-light ">Travel Advisor</a>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Explore new places"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success text-white hover:bg(white)"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

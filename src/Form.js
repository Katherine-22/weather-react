import React from "react";
import "./form.css";

export default function Form() {
  return (
    <div className="row">
      <div className="col-md-8 ">
        <form id="search-form">
          <input
            type="search"
            placeholder="Search for location"
            className="search-bar me-2"
            id="search-text-input"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
}

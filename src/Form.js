import React from "react";
import "./form.css";

export default function Form() {
  return (
    <div className="Form">
      
        <form id="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="search-bar"
                id="search-text-input"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-search" />
            </div>
          </div>
        </form>
      
    </div>
  );
}

import React from "react";
import "./form.css";

export default function Form() {


  return (
    <div className="Form">
      
        <form id="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7 col-md-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="search-bar"
                id="search-text-input"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-5 col-md-3">
              <input type="submit" value="Search" className="btn btn-search" />
            </div>
          </div>
        </form>
      
    </div>
  );
}

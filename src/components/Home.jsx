import React from "react";
import Body from "./Body";

export default function Home() {
  return (
    <div >

      <div className=" container py-1 bg-dark text-white">
        <div className="row g-0">
          <div className="card-body" style={{ display: "flex" }}>
            <img
              src="cloudsun.png"
              className="img-fluid rounded-start py-5 px-2"
              alt="..."
            />
            <div>
              <h5
                className="card-title mx-2 my-4 py-4 px-0"
                style={{ fontSize: "5rem" }}
              >
                43<sup className="fw-light">°</sup>
                <sup className="fw-light">c</sup>
              </h5>
            </div>
            <div className="py-5 m-3 text-secondary">
              <h5 className="card-title">Precipitation: 0%</h5>
              <h5 className="card-title">Humidity: 16%</h5>
              <h5 className="card-title">Wind: 8 km/h</h5>
            </div>
          </div>
        </div>
      </div>


      <div>
        <Body />
      </div>
    </div>
  );
}

import React from "react";
import Body from "./Body";
import cloudsun from "../images/cloudsun.png";

export default function Home() {
  return (
    <div>
      <div className="card container mb-3 pt-5 pb-3 bg-dark ">
        <div className="row g-0 bg-dark">
          <div className="col-lg-3">
            <span style={{ display: "flex" }}>
              <img
                src={cloudsun}
                className="img-fluid rounded-start"
                alt="..."
                style={{ height: "80%" }}
              />
              <h1
                className="ms-1 py-2 "
                style={{ fontSize: "4rem", width: "35%" }}
              >
                43<sup className="fw-light">°</sup>
                <sup className="fw-lighter">c</sup>
              </h1>
            </span>
          </div>

          <div className="col-lg-8">
            <div className="card-body">
              <div className="text-secondary">
                <h5 className="card-title">Precipitation: 0%</h5>
                <h5 className="card-title">Humidity: 16%</h5>
                <h5 className="card-title">Wind: 8 km/h</h5>
              </div>
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

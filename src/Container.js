import React from "react";

export default function Container() {
  return (
    <div class="container">
      <div class="weather-app">
        <form id="search-form">
          <div class="row p-2 m-1">
            <div class="col-12 p-6 m-2">
              <input
                type="text"
                id="form-city"
                placeholder="Enter a city"
                autofocus="on"
              />
              <span class="col-2">
                <button
                  type="submit"
                  class="btn btn-outline-success searchButton"
                >
                  🔎 Search
                </button>
              </span>
              <span class="col-2">
                <button
                  type="submit"
                  class="btn btn-outline-dark currentButton"
                >
                  📌 Current
                </button>
              </span>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col-6">
            <h1>Barcelona</h1>
          </div>
          <div class="col-6">
            <img src="" alt="API icon" class="weather-icon" id="weather icon" />
            <span class="temperature" id="temperature"></span>
            <span class="units">
              <a href="/" id="celsius-link" class="active">
                °C
              </a>{" "}
              |
              <a href="/" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
        </div>
        <hr />
        <ul>
          <div class="row">
            <div class="col-4">
              <h2>Today - 30/04/21</h2>
            </div>
            <div class="col-4">
              <li>
                <span class="condition">Description:</span>
                <span id="description"></span>
              </li>
              <li>
                <span class="condition">Humidity💧:</span>
                <span id="humidity"></span>%
              </li>
            </div>
            <div class="col-4">
              <li>
                <span class="condition">Wind 🌬:</span>
                <span id="wind"></span> km/hr
              </li>
              <li>
                <span class="condition">Feels like 🌥:</span>
                <span id="feelsLike"></span>ºC
              </li>
            </div>
          </div>
        </ul>
        <hr />
        <div class="weather-forecast" id="forecast"></div>
        <hr />
        <footer>
          <a
            href="https://github.com/gedavarol/project1-weatherapp"
            target="_blank"
            rel="noreferrer"
            class="codeLink"
          >
            Open-source code
          </a>
          <span class="name">, by Gizem Eda Varol</span>
        </footer>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import StadiumData from "./StadiumData";
import { ImExit } from "react-icons/im";

//https://app.sportdataapi.com/api/v1/soccer/players?apikey=e1cb7590-2351-11eb-9e16-e95c7f8620be

export const Stadium = () => {
  const [stadium, setStadium] = useState([]);
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState("");

  const API_KEY = "e1cb7590-2351-11eb-9e16-e95c7f8620be";

  const URL = `https://app.sportdataapi.com/api/v1/soccer/venues?apikey=${API_KEY}&country_id=${dropdown}`;

  const hundleOnClick = (e) => {
    e.preventDefault();
    axios
      .get(URL)
      .then((res) => {
        setStadium(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  console.log(stadium);

  const filteredStadium = stadium.filter((stadiums) =>
    stadiums.city.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <form className="form-con">
      <Col className="home-icon-col">
        <a className="home-icon" href="/home">
          <ImExit style={{ fontSize: 40 }} />
        </a>
      </Col>

      <Row>
        <Col className="search-input-col" md={{ span: 6, offset: 3 }}>
          <input
            className="search-input"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder=" search"
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <ul class="menu cf">
            <li>
              <a className="country-btn" type="button" onClick={hundleOnClick}>
                <span>Country Select</span>
              </a>

              <ul class="submenu">
                <select
                  value={dropdown}
                  onChange={(e) => {
                    setDropdown(e.target.value);
                  }}
                >
                  <option value="48">Germany</option>
                  <option value="42">England</option>
                  <option value="45">Finland</option>
                  <option value="124">Uruguay</option>
                  <option value="112">South Africa</option>
                  <option value="68">Kenya</option>
                  <option value="78">Mexico</option>
                  <option value="17">Azerbaijan</option>
                  <option value="28">Cameroon</option>
                  <option value="35">Croatia</option>
                  <option value="61">Isreal</option>
                </select>
              </ul>
            </li>
          </ul>
        </Col>
      </Row>
      <div>
        {filteredStadium.map((stadiums) => {
          return (
            <StadiumData
              capacity={stadiums.capacity}
              city={stadiums.city}
              stadium={stadiums.name}
            />
          );
        })}
      </div>
    </form>
  );
};

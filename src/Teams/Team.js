import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import TeamData from "./TeamData";
import "./Team.css";
import Slider from "./slider/Slider";
import SliderMin from "./slider/SliderMin";
import { ImExit } from "react-icons/im";

export const Team = () => {
  const [team, setTeam] = useState([]);
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [rangeValue, setRangeValue] = useState(45);
  const [rangeValueMin, setRangeValueMin] = useState(10);

  const API_KEY = "e1cb7590-2351-11eb-9e16-e95c7f8620be";

  const URL = `https://app.sportdataapi.com/api/v1/soccer/players?apikey=${API_KEY}&country_id=${dropdown}&min_age=${rangeValueMin}&max_age=${rangeValue}`;

  /*
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setTeam(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(team);
*/

  const onChangeSliderMax = (e) => {
    setRangeValue(parseInt(e.target.value, 10));
  };
  const onChangeSliderMin = (e) => {
    setRangeValueMin(parseInt(e.target.value, 10));
  };

  const hundleOnClick = (e) => {
    e.preventDefault();
    axios
      .get(URL)
      .then((res) => {
        setTeam(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  console.log(team);

  const filteredTeams = team.filter((teams) =>
    teams.firstname.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
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
                <a
                  className="country-btn"
                  type="button"
                  onClick={hundleOnClick}
                >
                  <span>Country Select</span>
                </a>

                <ul class="submenu">
                  <Col md={{ span: 3 }}>
                    <Slider
                      min={15}
                      max={45}
                      step={1}
                      value={rangeValue}
                      onChangeValue={onChangeSliderMax}
                    />
                    <span className="sliderValue">Max age: {rangeValue}</span>
                  </Col>
                  <Col md={{ span: 3 }}>
                    <SliderMin
                      min={15}
                      max={45}
                      step={1}
                      value={rangeValueMin}
                      onChangeValue={onChangeSliderMin}
                    />
                    <span className="sliderValue">
                      Min age: {rangeValueMin}
                    </span>
                  </Col>

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
      </form>

      <div>
        {filteredTeams.map((teams) => {
          return (
            <TeamData
              firstname={teams.firstname}
              lastname={teams.lastname}
              birthday={teams.birthday}
              height={teams.height}
              weight={teams.weight}
              age={teams.age}
              country={teams.country.name}
            />
          );
        })}
      </div>
    </div>
  );
};

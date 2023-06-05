import styled from "styled-components";
import Input from "../common/Input";
import AppCalender from "../days/AppCalender";
import Text from "../common/Text";
import { CITIES } from "../../constants/cities";
import { useState } from "react";

const Information = () => {
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    let newArr = [];
    if (value) {
      newArr = CITIES.filter((city) => city.name.includes(value));
    }

    setInputValue(value);
    setCities(newArr);

    console.log(newArr);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev === 0 ? cities.length - 1 : prev - 1));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev === cities.length - 1 ? 0 : prev + 1));
    } else if (e.key === "Enter" && activeIndex !== -1) {
      e.preventDefault();
      setInputValue(cities[activeIndex].name);
      setCities([]);
      setActiveIndex(-1);
    }
  };
  return (
    <InformationBlock>
      <RegionBlock>
        <Text>여행 지역</Text>
        <Input
          onChange={handleChange}
          value={inputValue}
          onKeyDown={handleKeyDown}
        />
        <div className="city-list">
          {cities.map((city, index) => (
            <div
              className="city-item"
              key={city.name}
              style={{
                backgroundColor: index === activeIndex ? "#eee" : "transparent",
              }}
            >
              {city.name}
            </div>
          ))}
        </div>
      </RegionBlock>
      <DateBlock>
        <div>
          <Text>여행 날짜</Text>
          <AppCalender />
        </div>
      </DateBlock>
    </InformationBlock>
  );
};

const InformationBlock = styled.div`
  display: flex;
`;

const RegionBlock = styled.div`
  width: 50%;
  .city-list {
    .city-item {
      border: 1px solid lightgray;
      text-align: center;
      padding: 10px;
    }
  }
`;

const DateBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

export default Information;

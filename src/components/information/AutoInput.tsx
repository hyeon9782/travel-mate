import React from "react";
import Input from "../common/Input";

const AutoInput = () => {
  const [cities, setCities] = useState([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const newArr = CITIES.filter((city) =>
      city.name.includes(inputElement.value)
    );

    setCities(newArr);

    console.log(newArr);
  };
  return <Input />;
};

export default AutoInput;

import { useState } from "react";
import TestLocationForm from "./TestLocationForm";

const TestLocationsList = () => {
  const [locationsList, setLocationsList] = useState([{}]);
  return (
    <>
      {locationsList.map((location, index) => {
        console.log(location)
        return <TestLocationForm key={`location-${index}`} id={index} 
        // data={setLocationsList}
        />})}
      <button className='form__submit' onClick={() => setLocationsList([...locationsList, {}])}>Добавить тестовую локацию...</button>
      <button className='form__submit' onClick={() => console.log(locationsList)}>Вывести результат в консоль</button>
    </>
  );
};

export default TestLocationsList;
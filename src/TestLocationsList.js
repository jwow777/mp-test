import { useState } from "react";
import TestLocationForm from "./TestLocationForm";
import plus from './img/plus-solid.svg';

const TestLocationsList = () => {
  const [locationsList, setLocationsList] = useState([{locationID: null, envID: null, hint:''}]);

  return (
    <>
      {locationsList.map(
        (location, index) => 
          <TestLocationForm 
            key={`location-${index}`} 
            id={index} 
            lists={locationsList}
          />
      )}
      <button 
        className='form__submit' 
        onClick={
          () => setLocationsList([...locationsList, {locationID: null, envID: null, hint:''}])
        }
      >
        <img src={plus} className='form__icon' alt='add'/>
        Добавить тестовую локацию...
      </button>
      <button 
        className='form__submit' 
        onClick={
          () => console.log(locationsList)
        }
      >
        Вывести результат в консоль
      </button>
    </>
  );
};

export default TestLocationsList;
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { storeContext } from "./store";
import trash from './img/trash-alt-solid.svg';
import server from './img/server-solid.svg';

const TestLocationForm = observer(function TestLocationForm(props) {
  const store = useContext(storeContext);
  const [location, setLocation] = useState(null);
  const [evn, setEvn] = useState(null);
  const [hint, setHint] = useState('');

  if (!store.isLoaded) {
    return <div>Данные не загружены</div>;
  }

  function handleDelete(e) {
    e.target.closest('.form').remove();
    delete props.lists[props.id];
  }

  function isActiveServer(location, evn) {
    if (location === 1 && evn === 1) {
      return "MPTEST41, MPTEST42";
    } else if (location === 1 && evn === 2) {
      return "MPTEST43";
    } else if (location === 2 && evn === 2) {
      return "MPTEST44";
    } else if (location === 3 && evn === 2) {
      return "MPTEST45";
    } else if (location === 4 && evn === 2) {
      return "MPTEST46";
    } else {
      return "Выберете другое";
    }
  }

  return (
    <div className='form'>
      <h1 className='form__title'>Тестовая локация {props.id+1}</h1>
      <button className='form__delete' onClick={handleDelete}>
        <img src={trash} alt='delete'/>
      </button>
      <label className='form__label'>Локация</label>
      <select className='form__select form__select_map' onChange={e => {
        setLocation(Number(e.target.value));
        props.lists[props.id].locationID = Number(e.target.value);
      }}>
        {store.locations.map(i => <option value={i.locationID} key={i.locationID}>{i.name}</option>)}
      </select>
      <label className='form__label'>Среда</label>
      <select className='form__select form__select_envira' onChange={e => {
        setEvn(Number(e.target.value));
        props.lists[props.id].envID = Number(e.target.value);
      }}>
        {store.envs.map(i => <option value={i.envID} key={i.envID}>{i.name}</option>)}
      </select>
      <label className='form__label'>Серверы</label>
      <p className='form__text'>
        <img src={server} alt='server' className='form__icon'/>
        {isActiveServer(location, evn)}
      </p>
      <label className='form__label'>Подсказка</label>
      <input 
        type='text' 
        className='form__input' 
        placeholder='Комментарий по локации'
        value={hint || ''} 
        onChange={e => {
          setHint(e.target.value);
          props.lists[props.id].hint = hint;
        }}
      />
    </div>
  )
});

export default TestLocationForm;
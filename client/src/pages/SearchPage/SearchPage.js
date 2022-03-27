import './SearchPage.css';
import React, { useState } from 'react';
import Card from '../../components/CardSearch';

export default function FindAuto() {
  const [items, setItems] = React.useState([])
  React.useEffect(()=>{
    fetch('https://61fd5863f62e220017ce449d.mockapi.io/items')
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      setItems(json);
    })
  },[]);
  const [searchValue, setSearchValue] = React.useState('');
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }
    return (
    <div className='row body'>
      <div class="container">
        <form className="find col s12" method="POST">
        <div className="row">
        <div className="input-field col s3">
          <input  id="Mark" type="text" className="validate" onChange={onChangeSearchInput}/>
          <label for="Mark">Марка</label>
        </div>
      <div className="input-field col s3">
          <input id="Year" type="text" className="validate"/>
          <label for="Year">Год</label>
        </div>
      <div className="input-field col s3">
          <input id="MileAge" type="text" className="validate"/>
          <label for="MileAge">Пробег</label>
        </div>
          <div className="input-field col s3 ">
          <input id="Price" type="text" className="validate"/>
          <label for="Price">Цена</label>
        </div>
      <a className="waves-effect waves-light btn-small findbtn">Найти</a>
        <a className="waves-effect waves-light btn-small findbtn">Очистить</a>
        </div>
  </form>
  </div>
  <div>
          {items.filter(item => item.nameMark.toLowerCase().includes(searchValue.toLowerCase())).map((obj)=>(
            <Card 
            nameMark={obj.nameMark} 
            infoAbout={obj.infoAbout}
            infoAbout2={obj.infoAbout2}
            price={obj.price} 
            imageUrl={obj.imageUrl} 
            mileage={obj.mileage}
            year={obj.year}
            telephone={obj.telephone}
            city={obj.city} />
          ))}
       </div>
       </div>
    ) 
  }
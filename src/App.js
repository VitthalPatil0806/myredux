import React from 'react'
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {increament,decreament} from "./actions/index";


const App = () => {
  let myStore = useSelector((state)=> state.myActivities);
  let myDispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <div className='quantity'>
          <a className='quantity_minus' title='decreament' onClick={()=> myDispatch(decreament())}><span>-</span></a>
          <input name='quantity' type='text' className='quantity_input' value={myStore}></input>
          <a className='quantity_plus' title='increament' onClick={()=> myDispatch(increament())}><span>+</span></a>
        </div>
      </div>
    </>
  )
}

export default App;
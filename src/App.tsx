import React, { useState } from 'react';
import './App.css';
import INPUT from './components/input';
import BUTTON from './components/button';
import TABLE from './components/table';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [inputValue, setInputValue] = useState<any>("");
  const [values, setValues] = useState<any>([]); 

  const handleAddValue = () => {
    if (inputValue.trim() !== "") {
      setValues([...values, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="App container">
      <INPUT
        placeholder={"Enter Value"}
        inputValue={inputValue} 
        InputChange={(event: any) => {
          setInputValue(event.target.value);
        }}
      />
      <BUTTON
        btnValue={"Add Record"}
        GetValue={handleAddValue}
      />
      <TABLE values={values} record={"Records"} />
    </div>
  );
}

export default App;

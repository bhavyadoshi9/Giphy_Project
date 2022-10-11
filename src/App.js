import logo from './logo.svg';
import './App.css';
import ReactGiphySearchbox from 'react-giphy-searchbox'
import { useState } from 'react';

function App() {

  const register = async () => {

  }

  const login = async () => {

  }

  const logout = async () => {

  }

  return (
    <div className='gif'>
      <header>
        <h1>React Giphy searchbox</h1>
        <div className='searchboxwrapper'>
          <ReactGiphySearchbox
            apiKey="aOXCO2nHCWD3ope4SWVxcjvlJVswhJWp"
            onselect={(item) => console.log(item)}
          // masonryConfig={[
          //   { columns: 2, imageWidth: 200, gutter: 5 },
          //   { mq: "1000px", columns: 3, imageWidth: 12, gutter: 5 }
          // ]}
          />
        </div>
      </header>
    </div>
  );
}

export default App;

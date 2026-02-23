import './App.css'
import Cards from './cards-component/cards'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  
  const navigate = useNavigate();

  return (
    <>
      <div>
         <div className="main">
            <div className="head_container">
              <h3 className="title">|DevHub|</h3>
              <div className="search_bar">
                <i id='icon' className="fas fa-search"></i>
                <input type="search" id="searchBar" placeholder='Search Documentation, APIs,Tools...' />
              </div>
              <div className="buttons_options">
                <button onClick={() => navigate('/Docs')} className="op2" >Docs</button>
                <button className="op2" >APIs</button>
                <button className="op2">Tools</button>
                <button className="options">Community</button>
                <button className="AI_assistant_btn"><i id='aiBtn' className="fa-solid fa-microchip"></i> AI Assistant</button>
              </div>
            </div>
            <div className="down_container">
                <span>🚀Built for developers, by developers</span>
                <div className="text">
                  <h1>
                    Build faster with{" "}
                    <span className="modern_tools_h1">Modern tools</span>
                  </h1>
                </div>
              <div className="btns">
                <button className="get_started_btn">Get Started Free</button>
                <button className="btn2">View Documentation </button>
              </div>
            </div>
         </div>
      </div>
      <Cards />
    </>
  )
}

export default App;

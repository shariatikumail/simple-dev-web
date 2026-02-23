import './App.css'
import Cards from './cards-component/cards'
import React from 'react'

const App: React.FC = () => {
  
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
                <button className="op2" >Docs</button>
                <button className="op2" >APIs</button>
                <button className="op2">Tools</button>
                <button className="options">Community</button>
                <button className="AI_assistant_btn"><i id='aiBtn' className="fa-solid fa-microchip"></i> AI Assistant</button>
              </div>
            </div>
            <div className="down_container">
                <span>🚀Built for developers, by developers</span>
                <div className="text">
                  <h1>Build faster with <h1 className="modern_tools_h1">Modern tools</h1></h1>
                </div>
              <div className="btns">
                <button className="get_started_btn">Get Started Free</button>
                <button className="btn2">View Documentation </button>
              </div>
              <div className="cards_container">
                <Cards />
              </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default App

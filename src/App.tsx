import './App.css'

const App = () => {

  return (
    <>
      <div>
         <div className="main">
            <div className="head_container">
              <h3 className="title">|DevHub|</h3>
              <div className="search_bar">
                <i className="fas fa-search"></i>
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
              <span></span>
            </div>
         </div>
      </div>
    </>
  )
}

export default App

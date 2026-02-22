import './App.css'

const App = () => {
  

  return (
    <>
      <div>
         <div className="main">
            <div className="head_container">
              <h1 className="title">DevHub</h1>
              <div className="search_bar">
                <i className="fas fa-search"></i>
                <input type="search" id="searchBar" placeholder='Search Documentation, APIs,Tools...' />
              </div>
              <div className="buttons_options">
                <button>Docs</button>
                <button>APIs</button>
                <button>Tools</button>
                <button>Community</button>
                <button className="AI_assistant_btn">AI Assistant</button>
              </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default App

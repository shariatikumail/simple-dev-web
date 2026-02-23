import './cards.css'

const Cards = () => {
   return (
      <div>
        <div className="cards">
          <div className="card1">
              <div className="code">
                 <i id='bg' className="fas fa-code"></i>
              </div>
              <h2>Clean APIs</h2>
              <h5>RESTful and GraphQL APIs designed for simplicity</h5>
          </div>
          <div className="card2">
              <div className="cogs">
                 <i id='bg' className="fas fa-cogs"></i>
              </div>
              <h2>Lightning Fast</h2>
              <h5>Optimized performance with edge computing</h5>
          </div>
          <div className="card3">
               <div className="cloud">
                  <i id='bg' className="fas fa-cloud"></i>
               </div>
               <h2>Enterprise Security</h2>
               <h5>Bank-level encryption and compliance</h5>
          </div>
          <div className="card4">
               <div className="dataBase">
                   <i id='bg' className="fas fa-database"></i>
               </div>
               <h2>CLI First</h2>
               <h5>Powerful command-line tools for automation</h5>
          </div>
        </div>
      </div>
   )
}

export default Cards
import "./Loans.css";

const Loans = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c7">
        <div className="">
         <p className="text-black"> Customers</p>
        <h3 className="grid-c-title-text">Customers that Buy products</h3>
          
        </div>
        <div className="grid-c7-content">
            <div className="progress-bar">
                <div className="percent">
                    <svg>
                        <circle cx="105" cy="105" r="50"></circle>
                    </svg>
                    <div className="circle"></div>
                    <div className="number">
                        <h3>50<span>%</span></h3>
                        <span className="data-item-value">Total New Customers</span>
                    </div>
                    <div className="rect"></div>
                    <div class="loader"></div>
                    <div className="small-cicle"></div>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Loans

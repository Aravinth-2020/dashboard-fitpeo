import "./ContentMain.css";
import Report from "../Report/Report";
import Budget from "../Budget/Budget";
import Loans from "../Loans/Loans";
import TopCards from "../TopCards/TopCards";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div>
        <TopCards />
      </div>
      <div className="flex">
        <Report />
        <Loans />
        {/* <Transactions /> */}
      </div>
      
        <Budget />
      
    </div>
  );
};

export default ContentMain;

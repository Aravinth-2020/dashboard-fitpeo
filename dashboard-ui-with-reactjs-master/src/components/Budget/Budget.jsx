import "./Budget.css";
import { budget } from "../../data/data";
import { iconsImgs } from "../../utils/images";

const Budget = () => {
  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Budget</h3>
        <div className="content-top-btns">
          <button type="button" className="search-btn content-top-btn im-color">
            <img src={iconsImgs.search} alt="" />
            <input
              type="search"
              className="search-bar im-color"
              placeholder="Search"
            />
          </button>
          <select className="selecting-tag">
            <option value="100">Last 30 days</option>
            <option value="100">100 days</option>
          </select>
        </div>
      </div>
      <div className="grid-c4-content">
        <div className="grid-items">
          {budget.map((budget) => (
            <div className="grid-item" key={budget.id}>
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.check} />
                </div>
                <p className="text text-silver-v1">
                  {budget.title} <span>{budget.type}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1">$ {budget.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;

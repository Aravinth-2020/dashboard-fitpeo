import { iconsImgs } from "../../utils/images";
import "./Report.css";
import { reportData } from "../../data/data";

const Report = () => {
  return (
    <div className="grid-one-item grid-common grid-c3">
      <div className="grid-c-title">
        <div> <p className="text-black"> Overview</p>
        <h3 className="grid-c-title-text">Monthly Earning</h3>
       
        </div>
        <div>
          <select className="selecting-tag">
            <option value="100">Quantity</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
      <div className="grid-c3-content">
        <div className="grid-chart">
          <div className="grid-chart-bar">
            <div className="bar-wrapper">
              <div className="bar-item1"></div>
              <div className="bar-item2"></div>
            </div>
            <span className="grid-hortz-value">Jan</span>
          </div>
          <div className="grid-chart-bar">
            <div className="bar-wrapper">
              <div className="bar-item1"></div>
              <div className="bar-item2"></div>
            </div>
            <span className="grid-hortz-value">Feb</span>
          </div>
          <div className="grid-chart-bar">
            <div className="bar-wrapper">
              <div className="bar-item1"></div>
              <div className="bar-item2"></div>
            </div>
            <span className="grid-hortz-value">Mar</span>
          </div>
          <div className="grid-chart-bar">
            <div className="bar-wrapper">
              <div className="bar-item1"></div>
              <div className="bar-item2"></div>
            </div>
            <span className="grid-hortz-value">Apr</span>
          </div>
          <div className="grid-chart-bar">
            <div className="bar-wrapper">
              <div className="bar-item1"></div>
              <div className="bar-item2"></div>
            </div>
            <span className="grid-hortz-value">May</span>
          </div>
          <div className="grid-chart-bar">
            <div className="bar-wrapper">
              <div className="bar-item1"></div>
              <div className="bar-item2"></div>
            </div>
            <span className="grid-hortz-value">Jun</span>
          </div>
          <div className="grid-chart-bar">
            <div className="bar-wrapper">
              <div className="bar-item1"></div>
              <div className="bar-item2"></div>
            </div>
            <span className="grid-hortz-value">Jul</span>
          </div>
          <div className="grid-chart-bar">
            <div className="bar-wrapper" style={{ minHeight: "230px" }}>
              <div className="bar-item1" style={{ height: "100%" }}></div>
              <div className="bar-item2" style={{ height: "60%" }}></div>
            </div>
            <span className="grid-hortz-value">Aug</span>
          </div>
          <div className="grid-chart-bar">
            <div className="bar-wrapper">
              <div className="bar-item1"></div>
              <div className="bar-item2"></div>
            </div>
            <span className="grid-hortz-value">sep</span>
          </div>
          <div className="grid-chart-bar">
            <div className="bar-wrapper">
              <div className="bar-item1"></div>
              <div className="bar-item2"></div>
            </div>
            <span className="grid-hortz-value">Oct</span>
          </div>
          <div className="grid-chart-bar">
            <div className="bar-wrapper">
              <div className="bar-item1"></div>
              <div className="bar-item2"></div>
            </div>
            <span className="grid-hortz-value">Nov</span>
          </div>
          <div className="grid-chart-bar">
            <div className="bar-wrapper">
              <div className="bar-item1"></div>
              <div className="bar-item2"></div>
            </div>
            <span className="grid-hortz-value">Dec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;

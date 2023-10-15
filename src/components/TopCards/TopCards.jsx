import "./TopCards.css";

const TopCards = () => {
  return (
    <div className="subgrid-two-item  grid-c5">
      <div className="grid-one-item  grid-c1">
        <div className="grid-c5-content">
          <div className="grid-items content-grid-four">
            <div className="grid-item grid-common">
              <div className="grid-item-l">
                <div className="icon">
                  
                  <i class="fa-solid fa-circle-dollar-to-slot earning"></i>
                </div>
              </div>
              <div className="grid-item-r">
                <p className="text text-silver-v1">
                  <span>Earning </span>
                </p>
                <p className="text-black">$114k</p>
                <div className="flex-card">
                  <i class="fa-solid fa-arrow-up text-green"></i>
                  <div className="text-silver-v1 text-green">37% </div><span className="text-small">this month</span>
                </div>
              </div>
            </div>
            <div className="grid-item grid-common">
              <div className="grid-item-l">
                <div className="icon">
                <i class="fa-solid fa-wallet order"></i>
                </div>
              </div>
              <div className="grid-item-r">
                <p className="text text-silver-v1">
                  <span>Orders </span>
                </p>
                <p className="text-black">$2.4k</p>
                <div className="flex-card">
                <i class="fa-solid fa-arrow-down text-red"></i>
                  <div className="text-silver-v1 text-red">2% </div><span className="text-small">this month</span>
                </div>
              </div>
            </div>
            <div className="grid-item grid-common">
              <div className="grid-item-l">
                <div className="icon">
                <i class="fa-solid fa-receipt balance"></i>
                </div>
              </div>
              <div className="grid-item-r">
                <p className="text text-silver-v1">
                  <span>Balance </span>
                </p>
                <p className="text-black">$200k</p>
                <div className="flex-card">
                <i class="fa-solid fa-arrow-down text-red"></i>
                  <div className="text-silver-v1 text-red">2% </div><span className="text-small">this month</span>
                </div>
              </div>
            </div>
            <div className="grid-item grid-common">
              <div className="grid-item-l">
                <div className="icon">
                <i class="fa-solid fa-landmark sales"></i>
                </div>
              </div>
              <div className="grid-item-r">
                <p className="text text-silver-v1">
                  <span>Total Sales </span>
                </p>
                <p className="text-black">$89k</p>
                <div className="flex-card">
                <i class="fa-solid fa-arrow-up text-green"></i>
                  
                  <div className="text-silver-v1 text-green">11% </div><span className="text-small">this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCards;

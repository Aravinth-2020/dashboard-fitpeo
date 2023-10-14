import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
            <i class="fa-solid fa-bars menu-icon"></i>
            </button>
            <h3 className="text-black">Hello Fitpeo Tech 👋,</h3>
        </div>
        <div className="content-top-btns ">
            <button type="button" className="search-btn content-top-btn">
                <img src={ iconsImgs.search } alt="" />
                <input type="search" className="search-bar" placeholder="Search"/>
            </button>
        </div>
    </div>
  )
}

export default ContentTop

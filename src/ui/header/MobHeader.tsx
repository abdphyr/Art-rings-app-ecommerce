import React, { useState, useEffect } from "react";
import "./mobile.css";
import searchImage from "../../images/search.svg";
import { IHeader } from "./headerPropsType";
import MobSocialIcons from "../socialicons/MobSocialIcons";
import MobScroll from "./MobScroll";
import MobSearch from "./MobSearch";
import MobNav from "./MobNav";

const MobHeader: React.FC<IHeader> = (props) => {
  const { search } = props
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (document.body.clientWidth > 576) {
        setShowSearch(false)
        document.body.style.overflow = 'unset'
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    showSearch ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'unset';
  }, [showSearch]);

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 180)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <MobScroll data={props} scroll={scroll} setShowSearch={setShowSearch} />
      <div className="mobile_icons">
        <div className="wrapper">
          <div className="mob_icons">
            <div className="mob_social_icons">
              <MobSocialIcons />
            </div>
            <button onClick={() => {
              setShowSearch(!showSearch)
            }} className="mob_search_icon">
              <img
                src={searchImage}
                className="mob_search_icon_image"
                alt="searchIcon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="wrapper">
        {/* MAIN NAV */}
        <MobNav data={props} showSearch={showSearch} />
        {/* SEARCH SECTION */}
        <MobSearch showSearch={showSearch} setShowSearch={setShowSearch} search={search} />
      </div>
    </>
  );
};

export default MobHeader;

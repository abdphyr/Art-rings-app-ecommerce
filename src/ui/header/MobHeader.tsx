import { useState,useEffect } from "react";
import "./mobile.css";
import { Link } from "react-router-dom";
import searchImage from "../../images/search.svg";
import menu from "../../images/Menu.svg";
import cart from "../../images/cart.svg";
import heart from "../../images/heart.svg";
import menuScroll from '../../images/MenuScroll.svg';
import cartScroll from "../../images/cartScroll.svg";
import heartScroll from "../../images/heartScroll.svg";
import searchScroll from "../../images/searchScroll.svg";
import { HeaderPropsType } from "./headerPropsType";
import { useDispatch } from "react-redux";
import { setSearch } from '../../features/searchSlice';
import MobSocialIcons from "../socialicons/MobSocialIcons";

const MobHeader = ({...props}:HeaderPropsType) => {

  const { showMenu, setShowMenu } = props
  const { search, favouritesNumber, cartNumber } = props
  const dispatch = useDispatch()
    
  const [showSearch, setShowShowSearch] = useState(false)
  
    useEffect(() => {
        const handleResize = () => {
          if(document.body.clientWidth > 576){
            setShowShowSearch(false)
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
  },[])

    
  return (  
    <>
      <div className="mobile_icons">
        <div className="wrapper">
          <div className="mob_icons">
            <div className="mob_social_icons">
              <MobSocialIcons />
            </div>
            <button onClick={()=>{
              setShowShowSearch(!showSearch)
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
        <div className={(showSearch && 'hide')+(" mob_nav_bar")}>
          <div className="mob_nav_icon">
            <button onClick={()=>setShowMenu(!showMenu)}>
              <img src={menu} alt="MenuIcon" />
            </button>
          </div>
          <div className="mob_nav_info">
            <div className="mob_nav_brand">
              <Link to="/">art-rings</Link>
            </div>
            <div className="mob_nav_title">
              <Link to="/">MOSCOW JEWELRY STUDIO</Link>
            </div>
          </div>
          <div className="mob_nav_cart_heart">
            <div className="mob_cart_icon">
              {cartNumber > 0 && <div><span>{cartNumber}</span></div>}
              <Link to="/cart">
                <img src={cart} alt="cart" />
              </Link>
            </div>
            <div className="mob_heart_icon">
              {favouritesNumber > 0 && <div><span>{favouritesNumber}</span></div>}
              <Link to="/favourites">
                <img src={heart} alt="heart" />
              </Link>
            </div>
          </div>
        </div>
        {/* SEARCH SECTION */}
        <div className={(showSearch && 'active')+(" mob_search_section")}>
          <div className="wrapper">
              <div className="mob_search_input">
                <input onChange={(e)=>dispatch(setSearch(e.target.value))} 
                  value={search}
                  placeholder="Введите артикул" type="text" />
                <button onClick={()=>{
                  setShowShowSearch(false)
                  // setSearch('')
                }}>НАЙТИ</button>
              </div>
          </div>
        </div>
      </div>
      {/* SCROLL NAVBAR ELEMENTS */}
      <div className={(scroll && 'scroll')+(" mob_scroll_nav_bar")}>
          <div className="wrapper mob_scroll">
            <div className="mob_scroll_nav_icon">
              <button onClick={()=>setShowMenu(!showMenu)}>
                <img src={menuScroll} alt="MenuIcon" />
              </button>
            </div>
            <div className="mob_scroll_nav_info">
              <div className="mob_scroll_nav_brand">
                <Link to="/">art-rings</Link>
              </div>
            </div>
            <div className="mob_scroll_nav_cart_heart_search">
              <div className="mob_scroll_cart_icon">
                {cartNumber > 0 && <div><span>{cartNumber}</span></div>}
                <Link to="/cart">
                  <img src={cartScroll} alt="cart" />
                </Link>
              </div>
              <div className="mob_scroll_heart_icon">
                {favouritesNumber > 0 && <div><span>{favouritesNumber}</span></div>}
                <Link to="/favourites">
                  <img src={heartScroll} alt="heart" />
                </Link>
              </div>
              <button onClick={()=>{
                  setShowShowSearch(!showSearch)
                  setSearch('')
                }} 
                  className="mob_search_icon">
                <img
                  src={searchScroll}
                  className="mob_search_icon_image"
                  alt="searchIcon"
                />
            </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default MobHeader;

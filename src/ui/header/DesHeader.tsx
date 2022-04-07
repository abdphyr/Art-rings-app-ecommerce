import { useEffect, useState } from "react";
import "./desctop.css";
import { Link } from "react-router-dom";
import { IHeader } from "./headerPropsType";
import DesScroll from "./DesScroll";
import DesNav from "./DesNav";
import DesExtraMenu from "./DesExtraMenu";
import DesHeaderInfo from "./DesHeaderInfo";

const DesHeader: React.FC<IHeader> = (props) => {

  const { search } = props

  const [userWidth, setUserWidth] = useState(document.body.clientWidth)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setUserWidth(document.body.clientWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  useEffect(() => {
    const handleScroll = () => {
      if (userWidth > 1400) {
        setScroll(window.scrollY > 330)
      }
      if (userWidth < 1400 && userWidth > 1200) {
        setScroll(window.scrollY > 315)
      }
      if (userWidth < 1200 && userWidth > 991) {
        setScroll(window.scrollY > 300)
      }
      if (userWidth < 991 && userWidth > 767) {
        setScroll(window.scrollY > 265)
      }
      if (userWidth < 767 && userWidth > 576) {
        setScroll(window.scrollY > 240)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <DesScroll data={props} scroll={scroll} />
      <div className="info">
        <div className="wrapper">
          <DesHeaderInfo />
        </div>
      </div>
      <div className="wrapper">
        <DesExtraMenu search={search} />
        <div className="nav_info">
          <div className="nav_brand">
            <Link to="/">art-rings</Link>
          </div>
          <div className="nav_title">
            <Link to="/">MOSCOW JEWELRY STUDIO</Link>
          </div>
        </div>
        <DesNav {...props} />
      </div>
    </>
  );
};

export default DesHeader;

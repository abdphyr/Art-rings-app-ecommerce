import { useState, useEffect } from "react";
import "./header.css";
import MobHeader from "./MobHeader";
import DesHeader from "./DesHeader";
import NavbarMenu from "../menu/NavbarMenu";
import { IHeader } from "./headerPropsType";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Header: React.FC = () => {

  const [showMenu, setShowMenu] = useState(false)
  const search = useSelector((state: RootState) => state.search)
  const favouritesNumber = useSelector((state: RootState) => state.favourites).length
  const cartNumber = useSelector((state: RootState) => state.cart).length

  useEffect(() => {
    showMenu ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'unset'
  }, [showMenu]);

  const headerProps: IHeader = {
    showMenu,
    setShowMenu,
    search,
    favouritesNumber,
    cartNumber
  }

  return (
    <>
      <div className={(showMenu && 'active') + (" navbar_menu_section")}>
        <NavbarMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <div className="mob_header">
        <MobHeader {...headerProps} />
      </div>
      <div className="des_header">
        <DesHeader {...headerProps} />
      </div>
    </>
  );
};

export default Header;

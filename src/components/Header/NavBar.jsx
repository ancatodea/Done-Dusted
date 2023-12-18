import { useState } from "react";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import NavList from "./NavList";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

export default function NavBar() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

    return (
        <div className={styles.navBarContainer}>
            <Logo />
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {showMenu ? (
                    <IoIosCloseCircleOutline
                        className={styles.closeIcon}
                        onClick={toggleMenu}
                    />
                ) : (
                    <FaBars
                        className={styles.menuBarsIcon}
                        onClick={toggleMenu}
                    />
                )}
            </div>
            <NavList showMenu={showMenu} />
        </div>
    );
}


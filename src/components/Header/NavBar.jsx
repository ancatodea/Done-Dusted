import Logo from "./Logo";
import styles from "./NavBar.module.css";
import NavList from "./NavList";

export default function NavBar() {
    return(
        <div className={styles.navBarContainer}>
        <Logo />
        <NavList />
        </div>
    );
}
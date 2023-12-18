import { Link, useLocation } from "react-router-dom";
import styles from "./NavList.module.css";

export default function NavList({ showMenu }) {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? styles.activeLink : "";
    };

    return (
        <div className={`${styles.navList} ${showMenu ? styles.showMenu : ""}`}>
            <Link to="/" className={`${styles.navLink} ${isActive("/")}`}>
                Homepage
            </Link>
            <Link
                to="/todo"
                className={`${styles.navLink} ${isActive("/todo")}`}
            >
                To do
            </Link>
            <Link
                to="/done"
                className={`${styles.navLink} ${isActive("/done")}`}
            >
                Done
            </Link>
            <Link
                to="/ideas"
                className={`${styles.navLink} ${isActive("/ideas")}`}
            >
                Ideas
            </Link>
            <Link
                to="/favorites"
                className={`${styles.navLink} ${isActive("/favorites")}`}
            >
                Favorites
            </Link>
        </div>
    );
}

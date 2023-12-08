import { Link } from "react-router-dom";
import styles from "./NavList.module.css";

export default function NavList() {
    return (
        <div className={styles.navList}>
            <Link to="/">Homepage</Link>
            <Link to="/todo">To do</Link>
            <Link to="/done">Done</Link>
            <Link to="/ideas">Ideas</Link>
            <Link to="/favourites">Favourites</Link>
        </div>
    );
}
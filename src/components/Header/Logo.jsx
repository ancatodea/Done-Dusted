import styles from "./Logo.module.css";
import TitleLogo from "../../Assets/TitleLogo.png";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to='/' className={styles.logoContainer}>
            <img className={styles.logoNav} src={TitleLogo} alt="Logo" />
        </Link>
    );
}
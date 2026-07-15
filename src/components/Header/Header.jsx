import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const getNavLinkClass = ({ isActive }) =>
  `${styles.navLink} ${isActive ? styles.active : ""}`;

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} to="/" aria-label="TravelTrucks home">
          Travel<span>Trucks</span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className={styles.navigation}>
            <li>
              <NavLink className={getNavLinkClass} to="/" end>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className={getNavLinkClass} to="/catalog">
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.placeholder} aria-hidden="true" />
      </div>
    </header>
  );
}

export default Header;
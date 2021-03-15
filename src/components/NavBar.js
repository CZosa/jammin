import Link from 'next/link';

import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.navwrapper}>
        <ul className={styles.navlist_left}>
          <li>
            <Link href="/" className={styles.brand}>
              <a className={styles.item}>Jammin</a>
            </Link>
          </li>
          <li>
            <Link href="/venues">
              <a className={styles.item}>Discover</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.navlist_right}>
          <li className="right">
            <Link href="/">
              <a className={styles.login}>Log In with Spotify</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

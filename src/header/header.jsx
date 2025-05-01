import styles from './header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <div className={styles.logo_link}>OpenGov.kz</div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}><Link to="/">Главная</Link></li>
          <li className={styles.nav_item}><Link to="/aboutMe">О нас</Link></li>
          <li className={styles.nav_item}><Link to="/news">Новости</Link></li>
          <li className={styles.nav_item}><Link to="/members">Участники сообщества</Link></li>
          <li className={styles.nav_item}><Link to="/projects">Проекты</Link></li>
        </ul>
      </nav>

      <ul className={styles.lang_list}>
        <li className={styles.lang_item}><a href="">РУС</a></li>
        <li className={styles.lang_item}><a href="">ҚАЗ</a></li>
        <li className={styles.lang_item}><a href="">ENG</a></li>
      </ul>
    </header>
  );
}

export default Header;

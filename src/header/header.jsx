import { useState } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className={styles.header_inner}>
        <div className={styles.logo}>OpenGov.kz</div>

      </div>

      <button className={styles.burger} onClick={toggleMenu}>
        <span className={styles.burger_line}></span>
        <span className={styles.burger_line}></span>
        <span className={styles.burger_line}></span>
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}><Link to="/" onClick={toggleMenu}>Главная</Link></li>
          <li className={styles.nav_item}><Link to="/aboutMe" onClick={toggleMenu}>О нас</Link></li>
          <li className={styles.nav_item}><Link to="/news" onClick={toggleMenu}>Новости</Link></li>
          <li className={styles.nav_item}><Link to="/members" onClick={toggleMenu}>Участники сообщества</Link></li>
          <li className={styles.nav_item}><Link to="/projects" onClick={toggleMenu}>Проекты</Link></li>
        </ul>
        <ul className={styles.lang_list}>
          <li className={styles.lang_item}><a href="">РУС</a></li>
          <li className={styles.lang_item}><a href="">ҚАЗ</a></li>
          <li className={styles.lang_item}><a href="">ENG</a></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation('header'); // 👈 указываем namespace

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

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
          <li className={styles.nav_item}><Link to="/" onClick={toggleMenu}>{t('home')}</Link></li>
          <li className={styles.nav_item}><Link to="/aboutMe" onClick={toggleMenu}>{t('about')}</Link></li>
          <li className={styles.nav_item}><Link to="/news" onClick={toggleMenu}>{t('news')}</Link></li>
          <li className={styles.nav_item}><Link to="/members" onClick={toggleMenu}>{t('members')}</Link></li>
          <li className={styles.nav_item}><Link to="/projects" onClick={toggleMenu}>{t('projects')}</Link></li>
        </ul>
        <ul className={styles.lang_list}>
          <li className={styles.lang_item}><button onClick={() => changeLanguage('ru')}>РУС</button></li>
          <li className={styles.lang_item}><button onClick={() => changeLanguage('kz')}>ҚАЗ</button></li>
          <li className={styles.lang_item}><button onClick={() => changeLanguage('en')}>ENG</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
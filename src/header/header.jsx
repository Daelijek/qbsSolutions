import styles from './header.module.css'

function Header() {
  return (
    <header>
        <div className={styles.logo}>
          <a className={styles.logo_link} href="">OpenGov.kz</a>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}><a href="">Главная</a></li>
            <li className={styles.nav_item}><a href="">О нас</a></li>
            <li className={styles.nav_item}><a href="">Новости</a></li>
            <li className={styles.nav_item}><a href="">Участники сообщества</a></li>
            <li className={styles.nav_item}><a href="">Проекты</a></li>
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

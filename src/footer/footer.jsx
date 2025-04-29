import styles from './footer.module.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className={styles.footer_inner}>
        <div className={styles.upper_footer}>
          <div className={styles.first_col}>
            <div className={styles.title}>
              OpenGov.kz
            </div>
            <div className={styles.description}>
              Развитие открытого государства в Казахстане
            </div>
            <div className={styles.soc_media}>
              <img src="/public/twitter.svg" alt="twitter" />
              <img src="/public/facebook.svg" alt="facebook" />
              <img src="/public/linkedIn.svg" alt="linkedIn" />
              <img src="/public/youtube.svg" alt="youtube" />
            </div>
          </div>

          <div className={styles.second_col}>
            <div className={styles.title}>
              Навигация
            </div>
            <nav>
              <ul className={styles.nav_list}>
                <li className={styles.nav_item}><Link to="/">Главная</Link></li>
                <li className={styles.nav_item}><Link to="/aboutMe">О нас</Link></li>
                <li className={styles.nav_item}><Link to="/news">Новости</Link></li>
                <li className={styles.nav_item}><Link to="/members">Участники сообщества</Link></li>
                <li className={styles.nav_item}><Link to="/projects">Проекты</Link></li>
              </ul>
            </nav>
          </div>

          <div className={styles.third_col}>
            <div className={styles.title}>Ресурсы</div>
            <nav>
              <ul className={styles.nav_list}>
                <li className={styles.nav_item}><a href="">Открытые данные</a></li>
                <li className={styles.nav_item}><a href="">Документация</a></li>
                <li className={styles.nav_item}><a href="">API</a></li>
                <li className={styles.nav_item}><a href="">Инструменты</a></li>
              </ul>
            </nav>
          </div>

          <div className={styles.fourth_col}>
            <div className={styles.title}>Подписаться на новости</div>
            <div className={styles.user_ineraction}>
              <input type="text" placeholder='Ваш email' />
              <button><img src="/public/mail.svg" alt="" /></button>
            </div>
          </div>
        </div>
        <div className={styles.lower_footer}>
          <div className={styles.rights}>© 2024 OpenGov.kz. Все права защищены.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

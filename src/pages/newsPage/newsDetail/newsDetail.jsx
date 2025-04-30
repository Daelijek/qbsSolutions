import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import Header from "../../../header/header";
import styles from "./newsDetail.module.css";
import NewsDetailCard from "./newsDetailCard/newsDetailCard";

function NewsDetail() {
    return (
        <>
            <Header />
            <div className={styles.page}>
                <div className={styles.first_block}>
                    <div className={styles.first_block_inner}>
                        <div className={styles.title}>
                            Новая платформа открытых данных запущена в Казахстане
                        </div>
                        <div className={styles.group1}>
                            <div className={styles.date}>15.02.2024</div>
                            <div className={styles.author}>Александр Петров</div>
                            <div className={styles.status}>Опубликована</div>
                        </div>
                        <div className={styles.group2}>
                            <div className={styles.tag}>Открытые данные</div>
                            <div className={styles.tag}>Цифровизация</div>
                            <div className={styles.tag}>Государство</div>
                        </div>
                        <img src="/newsDetailPage_1.png" alt="" />
                        <div className={styles.info}>Министерство цифрового развития Казахстана объявило о запуске обновленной платформы открытых данных, которая призвана повысить прозрачность государственного управления и доступность информации для граждан.</div>
                        <div className={styles.blue}>Основные преимущества новой платформы</div>
                        <ul className={styles.list}>
                            <li className={styles.item}>Улучшенный пользовательский интерфейс</li>
                            <li className={styles.item}>Расширенные возможности поиска данных</li>
                            <li className={styles.item}>Интеграция с международными платформами</li>
                            <li className={styles.item}>Поддержка машиночитаемых форматов</li>
                        </ul>
                        <div className={styles.quote}>
                            <i>"Открытые данные - это ключевой элемент цифровой трансформации государственного управления и развития цифровой экономики Казахстана"</i>
                        </div>
                        <div className={styles.info}>
                            Платформа предоставляет доступ к более чем 10,000 наборов данных из различных государственных органов. Это включает в себя статистическую информацию, бюджетные данные, информацию о государственных закупках и многое другое.
                        </div>
                    </div>
                </div>

                <div className={styles.second_block}>
                    <div className={styles.second_block_inner}>
                        <div className={styles.share}><img src="/newsDetailPage_2.svg" alt="" /> Поделиться</div>
                        <div className={styles.group3}>
                            <img src="/newsDetailPage_3.svg" alt="" />
                            <img src="/newsDetailPage_4.svg" alt="" />
                            <img src="/newsDetailPage_5.svg" alt="" />
                            <img src="/newsDetailPage_6.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.third_block}>
                    <div className={styles.third_block_inner}>
                        <div className={styles.title}>Похожие статьи</div>
                        <div className={styles.cards}>
                            <NewsDetailCard
                                title="Цифровая трансформация государственных услуг"
                                date="14.02.2024"
                                imgSrc="/newsDetailCard_1.png" />

                            <NewsDetailCard
                                title="Цифровая трансформация государственных услуг"
                                date="14.02.2024"
                                imgSrc="/newsDetailCard_1.png" />

                            <NewsDetailCard
                                title="Цифровая трансформация государственных услуг"
                                date="14.02.2024"
                                imgSrc="/newsDetailCard_1.png" />
                        </div>
                        <Link to="/news">
                        <button className={styles.button}>Назад к списку новостей</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NewsDetail;
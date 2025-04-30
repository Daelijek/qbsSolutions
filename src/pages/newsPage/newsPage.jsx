import styles from "./newsPage.module.css"
import Header from "../../header/header";
import Footer from "../../footer/footer";
import NewsCard1 from "./newsCard1/newsCard1";

function NewsPage() {
    return (
        <>
            <Header />
            <div className={styles.first_block}>
                <div className={styles.first_block_inner}>
                    <div className={styles.title}>Новости</div>
                    <div className={styles.description}>Актуальные новости и события Открытого правительства</div>
                </div>
            </div>

            <div className={styles.second_block}>
                <div className={styles.second_block_inner}>
                    <input type="text" placeholder="Поиск новостей" className={styles.searchInput} />

                    <div className={styles.filters}>
                        <button className={styles.filterButton}><img src="/public/newsPage_1.svg" alt="" /> Категории</button>
                        <button className={styles.filterButton}><img src="/public/newsPage_2.svg" alt="" /> Дата</button>
                        <button className={styles.filterButton}><img src="/public/newsPage_3.svg" alt="" /> Теги</button>
                    </div>
                </div>
            </div>

            <div className={styles.third_block}>
                <div className={styles.third_block_inner}>
                    <div className={styles.cards}>
                        <NewsCard1
                            imgSrc="/public/np_Card1.png"
                            title="Новая платформа электронного правительства запущена в тестовом режиме"
                            description="Инновационная платформа предоставит гражданам улучшенный доступ к государственным услугам..."
                            date="15 февраля 2025"
                            author="Анна Петрова"
                            tag="Технологии"
                            link="/newsDetail" />
                        <NewsCard1
                            imgSrc="/public/np_Card2.png"
                            title="Парламент рассмотрит новый законопроект о цифровой идентификации"
                            description="Законопроект направлен на усиление безопасности персональных данных граждан..."
                            date="14 февраля 2025"
                            author="Максим Иванов"
                            tag="Закон"
                            link="/newsDetail" />
                        <NewsCard1
                            imgSrc="/public/np_Card3.png"
                            title="Запуск образовательной программы по цифровой грамотности"
                            description="Министерство образования объявило о начале масштабной программы обучения..."
                            date="13 февраля 2025"
                            author="Елена Смирнова"
                            tag="Образование"
                            link="/newsDetail" />
                        <NewsCard1
                            imgSrc="/public/np_Card4.png"
                            title="Внедрение технологии блокчейн в государственном секторе"
                            description="Новая инициатива позволит повысить прозрачность государственных процессов..."
                            date="12 февраля 2025"
                            author="Сергей Козлов"
                            tag="Блокчейн"
                            link="/newsDetail" />
                        <NewsCard1
                            imgSrc="/public/np_Card5.png"
                            title="Результаты общественного обсуждения городского планирования"
                            description="Подведены итоги масштабного опроса граждан о развитии городской инфраструктуры..."
                            date="11 февраля 2024"
                            author="Мария Николаева"
                            tag="Общество"
                            link="/newsDetail" />
                        <NewsCard1
                            imgSrc="/public/np_Card6.png"
                            title="Новые меры поддержки малого и среднего бизнеса"
                            description="Правительство утвердило комплекс мер по стимулированию предпринимательства..."
                            date="10 февраля 2024"
                            author="Дмитрий Соколов"
                            tag="Бизнес"
                            link="/newsDetail" />
                    </div>
                    <div className={styles.pagination}>
                        <button className={styles.pageButton}>1</button>
                        <button className={styles.pageButton}>2</button>
                        <button className={styles.pageButton}>3</button>
                        <button className={styles.pageButton}>4</button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default NewsPage;
import styles from "./projectsPage.module.css"
import Header from "../../header/header";
import Footer from "../../footer/footer";
import ProjectsCard1 from "./projectsCard1/projectsCard1";

function ProjectsPage() {
    return (
        <>
            <Header />
            <div className={styles.first_block}>
                <div className={styles.first_block_inner}>
                    <div className={styles.title}>Проекты</div>
                    <div className={styles.description}>Открытые данные — мощный инструмент для изменений. Здесь представлены проекты, которые используют государственные данные для создания новых сервисов, повышения прозрачности и улучшения жизни граждан.</div>
                    <div className={styles.description}>Изучите проекты, присоединяйтесь к инициативам или предлагайте свои идеи!</div>
                </div>
            </div>

            <div className={styles.second_block}>
                <div className={styles.second_block_inner}>
                    <input type="text" placeholder="Поиск проектов" className={styles.searchInput} />

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
                        <ProjectsCard1
                            imgSrc="/public/pp_Card1.png"
                            title="Открытый бюджет"
                            description="Визуализация и анализ бюджетных данных для повышения прозрачности государственных расходов"
                            date="15 февраля 2025"
                            tag="Финансы" />
                        <ProjectsCard1
                            imgSrc="/public/pp_Card2.png"
                            title="Эко Мониторинг"
                            description="Система мониторинга экологической ситуации в режиме реального времени"
                            date="14 февраля 2025"
                            tag="Экология" />
                        <ProjectsCard1
                            imgSrc="/public/pp_Card3.png"
                            title="Умный транспорт"
                            description="Интерактивная карта общественного транспорта с расписанием и маршрутами"
                            date="13 февраля 2025"
                            tag="Транспорт" />
                        <ProjectsCard1
                            imgSrc="/public/pp_Card4.png"
                            title="Здоровье населения"
                            description="Статистика и аналитика в сфере здравоохранения для принятия решений"
                            date="12 февраля 2025"
                            tag="Здравоохранение" />
                        <ProjectsCard1
                            imgSrc="/public/pp_Card5.png"
                            title="Образовательный портал"
                            description="Единая платформа для доступа к образовательным ресурсам и сервисам"
                            date="11 февраля 2024"
                            tag="Образование" />
                        <ProjectsCard1
                            imgSrc="/public/pp_Card6.png"
                            title="Городские инициативы"
                            description="Платформа для обсуждения и реализации городских проектов"
                            date="10 февраля 2024"
                            tag="Урбанистика" />
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

export default ProjectsPage;
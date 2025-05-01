import Header from "../../../header/header";
import Footer from "../../../footer/footer";
import styles from "./membersDetailPage.module.css"
import MembersDetailCard from "./membersDetailCard/membersDetailCard";
import { Link } from "react-router-dom";

function MembersDetailPage() {
    return (
        <>
            <Header />
            <div className={styles.first_block}>
                <div className={styles.first_block_inner}>
                    <img src="/memberDetailPage_1.png" alt="" />
                    <div className={styles.group}>
                        <div className={styles.title}>Диас Ермек</div>
                        <div className={styles.tag}>@daelijek_og</div>
                        <div className={styles.profession}>Ведущий разработчик данных</div>
                        <div className={styles.group_inner}>
                            <img src="/memberDetailPage_2.svg" alt="" />
                            <img src="/memberDetailPage_3.svg" alt="" />
                            <img src="/memberDetailPage_4.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.second_block}>
                <div className={styles.second_block_inner}>
                    <div className={styles.title}>О себе</div>
                    <div className={styles.description}>Более 8 лет работаю в сфере анализа данных и разработки. Специализируюсь на создании инструментов для визуализации открытых данных и их интеграции. Активный участник сообщества OpenGov с 2019 года.</div>
                    <div className={styles.description}>Занимаюсь разработкой решений для повышения прозрачности государственных данных и их доступности для граждан. Автор нескольких успешных проектов по визуализации бюджетных данных.</div>
                    <div className={styles.description}>Занимаюсь разработкой решений для повышения прозрачности государственных данных и их доступности для граждан. Автор нескольких успешных проектов по визуализации бюджетных данных.</div>
                </div>
            </div>
            <div className={styles.third_block}>
                <div className={styles.third_block_inner}>
                    <div className={styles.title}>Проекты</div>
                    <div className={styles.cards}>
                        <MembersDetailCard
                            link="/projectDetail"
                            title="Бюджетный портал"
                            description="Интерактивная платформа для визуализации и анализа государственного бюджета Казахстана. Инструмент для повышения прозрачности бюджетных процессов." />
                        <MembersDetailCard
                            link="/projectDetail"
                            title="Открытые НПА"
                            description="Система для публичного обсуждения нормативных правовых актов. Облегчает доступ граждан к законотворческому процессу." />
                        <MembersDetailCard
                            link="/projectDetail"
                            title="Карта инфраструктуры"
                            description="Интерактивная карта социальной инфраструктуры городов Казахстана. Помогает гражданам находить важные объекты и оценивать их доступность." />
                        <MembersDetailCard
                            link="/projectDetail"
                            title="Дашборд госзакупок"
                            description="Аналитическая панель для мониторинга государственных закупок. Обеспечивает прозрачность процесса и выявляет потенциальные нарушения." />
                    </div>
                    <Link to="/members">
                        <button className={styles.button}>Назад к списку проектов</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MembersDetailPage
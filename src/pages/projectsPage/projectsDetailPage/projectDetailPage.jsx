import styles from "./projectsDetailPage.module.css"
import Header from "../../../header/header";
import Footer from "../../../footer/footer";
import ProjectDetailCard from "./projectDetailCard/projectDetailCard";
import ProjectDetailCard2 from "./projectDetailCard2/projectDetailCard2";
import { Link } from "react-router-dom";

function ProjectDetailPage() {
    return (
        <>
            <Header />
            <div className={styles.first_block}>
                <div className={styles.first_block_inner}>
                    <div className={styles.group1}>
                        <div className={styles.title}>Открытые данные 2.0</div>
                        <div className={styles.tag}>Активен</div>
                    </div>
                    <div className={styles.date}>Период реализации: Январь 2024 - Декабрь 2024</div>
                    <div className={styles.description}>
                        Проект "Открытые данные 2.0" направлен на повышение прозрачности государственного управления и доступности информации для граждан Казахстана. Наша цель — создать единую платформу, объединяющую государственные данные в машиночитаемом формате, что обеспечит более удобный доступ к информации для бизнеса, исследователей и граждан. Платформа будет содержать различные типы данных, такие как статистика, бюджеты, результаты тендеров, отчёты о деятельности госорганов, а также данные о социальной, экономической и экологической ситуации в стране.
                    </div>
                    <div className={styles.blue}>Основные задачи проекта:</div>
                    <ul className={styles.list}>
                        <li className={styles.item}>Разработка стандартов публикации открытых данных</li>
                        <li className={styles.item}>Создание единого портала открытых данных</li>
                        <li className={styles.item}>Обучение государственных служащих работе с открытыми данными</li>
                        <li className={styles.item}>Развитие сообщества разработчиков и аналитиков</li>
                    </ul>
                    <div className={styles.description}>
                        Мы уверены, что проект будет способствовать улучшению открытости и подотчётности государственных структур, а также поможет сделать взаимодействие граждан с государством более эффективным и прозрачным. Внедрение "Открытых данных 2.0" станет важным шагом в развитии цифрового правительства в Казахстане, обеспечивая граждан необходимыми инструментами для участия в общественной жизни и принятии обоснованных решений.
                    </div>
                    <div className={styles.group2}>
                        <Link><div className={styles.button1}><img src="/projectDetailPage_1.svg" alt="" />Перейти на сайт проекта</div></Link>
                        <Link target="_blank" to="https://github.com/Daelijek/qbsSolutions"><div className={styles.button2}><img src="/projectDetailPage_2.svg" alt="" /> GitHub репозиторий</div></Link>
                    </div>
                </div>
            </div>
            <div className={styles.second_block}>
                <div className={styles.second_block_inner}>
                    <div className={styles.title}>Команда проекта</div>
                    <div className={styles.cards}>
                        <ProjectDetailCard
                            imgSrc="/projectDetailPage_5.png"
                            name="Александр Петров"
                            profession="Руководитель проекта" />

                        <ProjectDetailCard
                            imgSrc="/projectDetailPage_6.png"
                            name="Айгуль Сатпаева"
                            profession="Технический директор" />

                        <ProjectDetailCard
                            imgSrc="/projectDetailPage_7.png"
                            name="Максим Иванов"
                            profession="Ведущий разработчик" />
                    </div>
                </div>
            </div>
            <div className={styles.third_block}>
                <div className={styles.third_block_inner}>
                    <div className={styles.title}>Похожие проекты</div>

                    <div className={styles.cards}>
                        <ProjectDetailCard2
                            title="E-Gov 2.0"
                            description="Модернизация портала электронного правительства"
                            imgSrc="/projectDetailPage_8.png" />

                        <ProjectDetailCard2
                            title="Smart City"
                            description="Развитие технологий умного города"
                            imgSrc="/projectDetailPage_9.png" />

                        <ProjectDetailCard2
                            title="Digital ID"
                            description="Цифровая идентификация граждан"
                            imgSrc="/projectDetailPage_10.png" />
                    </div>
                    <Link to="/projects">
                        <button className={styles.button}>Назад к списку проектов</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProjectDetailPage
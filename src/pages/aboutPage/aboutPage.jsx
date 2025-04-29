import Header from "../../header/header";
import Footer from "../../footer/footer";
import styles from "./aboutPage.module.css";
import AboutCard1 from "./aboutCard1/aboutCard1";
import AboutCard2 from "./aboutCard2/aboutCard2";
import AboutCard3 from "./aboutCard3/aboutCard3";

function AboutPage() {
    return (
        <>
            <Header />
            <div className={styles.first_block}>
                <div className={styles.first_block_inner}>
                    <div className={styles.title}>Открытые данные для будущего Казахстана</div>
                    <div className={styles.description}>Развиваем экосистему открытых данных для прозрачного и инновационного будущего нашей страны</div>
                </div>
            </div>

            <div className={styles.second_block}>
                <div className={styles.second_block_inner}>
                    <div className={styles.title}>
                        Развитие открытых данных в Казахстане
                    </div>
                    <div className={styles.cards}>
                        <AboutCard1
                            year="2015"
                            title="Запуск инициативы"
                            description="Принятие закона об открытых данных и запуск первых государственных порталов" />
                        <AboutCard1
                            year="2017"
                            title="Расширение экосистемы"
                            description="Интеграция новых источников данных и запуск образовательных программ" />
                        <AboutCard1
                            year="2019"
                            title="Технологический прорыв"
                            description="Внедрение современных технологий обработки и визуализации данных" />
                        <AboutCard1
                            year="2020"
                            title="Международное сотрудничество"
                            description="Присоединение к международным инициативам открытых данных" />
                        <AboutCard1
                            year="2022"
                            title="Развитие инфраструктуры"
                            description="Модернизация платформ и расширение доступности данных" />
                        <AboutCard1
                            year="2024"
                            title="Новые горизонты"
                            description="Запуск инновационных проектов и расширение сферы применения открытых данных" />
                    </div>
                </div>
            </div>

            <div className={styles.third_block}>
                <div className={styles.third_block_inner}>
                    <div className={styles.title}>Ключевые платформы</div>
                    <div className={styles.cards}>
                        <AboutCard2
                            imgSrc="/ap_Card1.svg"
                            title="opengov.kz"
                            description="Национальный портал открытых данных с более чем 10,000 наборов данных" />
                        <AboutCard2
                            imgSrc="/ap_Card2.svg"
                            title="opengov.kz"
                            description="Бюро национальной статистики с актуальными данными по всем секторам" />
                        <AboutCard2
                            imgSrc="/ap_Card3.svg"
                            title="opengov.kz"
                            description="Финансовые и экономические показатели от Национального Банка" />
                    </div>
                </div>
            </div>

            <div className={styles.fourth_block}>
                <div className={styles.fourth_block_inner}>
                    <div className={styles.title}>Законодательная база</div>
                    <div className={styles.group}>
                        <div className={styles.left_side}>
                            <div className={styles.description}>
                                Деятельность в сфере открытых данных регулируется комплексом нормативных актов, обеспечивающих прозрачность и доступность информации:
                            </div>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <img src="/ap_Card1.svg" alt="" />
                                    <div className={styles.textGroup}>
                                        <div className={styles.item_title}>Закон "Об открытых данных"</div>
                                        <div className={styles.label}>Основополагающий документ, определяющий принципы работы с открытыми данными</div>
                                    </div>
                                </li>

                                <li className={styles.item}>
                                    <img src="/ap_Card1.svg" alt="" />
                                    <div className={styles.textGroup}>
                                        <div className={styles.item_title}>Постановление о порядке публикации</div>
                                        <div className={styles.label}>Регламентирует процедуры размещения и обновления данных</div>
                                    </div>
                                </li>

                                <li className={styles.item}>
                                    <img src="/ap_Card1.svg" alt="" />
                                    <div className={styles.textGroup}>
                                        <div className={styles.item_title}>Требования к форматам данных</div>
                                        <div className={styles.label}>Устанавливает стандарты форматов и структуры публикуемых данных</div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className={styles.right_side}>
                            <div className={styles.right_title}>Структура регулирования</div>
                            <img src="/aboutPage_2.png" alt="" />
                            <div className={styles.description}>Многоуровневая система регулирования обеспечивает эффективное функционирование экосистемы открытых данных</div>
                        </div>
                    </div>
                </div>
            </div >

            <div className={styles.fifth_block}>
                <div className={styles.fifth_block_inner}>
                    <div className={styles.title}>Примеры успешного использования</div>
                    <div className={styles.cards}>
                        <AboutCard3
                            imgSrc="/ap_Card4.png"
                            tag="Данные"
                            title="Открытые базы данных"
                            description="Создание общедоступных информационных ресурсов" />
                        <AboutCard3
                            imgSrc="/ap_Card5.png"
                            tag="Образование"
                            title="Цифровые школы"
                            description="Анализ образовательных данных для улучшения качества обучения" />
                        <AboutCard3
                            imgSrc="/ap_Card6.png"
                            tag="Бизнес"
                            title="Развитие предпринимательства"
                            description="Использование открытых данных для развития малого и среднего бизнеса" />
                        <AboutCard3
                            imgSrc="/ap_Card7.png"
                            tag="Экология"
                            title="Мониторинг окружающей среды"
                            description="Анализ экологических данных для улучшения качества воздуха" />
                    </div>
                </div>
            </div>

            <div className={styles.sixth_block}>
                <div className={styles.sixth_block_inner}>
                    <div className={styles.left_side}>
                        <div className={styles.title}>Роль OpenGov.kz в экосистеме открытых данных</div>
                        <div className={styles.group}>
                            <div className={styles.description}>OpenGov.kz является ключевым звеном в развитии экосистемы открытых данных Казахстана, обеспечивая:</div>
                            <ul className={styles.list}>

                                <li className={styles.item}>
                                    <img src="/aboutPage_3.svg" alt="" />
                                    <div className={styles.textGroup}>
                                        <div className={styles.item_title}>Доступ к данным</div>
                                        <div className={styles.label}>Предоставление удобного доступа к государственным данным</div>
                                    </div>
                                </li>

                                <li className={styles.item}>
                                    <img src="/aboutPage_4.svg" alt="" />
                                    <div className={styles.textGroup}>
                                        <div className={styles.item_title}>Сообщество</div>
                                        <div className={styles.label}>Развитие сообщества разработчиков и исследователей</div>
                                    </div>
                                </li>

                                <li className={styles.item}>
                                    <img src="/aboutPage_5.svg" alt="" />
                                    <div className={styles.textGroup}>
                                        <div className={styles.item_title}>Инновации</div>
                                        <div className={styles.label}>Поддержка инновационных проектов на основе открытых данных</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <div className={styles.card}>
                            <div className={styles.number}>10K+</div>
                            <div className={styles.text}>Наборов данных</div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.number}>500+</div>
                            <div className={styles.text}>Активных пользователей</div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.number}>100+</div>
                            <div className={styles.text}>Реализованных проектов</div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.number}>50+</div>
                            <div className={styles.text}>Партнёров</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutPage;
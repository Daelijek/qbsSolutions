import styles from "./mainPage.module.css"
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Card from "./mainPageCard1/card";
import Card2 from "./card2/card2";
import NewsCard from "./newsCards/newsCard";

function MainPage() {
    return (
        <>
            <Header></Header>
            <div className={styles.first_block}>
                <div className={styles.first_block_inner}>
                    <div className={styles.group}>
                        <div className={styles.title}>Открытое государство в Казахстане — прозрачность, доступность, участие.</div>
                        <div className={styles.description}>Мы верим в общественное участие, открытые данные и доступную государственную информацию для лучшего будущего Казахстана.</div>
                        <button className={styles.more_button}>Узнать больше</button>
                    </div>
                    <img src="/public/mainPage_1.png" alt="" />
                </div>
            </div>

            <div className={styles.second_block}>
                <div className={styles.second_block_inner}>
                    <div className={styles.title}>Что такое Открытое государство?</div>
                    <div className={styles.description}>Открытое государство — это концепция, при которой государственные данные, решения и процессы максимально доступны гражданам.</div>
                    <div className={styles.cards}>
                        <Card imgSrc='/public/mp_Card1.svg' title='Прозрачность' description="Государственные данные и процессы становятся доступными для граждан, обеспечивая подотчетность и открытость." />
                        <Card imgSrc='/public/mp_Card2.svg' title='Участие общества' description="Граждане могут активно участвовать в процессе принятия решений и влиять на государственную политику." />
                        <Card imgSrc='/public/mp_Card3.svg' title='Сотрудничество' description="Взаимодействие между государством, гражданами и бизнесом для достижения общих целей." />
                    </div>
                </div>
            </div>

            <div className={styles.third_block}>
                <div className={styles.third_block_inner}>
                    <img className={styles.img} src="/public/mainPage_2.png" alt="" />
                    <div className={styles.group}>
                        <div className={styles.title}>Что такое открытые данные?</div>
                        <div className={styles.description}>Открытые данные — это информация, публикуемая государством в свободном доступе, которую можно использовать, анализировать и применять для общественной пользы.</div>
                        <ul className={styles.list}>
                            <li className={styles.list_item}><img src="/public/mainPage_3.svg" alt="" /> Бюджетные данные</li>
                            <li className={styles.list_item}><img src="/public/mainPage_3.svg" alt="" /> Транспортная информация</li>
                            <li className={styles.list_item}><img src="/public/mainPage_3.svg" alt="" /> Экологические показатели</li>
                            <li className={styles.list_item}><img src="/public/mainPage_3.svg" alt="" /> Данные госзакупок</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.fourth_block}>
                <div className={styles.fourth_block_inner}>
                    <div className={styles.title}>Как это работает в Казахстане?</div>
                    <div className={styles.cards}>
                        <Card2 imgSrc='/public/mp_Card4.svg' title='Законодательная база' description="Нормативно-правовые акты, обеспечивающие открытость государственных данных" />
                        <Card2 imgSrc='/public/mp_Card5.svg' title="Базы данных" description="Доступ к государственным информационным ресурсам" />
                        <Card2 imgSrc='/public/mp_Card6.svg' title="Мониторинг" description="Отслеживание эффективности государственных программ" />
                        <Card2 imgSrc='/public/mp_Card7.svg' title="Инновации" description="Развитие новых технологий в государственном управлении" />
                    </div>
                </div>
            </div>

            <div className={styles.fifth_block}>
                <div className={styles.fifth_block_inner}>
                    <div className={styles.title}>Последние новости</div>
                    <NewsCard imgSrc='/public/mainPage_4.png' date="15 марта 2024" title="Новый портал открытых данных" description="Запущена обновленная версия портала с расширенными возможностями анализа данных." />
                    <NewsCard imgSrc='/public/mainPage_5.png' date="12 марта 2024" title="Международное сотрудничество" description="Казахстан присоединился к международной инициативе по открытым данным." />
                    <NewsCard imgSrc='/public/mainPage_6.png' date="10 марта 2024" title="Форум Open Data" description="В Астане прошел ежегодный форум по открытым данным и инновациям." />
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default MainPage;

// {styles.}
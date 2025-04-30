import Header from "../../header/header";
import Footer from "../../footer/footer";
import styles from "./membersPage.module.css"
import MembersCard1 from "./membersCard1/membersCard1";

function MembersPage() {
    return (
        <>
            <Header />
            <div className={styles.first_block}>
                <div className={styles.first_block_inner}>
                    <div className={styles.title}>Участники сообщества</div>
                    <div className={styles.description}>Здесь собраны все участники, которые поддерживают инициативу открытых данных в Казахстане. Присоединяйтесь и становитесь частью этого движения!</div>
                    <div className={styles.description}>Изучите профили участников и их вклад в развитие открытых данных.</div>
                </div>
            </div>

            <div className={styles.second_block}>
                <div className={styles.second_block_inner}>
                    <input type="text" placeholder="Поиск участника..." className={styles.searchInput} />
                    <div className={styles.filters}>
                        <button className={styles.filterButton} >Все</button>
                        <button className={styles.filterButton} ><img src="/membersPage_1.svg" alt="" /> Разработчики</button>
                        <button className={styles.filterButton} ><img src="/membersPage_2.svg" alt="" /> Аналитики</button>
                        <button className={styles.filterButton} ><img src="/membersPage_3.svg" alt="" /> Исследователи</button>
                    </div>
                </div>
            </div>

            <div className={styles.third_block}>
                <div className={styles.third_block_inner}>
                    <div className={styles.cards}>
                        <MembersCard1
                            imgSrc="/membersp_Card1.png"
                            name="Ермек Диас"
                            profession="Разработчик"
                            description="Специалист по работе с открытыми данными и API. Участвует в проектах по цифровизации государственных услуг."
                            tag="Frontend" />

                        <MembersCard1
                            imgSrc="/membersp_Card1.png"
                            name="Ермек Диас"
                            profession="Разработчик"
                            description="Специалист по работе с открытыми данными и API. Участвует в проектах по цифровизации государственных услуг."
                            tag="Frontend" />

                        <MembersCard1
                            imgSrc="/membersp_Card1.png"
                            name="Ермек Диас"
                            profession="Разработчик"
                            description="Специалист по работе с открытыми данными и API. Участвует в проектах по цифровизации государственных услуг."
                            tag="Frontend" />

                        <MembersCard1
                            imgSrc="/membersp_Card1.png"
                            name="Ермек Диас"
                            profession="Разработчик"
                            description="Специалист по работе с открытыми данными и API. Участвует в проектах по цифровизации государственных услуг."
                            tag="Frontend" />

                        <MembersCard1
                            imgSrc="/membersp_Card1.png"
                            name="Ермек Диас"
                            profession="Разработчик"
                            description="Специалист по работе с открытыми данными и API. Участвует в проектах по цифровизации государственных услуг."
                            tag="Frontend" />

                        <MembersCard1
                            imgSrc="/membersp_Card1.png"
                            name="Ермек Диас"
                            profession="Разработчик"
                            description="Специалист по работе с открытыми данными и API. Участвует в проектах по цифровизации государственных услуг."
                            tag="Frontend" />
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

export default MembersPage;
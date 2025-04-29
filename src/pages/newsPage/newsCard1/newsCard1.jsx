import styles from "./newsCard1.module.css";

function NewsCard1(props) {
    return (
        <div className={styles.card}>
            <img src={props.imgSrc} alt="" />
            <div className={styles.group}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.secondGroup}>
                    <div className={styles.date}><img src="/public/mp_Card8.svg" alt="" />{props.date}</div>
                    <div className={styles.author}><img src="/public/np_Card7.svg" alt="" />{props.author}</div>
                </div>
                <div className={styles.tag}>{props.tag}</div>
                <div className={styles.more}><a href="">Читать далее</a></div>
            </div>
        </div>
    );
}

export default NewsCard1;
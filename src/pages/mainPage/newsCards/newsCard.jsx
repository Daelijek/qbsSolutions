import styles from "./newsCard.module.css";

function NewsCard(props) {
    return (
        <div className={styles.card}>
            <img src={props.imgSrc} alt="" />
            <div className={styles.date}><img src="/public/mp_Card8.svg" alt="" />{props.date}</div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.more}>Читать далее</div>
        </div>
    );
}

export default NewsCard
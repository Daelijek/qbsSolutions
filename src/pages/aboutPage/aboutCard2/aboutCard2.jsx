import styles from "./aboutCard2.module.css"

function AboutCard2(props) {
    return (
        <div className={styles.card}>
            <img src={props.imgSrc} alt="" />
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.more}>Подробнее</div>
        </div>
    );
}

export default AboutCard2;
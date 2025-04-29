import styles from "./aboutCard3.module.css";

function AboutCard3(props) {
    return (
        <div className={styles.card}>
            <img src={props.imgSrc} alt="" />
            <div className={styles.group}>
                <div className={styles.tag}>{props.tag}</div>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.more}>Подробнее</div>
            </div>

        </div>
    );
}

export default AboutCard3;
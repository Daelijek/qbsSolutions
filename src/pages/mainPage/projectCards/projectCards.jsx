import styles from "./projectCards.module.css"

function ProjectCards(props) {
    return (
        <div className={styles.card}>
            <div className={styles.upperGroup}>
                <img src={props.imgSrc} alt="" />
                <div className={styles.group}>
                    <div className={styles.title}>{props.title}</div>
                    <div className={styles.status}>{props.status}</div>
                </div>
            </div>
            <div className={styles.lowerGroup}>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.progress}>{props.progress}</div>
                <div className={styles.more}>{props.more}</div>
            </div>
        </div>
    );
}

export default ProjectCards;
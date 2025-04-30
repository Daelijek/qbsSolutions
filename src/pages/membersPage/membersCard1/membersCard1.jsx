import styles from "./membersCard1.module.css"

function MembersCard1(props) {
    return (
        <div className={styles.card}>
            <img src={props.imgSrc} alt="" />
                <div className={styles.name}>{props.name}</div>
                <div className={styles.profession}>{props.profession}</div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.tag}>{props.tag}</div>
                <div className={styles.more}>Подробнее</div>
        </div>
    );
}

export default MembersCard1;
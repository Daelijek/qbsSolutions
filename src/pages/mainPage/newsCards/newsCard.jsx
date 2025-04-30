import styles from "./newsCard.module.css";
import { Link } from "react-router-dom";

function NewsCard(props) {
    return (
        <div className={styles.card}>
            <img src={props.imgSrc} alt="" />
            <div className={styles.group}>
                <div className={styles.date}><img src="/public/mp_Card8.svg" alt="" />{props.date}</div>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
                <Link to={props.link}><div className={styles.more}>Читать далее</div></Link>
            </div>
        </div>
    );
}

export default NewsCard
import styles from "./aboutCard3.module.css";
import { Link } from "react-router-dom";

function AboutCard3(props) {
    return (
        <div className={styles.card}>
            <img src={props.imgSrc} alt="" />
            <div className={styles.group}>
                <div className={styles.tag}>{props.tag}</div>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
                <Link to={props.link} className={styles.more}>Подробнее</Link>
            </div>

        </div>
    );
}

export default AboutCard3;
import styles from '../../../styles/Icons.module.css'

interface HeartIconInterface {
    checked?: boolean;
}

export default function HeartIcon(props: HeartIconInterface) {

    return (
        <div className={`${styles.heart} ${props.checked && styles.checkedHeart}`}>
            <svg xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 64 64">
                <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
                </path>
            </svg> 
        </div>
    );
}
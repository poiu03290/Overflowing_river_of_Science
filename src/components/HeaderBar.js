import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderBar.module.css';

export const HeaderBar = ({ show, setShow }) => {
    return (
        <div className={show ? `${styles.modal} ${styles.open}` : styles.modal}>
            <article className={styles.bar}>
                <nav>
                    <ul>
                        <div>
                            <FontAwesomeIcon icon={faX} onClick={() => setShow(!show)} className={styles.Xicon} />
                        </div>
                        <li><Link to={'/'} onClick={() => setShow(!show)}>HOME</Link></li>
                        <li><Link to={'/post'} onClick={() => setShow(!show)}>POST</Link></li>
                        <li><Link to={'/about'} onClick={() => setShow(!show)}>ABOUT</Link></li>
                    </ul>
                </nav>
            </article>
        </div>
    )
}
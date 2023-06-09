import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

export const Footer = () => {
    
    return (
        <nav className={`${styles['nav-bar']}`}>
            <div className={styles.inner}>
                <div className={styles.name}>
                    <Link to={'/'}>Overflowing river of Science</Link>
                </div>
                <div className={styles.tmp}>
                    <ul>
                        <li><Link to={'https://github.com/poiu03290/Overflowing_river_of_Science'} target={'_blank'}>Made by Hyuk</Link></li>
                        <li><Link to={'https://openai.com/product'} target={'_blank'}>Powered by GPT3</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
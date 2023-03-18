import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import styles from './Header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [show, setShow] = useState(false);
    
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    }, []);

    return (
        <header className={styles.header}>
            <nav className={`${styles['nav-bar']}`}>
                <div className={styles.inner}>
                    <div className={scrollPosition < 600 ? undefined : styles.change}>
                        <Link to={'/'}>Overflowing of river Science</Link>
                    </div>
                    <div>
                        <ul className={scrollPosition < 600 ? undefined : styles.change}>
                            <li><Link to={'/'}>HOME</Link></li>
                            <li><Link to={'/post'}>POST</Link></li>
                            <li><Link to={'/about'}>ABOUT</Link></li>
                            <li>{<FontAwesomeIcon icon={faBars} onClick={() => setShow(!show)} className={styles.icon} />}</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={styles.title}>
                <h1>Overflowing of river Science</h1>
                <p>related to science in everyday life</p>
            </div>
            <article className={show ? styles.bar : styles.blind}>
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
        </header>

    )
}
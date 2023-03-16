import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPostList } from '../api/api';

import { PostItem } from '../components/PostItem';

import styles from './Main.module.css';

export const Main = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
      (async () => {
        const { data } = await getPostList(`${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_TABLE_ID}`)
  
        setPostList(data || []);
      })()
    }, []);
  
    return (
      <main className={styles.container}>
        <div className={styles.inner}>
          {postList.records && postList.records.map((value, index) => (
            index < 3 ? <PostItem key={index} data={value} /> : undefined
          ))}
          <div className={styles.wrapper}>
            <Link to={'/post'} className={`${styles['btn-post']}`}>
              OTHER POSTS
            </Link>
          </div>
        </div>
      </main>
    );
}
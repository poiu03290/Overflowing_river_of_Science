import { useState, useEffect } from 'react';

import { getPostList } from '../api/api';

import { PostItem } from '../components/PostItem';
import { Pagination } from '../components/Pagination';

import styles from './Main.module.css';

export const Post = () => {
    const [postList, setPostList] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
      (async () => {
        const { data } = await getPostList(`${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_TABLE_ID}`)
  
        setPostList(data || []);
      })()
    }, []);
  
    return (
        (postList.records &&       
            <div className={styles.container}>
                <div className={styles.inner}>
                {postList.records && postList.records.slice(offset, offset + limit).map((value, index) => (
                    <PostItem key={index} data={value} />
                ))}
                <div className={styles.page}>
                    <Pagination 
                        total={postList.records.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </div>
                </div>
            </div>)
    );
}
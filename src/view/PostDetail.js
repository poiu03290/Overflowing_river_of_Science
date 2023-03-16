import { useState, useEffect } from 'react';

import { getPostList } from "../api/api"

import ReactMarkdown from 'react-markdown';
import styles from './PostDetail.module.css';

export const PostDetail = () => {
    const [postDetail, setPostDetail] = useState({});
    const postID = window.location.href.split('/').slice(-1)[0]

    useEffect(() => {
        (async () => {
            const { data } = await getPostList(`${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_TABLE_ID}/${postID}`)
            setPostDetail(data || {});
        })();
    }, [postID])

    return(
        (postDetail.fields &&         
            <section className={styles.container}>
                <div className={styles.inner}>
                    <h2 className={styles.title}>{postDetail.fields.Title}</h2>
                    <div className={styles.categorybox}>
                        <span className={styles.category}>{postDetail.fields.Category}</span>
                    </div>
                    <img src={postDetail.fields.Main_Image_URL} alt={'블로그 대표 이미지'}/>
                    <ReactMarkdown children={postDetail.fields.Post_Body} className={styles.paragraph}/>
                </div>
            </section>)
    )
}
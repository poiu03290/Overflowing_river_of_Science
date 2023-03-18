import { Link } from 'react-router-dom';

import styles from './PostItem.module.css';

export const PostItem = ({ data }) => {
    
    return (
        <Link to={`/post/${data.id}`}>
            <article className={styles.item}>
                <h2 className={styles.title}>{data.fields.Title}</h2>
                <img src={data.fields.Main_Image_URL} alt={'블로그 이미지'}/>
                <p className={styles.paragraph}>{data.fields.Post_Body}</p>
                <div className={styles.division}></div>
            </article>
        </Link>
    )
}
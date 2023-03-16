import { useState, useEffect } from 'react';

import { getPostList } from '../api/api';

import { Post } from './Post';

export const Main = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
      (async () => {
        const { data } = await getPostList(`${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_TABLE_ID}`)
  
        setPostList(data || []);
      })()
    }, []);
  
    console.log(postList)
  
    return (
      <div>
        {postList.records && postList.records.map((value, index) => (
          <Post key={index} data={value.fields} />
        ))}
        Main
      </div>
    );
}
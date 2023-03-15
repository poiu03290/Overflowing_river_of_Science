import { useState, useEffect } from 'react';

import { getPostList } from './api/api';

import { Post } from './components/Post';

import './App.css';

const BASE_ID = 'appTtQHjDfHLvVyP7';
const TABLE_ID = 'tblxOVEoPwe23DCdB';

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getPostList(`${BASE_ID}/${TABLE_ID}`)

      setPostList(data || []);
    })()
  }, []);

  console.log(postList)

  return (
    <div>
      {postList.records && postList.records.map((value, index) => (
        <Post key={index} data={value.fields} />
      ))}
    </div>
  );
}

export default App;

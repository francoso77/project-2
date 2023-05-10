import P from 'prop-types';
import './App.css';
import { useState, useEffect, useMemo, useRef } from 'react';

const Post = ({ post, handleClick }) => {
  console.log('Filho, renderizou!');
  return (
    <div className="post" key={post.id}>
      {/*preciso passar uma função anonima por causa do paramentro*/}
      <h1 style={{ fontSize: '14px' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  console.log('Componente Pai Renderizou');

  const handleClick = (value) => {
    setValue(value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  return (
    <div className="App">
      <p>
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não carregou os posts</p>}
    </div>
  );
}

export default App;

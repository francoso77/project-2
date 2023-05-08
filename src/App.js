import P from 'prop-types';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  console.log('Componente Pai Renderizou');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        })}
      {posts.length <= 0 && <p>Ainda não carregou os posts</p>}
    </div>
  );
}

export default App;

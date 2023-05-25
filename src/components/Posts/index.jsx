import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { decrementCounter } from '../../contexts/CounterProvider/actions';
import { incrementCounter } from '../../contexts/CounterProvider/actions';
import { Menu } from '../Menu';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;
  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      //é preciso desmontar a tela ... para a ação de carregar
      if (isMounted.current.valueOf) {
        console.log(isMounted, 'dentro do if');
        dispatch();
      }
    });
    return () => {
      isMounted.current = false;
    };
    //loadPosts(postsDispatch);
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>
        Counter {counterState.counter}+
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        Counter {counterState.counter}-
      </button>
      <h1>Posts</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts ...</strong>
        </p>
      )}
      {postsState.posts.map((posts) => (
        <p key={posts.id}>{posts.title}</p>
      ))}
      <Menu />
    </div>
  );
};

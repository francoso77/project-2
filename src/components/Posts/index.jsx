import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  useEffect(() => {
    loadPosts(postsDispatch);

    return () => {
      isMounted.current = false;
    };
    //loadPosts(postsDispatch);
  }, [postsDispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts ...</strong>
        </p>
      )}
      {postsState.posts.map((posts) => (
        <p key={posts.id}>{posts.title}</p>
      ))}
    </div>
  );
};

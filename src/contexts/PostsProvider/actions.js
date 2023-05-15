import * as types from './types';

export const loadPosts = async (dispatch) => {
  //abort Controller signal - para abortar o carregamento, para limpar

  dispatch({ type: types.POSTS_LOADING });

  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();

  console.log('Carreguei os posts');
  //PAYLOAD é o q quero carregar ( dados / função )
  return () => dispatch({ type: types.POSTS_SUCCESS, payload: posts });
};

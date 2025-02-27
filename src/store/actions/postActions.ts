// src/store/actions/postActions.ts
import { Dispatch } from 'redux';
import { Post } from '../reducers/postReducer';

export const fetchPosts = () => async (dispatch: Dispatch) => {
  dispatch({ type: 'FETCH_POSTS_REQUEST' });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await response.json();
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
  } catch (error: any) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
  }
};

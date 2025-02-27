// src/store/reducers/postReducer.ts
import { AnyAction } from 'redux';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action: AnyAction): PostState => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, loading: false, posts: action.payload };
    case 'FETCH_POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;

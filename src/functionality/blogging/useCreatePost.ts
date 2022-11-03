import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { IBlogPost } from './blogpost.interface';

const addPost = (post: IBlogPost) => {
  return axios.post(`/blogs`, post).then(res => res.data);
};

const useAddPost = () => {
  const queryClient = useQueryClient();
  return useMutation(addPost, { onSuccess: () => queryClient.invalidateQueries(['blogs']) });
};

export default useAddPost;

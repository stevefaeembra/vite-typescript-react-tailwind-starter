import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { IBlogPost } from './blogpost.interface';

const addPost = (post: IBlogPost) => {
  return axios.post(`/blogs`, post).then(res => res.data);
};

const useCreatePost = onSuccess => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: IBlogPost) => addPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries(['blogs']);
      onSuccess();
    },
  });
};

export default useCreatePost;

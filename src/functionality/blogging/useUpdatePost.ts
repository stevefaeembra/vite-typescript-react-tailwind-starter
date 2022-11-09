import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { IBlogPost } from './blogpost.interface';

const updatePost = (post: IBlogPost) => {
  return axios.patch(`/blogs/${post.id}`, post).then(res => res.data);
};

const useUpdatePost = ({onSuccess}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: IBlogPost) => updatePost(post),
    onSuccess: () => {
      queryClient.invalidateQueries(['blogs']);
      onSuccess();
    },
  });
};

export default useUpdatePost;

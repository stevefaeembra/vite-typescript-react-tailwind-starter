import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { IBlogPost } from './blogpost.interface';

const updatePost = (post: IBlogPost) => {
  return axios.patch(`/blogs/${post.id}`, post).then(res => res.data);
};

const useUpdatePost = (post: IBlogPost, onSuccess: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: IBlogPost) => updatePost(post),
    onSuccess: (post: IBlogPost) => {
      // need to refetch list
      queryClient.invalidateQueries(['blogs']);
      // mark THIS post as dirty so new version gets loaded next we view/edit it.
      queryClient.invalidateQueries(['blogs', post.id]);
      onSuccess();
    },
  });
};

export default useUpdatePost;

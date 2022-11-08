import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const deletePost = (id: string) => {
  return axios.delete(`/blogs/${id}`).then(res => res.data);
};

const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      console.log('foo id', id);
      return deletePost(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['blogs']);
    },
  });
};

export default useDeletePost;

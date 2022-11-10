import axios from 'axios';
import { useQuery } from 'react-query';

const getter = (id: string) => {
  console.log('in getter');
  return axios.get(`/blogs/${id}`).then(res => {
    console.log('response', res);
    return res.data;
  });
};

const usePost = (id: string) => {
  console.log('usePost.id', id);
  return useQuery(['getBlog', id], async () => await getter(id));
};

export function usePostEdit(id: string) {
  console.log('usePostEdit.id', id);
  return useQuery(['getBlogForEdit', id], async () => await getter(id));
}

export default usePost;

import axios from 'axios';
import { useQuery } from 'react-query';

const getter = (id: string) => {
  return axios.get(`/blogs/${id}`).then(res => {
    console.log('response', res);
    return res.data;
  });
};

const usePost = (id: string) => {
  console.log('usePost.id', id);
  return useQuery(['getBlog', id], () => getter(id));
};

export default usePost;

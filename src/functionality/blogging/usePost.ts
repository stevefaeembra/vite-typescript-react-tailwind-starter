import axios from 'axios';
import { useQuery } from 'react-query';

const getter = (id: string) => {
  return axios.get(`/blogs/${id}`).then(res => {
    return res.data;
  });
};

const usePost = (id: string) => {
  return useQuery(['getBlog', id], () => getter(id));
};

export default usePost;

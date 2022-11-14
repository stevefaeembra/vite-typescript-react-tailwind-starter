import axios from 'axios';
import { useQuery } from 'react-query';

const getter = (id: string | undefined) => {
  return axios.get(`/blogs/${id}`).then(res => {
    return res.data;
  });
};

const usePost = (id: string | undefined) => {
  return useQuery(['getBlog', id], () => getter(id));
};

export default usePost;

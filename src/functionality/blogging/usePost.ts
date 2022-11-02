import axios from 'axios';
import { useQuery } from 'react-query';

const usePost = (id: string | undefined) => {
  return useQuery(['getBlog', id], () => axios.get(`/blogs/${id}`).then(res => res.data));
};

export default usePost;

import axios from 'axios';
import { useQuery } from 'react-query';

const usePosts = () => {
  return useQuery(['blogs'], () => axios.get('/blogs').then(res => res.data));
};

export default usePosts;

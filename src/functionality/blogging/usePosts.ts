import { useQuery } from 'react-query';

const usePosts = () => {
  return useQuery(['blogs'], () => fetch('/blogs').then(res => res.json()));
};

export default usePosts;

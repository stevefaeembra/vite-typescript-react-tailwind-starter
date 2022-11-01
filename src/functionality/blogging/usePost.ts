import { useQuery } from 'react-query';

const usePost = (id: string | undefined) => {
  return useQuery(['getBlog', id], () => fetch(`/blogs/${id}`).then(res => res.json()));
};

export default usePost;

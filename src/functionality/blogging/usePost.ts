import axios from 'axios';
import { useQuery } from 'react-query';

import { getPost } from '../../mocks/fixtures/blogs';

const getter = (id: string) => {
  console.log('in getter: ', id);
  return axios.get(`/blogs/${id}`).then(res => {
    console.log('response', res);
    return res.data;
  });
  // const foo = getPost(id);
  // console.log('getter returns', foo);
  // return foo;
};

const usePost = (id: string) => {
  console.log('usePost.id', id);
  return useQuery(['getBlog', id], () => getter(id));
};

// export function usePostEdit(id: string) {
//   console.log('usePostEdit.id', id);
//   console.log('typeof', typeof id);
//   return useQuery(['getBlogForEdit', id], () => getter(id));
// }

export default usePost;

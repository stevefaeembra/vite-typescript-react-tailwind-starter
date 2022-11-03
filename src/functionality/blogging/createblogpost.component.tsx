import React, { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { IBlogPost } from './blogpost.interface';
import useAddPost from './useCreatePost';

const CreateBlogPostForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBlogPost>({
    defaultValues: {
      title: '',
      author: '',
      postdate: '',
      text: '',
    },
  });

  const navigate = useNavigate();
  const { mutate } = useAddPost({ onSuccess: () => navigate('/') });

  const onSubmit = handleSubmit((data: unknown) => {
    console.log('data', data);
    mutate(data);
  });

  return (
    <form className="m-4 flex flex-col md:container md:mx-auto" onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">Blog title</label>
        <input
          className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          id="title"
          {...register('title')}
        ></input>
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          id="author"
          {...register('author')}
        ></input>
      </div>
      <div>
        <label htmlFor="postdate">Date Posted</label>
        <input
          className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          id="postdate"
          type="datetime-local"
          {...register('postdate')}
        ></input>
      </div>
      <div>
        <label htmlFor="blogtext">Article</label>
        <textarea
          className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          cols={80}
          id="blogtext"
          rows={15}
          {...register('text')}
        ></textarea>
      </div>
      <button aria-label="Add Item" className="m-2 rounded-md bg-sky-500 p-2 hover:bg-sky-800" type="submit">
        Save Post
      </button>
    </form>
  );
};

export default CreateBlogPostForm;

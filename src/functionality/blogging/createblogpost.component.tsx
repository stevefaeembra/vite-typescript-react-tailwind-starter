import React, { FC } from 'react';

import { useForm } from 'react-hook-form';

import { IBlogPost } from './blogpost.interface';

const CreateBlogPostForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBlogPost>();

  const onSubmit = handleSubmit((data: unknown): IBlogPost | null => {
    console.log('data', data);
    return null;
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
        <label htmlFor="postdate">Date Posted</label>
        <textarea
          className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          cols={80}
          id="postdate"
          rows={15}
          {...register('text')}
        ></textarea>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default CreateBlogPostForm;

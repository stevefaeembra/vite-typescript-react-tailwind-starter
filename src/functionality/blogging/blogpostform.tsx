import React, { FC } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// TODO: find out why '~/...' paths not working, only relative ones work
import FieldError from '../../components/error.component';
import STYLES from '../../theme/styling-classes';
import { BlogPostSchema, IBlogPost } from './blogpost.interface';

interface IBlogPostForm {
  post: IBlogPost;
  mutator: (post: IBlogPost) => void;
}

const BlogPostForm: FC<IBlogPostForm> = ({ post, mutator }) => {
  const formData = post;
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBlogPost>({
    resolver: zodResolver(BlogPostSchema),
    defaultValues: {
      title: formData.title,
      author: formData.author,
      postdate: new Date().toUTCString(),
      text: formData.text,
    },
    reValidateMode: 'onBlur',
  });

  const onSubmit = (data: IBlogPost) => {
    // Id is not a field on the form so need to spread it in with the updated post fields
    const submitForm = { ...data, id: formData.id };
    mutator(submitForm);
  };

  return (
    <form className={STYLES.centered} onSubmit={handleSubmit(onSubmit)}>
      <>
        <label htmlFor="title">{t('title')}</label>
        <input
          className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          id="title"
          {...register('title')}
        ></input>
        {errors.title && <FieldError message={'Title is a Required field'} />}
      </>
      <div>
        <>
          <label htmlFor="author">{t('author')}</label>
          <input
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            disabled={true}
            id="author"
            {...register('author')}
          ></input>
          {errors.author && <FieldError message={'Author is a Required field'} />}
        </>
      </div>
      <div>
        <>
          <label htmlFor="postdate">{t('date')}</label>
          <input
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            disabled={true}
            id="postdate"
            type="text"
            {...register('postdate')}
          ></input>
          {errors.postdate && <FieldError message={'Date is a Required field'} />}
        </>
      </div>
      <div>
        <>
          <label htmlFor="text">{t('article')}</label>
          <textarea
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            cols={80}
            id="text"
            rows={15}
            {...register('text')}
          ></textarea>
          {errors.text && <FieldError message={'Article is a Required field'} />}
        </>
      </div>

      <Link to="/">
        <button
          aria-label="Add Item"
          className="inline-block rounded bg-gray-200 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-gray-700 shadow-md transition duration-150 ease-in-out hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg"
        >
          {t('cancel')}
          {''}
        </button>
      </Link>
      <button aria-label="Add Item" className={STYLES.primary} type="submit">
        {t('save')}
      </button>
    </form>
  );
};

export default BlogPostForm;

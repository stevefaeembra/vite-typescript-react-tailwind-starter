import React, { FC, ReactElement } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';

import NotFound from './components/notfound.component';
import BlogList from './functionality/blogging/bloglist.component';
import BlogPost from './functionality/blogging/blogpost.component';
import CreateBlogPostForm from './functionality/blogging/createblogpost.component';
import UpdateBlogPostForm from './functionality/blogging/updateblogpost.component';
import Footer from './layout/footer.component';
import Header from './layout/header.component';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container mx-auto grid grow">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<BlogList />} path="/" />
            <Route element={<BlogPost />} path="/blogs/:id" />
            <Route element={<CreateBlogPostForm />} path="/blogs" />
            <Route element={<UpdateBlogPostForm />} path="/edit/:id" />
            <Route element={<NotFound />} path="*" />
          </Routes>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </main>

      <Footer />
    </div>
  );
};

export default App;

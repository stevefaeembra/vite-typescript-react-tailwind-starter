import React, { FC, ReactElement } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';

import NotFound from './components/notfound.component';
import BlogList from './functionality/blogging/bloglist.component';
import BlogPost from './functionality/blogging/blogpost.component';
import CreateBlogPostForm from './functionality/blogging/createblogpost.component';
import Footer from './layout/footer.component';
import Header from './layout/header.component';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="grid grow place-items-center">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<BlogList />} path="/" />
            <Route element={<BlogPost />} path="/blogs/:id" />
            <Route element={<CreateBlogPostForm />} path="/blogs" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </QueryClientProvider>
      </main>

      <Footer />
    </div>
  );
};

export default App;

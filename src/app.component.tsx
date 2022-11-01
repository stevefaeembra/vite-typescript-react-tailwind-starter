import React, { FC, ReactElement } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';

import BlogList from './functionality/blogging/bloglist.component';
import BlogPost from './functionality/blogging/blogpost.component';
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
          </Routes>
        </QueryClientProvider>
      </main>

      <Footer />
    </div>
  );
};

export default App;

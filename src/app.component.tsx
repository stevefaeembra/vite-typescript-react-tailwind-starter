import React, { FC, ReactElement } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import BlogList from './bloglist.component';
import Footer from './layout/footer.component';
import Header from './layout/header.component';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="grow">
        <QueryClientProvider client={queryClient}>
          <BlogList />
        </QueryClientProvider>
      </main>

      <Footer />
    </div>
  );
};

export default App;

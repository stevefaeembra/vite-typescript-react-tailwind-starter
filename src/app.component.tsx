import React, { FC, ReactElement } from 'react';

import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';

const App: FC = (): ReactElement => (
  <div className="flex min-h-screen flex-col">
    <Header />

    <main className="grow">
      <h2>Main Content</h2>
    </main>

    <Footer />
  </div>
);

export default App;

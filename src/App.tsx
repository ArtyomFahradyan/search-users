import React, { useState } from 'react';
import { UsersContext } from 'contexts/UsersContext';
import Router from 'components/Router';

function App() {
    const [search, setSearch] = useState('');

    return (
      <UsersContext.Provider value={[search, setSearch]}>
          <Router />
      </UsersContext.Provider>
  );
}

export default App;

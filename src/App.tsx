import React, { useState } from 'react';
import { UsersContext } from 'contexts/UsersContext';
import Router from 'components/Router';

function App() {
    const [users, setUsers] = useState<any[] | null>(null);

    return (
      <UsersContext.Provider value={[users, setUsers]}>
          <Router />
      </UsersContext.Provider>
  );
}

export default App;

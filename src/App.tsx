import React, { useState } from 'react';
import { UsersContext } from 'contexts/UsersContext';
import Router from 'components/Router';

function App() {
    const [users, setUsers] = useState<any[] | null>(null);
    const [pagination, setPagination] = useState({
        page: 1,
        rowsPerPage: 10
    });


    return (
      <UsersContext.Provider value={[users, setUsers, pagination, setPagination]}>
          <Router />
      </UsersContext.Provider>
  );
}

export default App;

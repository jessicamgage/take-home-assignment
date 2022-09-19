//Third party imports
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query'

//Local imports
import Mobility from './Mobility';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
          <Mobility />
      </div>
    </QueryClientProvider>
);
}

export default App;

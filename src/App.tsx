import { useState } from 'react';

// HOC
import Text from './patterns/hoc/components/textComponent/Text';
import withLogOnMount from './patterns/hoc/components/withLogOnMount';

import Dashboard from './patterns/hoc/components/dashboard/Dashboard';
import withAuth from './patterns/hoc/components/withAuth';

function App() {

  const [isItAuthenticated, setIsItAuthenticated] = useState<Boolean>(false);

  const MyComponent = withLogOnMount(Text);
  const ComponentAuth = withAuth(Dashboard);

  const toggleLogInLogOut = () => {
    setIsItAuthenticated(!isItAuthenticated);
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <MyComponent />
      <button onClick={toggleLogInLogOut}>{isItAuthenticated ? 'Log out':'Log In'}</button>
      <ComponentAuth isItAuthenticated={isItAuthenticated}/>
    </div>
  );
}

export default App;

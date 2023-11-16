import { useState } from 'react';

// HOC

import withLogOnMount from './patterns/hoc/components/withLogOnMount';
import withAuth from './patterns/hoc/components/withAuth';
import withLogging from './patterns/hoc/components/withLogging';

import Text from './patterns/hoc/components/textComponent/Text';
import Dashboard from './patterns/hoc/components/dashboard/Dashboard';
import FunctionalCounter from './patterns/hoc/components/functionalCounter/FunctionalCounter';



function App() {

  const [isItAuthenticated, setIsItAuthenticated] = useState<Boolean>(false);

  const MyComponent = withLogOnMount(Text);
  const ComponentAuth = withAuth(Dashboard);
  const ComponentLogging = withLogging(FunctionalCounter);

  const toggleLogInLogOut = () => {
    setIsItAuthenticated(!isItAuthenticated);
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <MyComponent />
      <button onClick={toggleLogInLogOut}>{isItAuthenticated ? 'Log out':'Log In'}</button>
      <ComponentAuth isItAuthenticated={isItAuthenticated}/>
      <hr />
      <ComponentLogging />
    </div>
  );
}

export default App;

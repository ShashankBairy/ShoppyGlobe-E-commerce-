import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />  {/* to render the child components */}
    </Provider>
  );
}

export default App;

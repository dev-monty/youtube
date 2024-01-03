import './App.css';
import Head from './components/Head';
import Body from "./components/Body"
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <div>
      <Provider store={store}>
    <Head />
    <Body />
    </Provider>
    </div>
  );
}

export default App;

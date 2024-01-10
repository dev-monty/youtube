import './App.css';
import Head from './components/Head';
import Body from "./components/Body"
import { Provider } from 'react-redux';
import store from './utils/store';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import VideoWatch from './components/VideoWatch';
import MainContainer from './components/MainContainer';
import { useContext, useState } from 'react';
import userContext from './utils/userContext';

const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body />,
  children:[
    {
      path:"/",
      element:<MainContainer />
    },
    {
    path:"/watch",
    element:<VideoWatch />
  }
]
}]);

function App() {
  //const[userName,setUserName] = useState();
  //const {loggedIn} = useContext(userContext);


  return (
    <div>
      <Provider store={store}>
        {/* <userContext.Provider value={{loggedIn:userName,setUserName}}> */}
    <Head />
    <RouterProvider  router={appRouter}/>
    {/* </userContext.Provider> */}
 
    </Provider>
    </div>
  );
}

export default App;

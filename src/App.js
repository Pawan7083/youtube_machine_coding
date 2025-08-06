import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import WatchVideo from './components/WatchVideo';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainComponent/>
        },{
            path:"/watch",
            element:<WatchVideo/>
        }
      ],
      errorElement:"Thsi is error",
    }
  ]
)

function App() {
  return (
    <Provider store={appStore} >
      <Header/>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;

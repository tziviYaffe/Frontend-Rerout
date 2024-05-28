import { BrowserRouter } from 'react-router-dom'
import Router from './ReRoute/Router'
import { Provider } from 'react-redux'
import store from './ReRoute/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
 
}

/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import 'antd/dist/antd.css';
import {useDispatch} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import store from './redux/store'
import Landing from './pages/Landing';
import MatchPage from './pages/MatchPage';
import { useEffect } from 'react';
import { updateDisplayWidth } from './redux/slice/displaySlice';
import MatchFoundPage from './pages/MatchFoundPage';


function App() {
  const dispatch = useDispatch()

  const updateWidth = () => {
    dispatch(updateDisplayWidth(window.innerWidth))
  }
  useEffect(() => {
    updateWidth()
  }, [window.addEventListener('resize', updateWidth)])
  
  return (
      <div className="App">
        <Switch store={store}>
          <Route exact path="/" component={Landing} />
          <Route exact path="/match/:breed" component={MatchPage} />
          <Route exact path="/found/:breed/:id" component={MatchFoundPage} />
          {/* <Redirect to={'/'}/> */}
        </Switch>
      </div>
  );
}

export default App;

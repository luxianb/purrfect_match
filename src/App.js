/* eslint-disable react-hooks/exhaustive-deps */
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import MatchFoundPage from './pages/MatchFoundPage';
import MatchPage from './pages/MatchPage';
import { updateDisplayWidth } from './redux/slice/displaySlice';
import store from './redux/store';


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
          <Route exact path="/match/:type" component={MatchPage} />
          <Route exact path="/match/:type/:breed" component={MatchPage} />
          <Route exact path="/found/:type/:id" component={MatchFoundPage} />
          <Route exact path="/found/:type/:id/:breed" component={MatchFoundPage} />
          {/* <Redirect to={'/'}/> */}
        </Switch>
      </div>
  );
}

export default App;

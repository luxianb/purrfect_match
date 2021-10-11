import './App.css';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import store from './redux/store'
import Landing from './pages/Landing';
import MatchPage from './pages/MatchPage';
import { Layout } from 'antd';


function App() {
  return (
    <Provider store={store}>
      <Layout className="App" style={{minHeight: '100vh'}}>
      <Layout.Content>
        <Switch store={store}>
          <Route exact path="/" component={Landing} />
          <Route exact path="/match/:breed" component={MatchPage} />
        </Switch>
      </Layout.Content>
      </Layout>
    </Provider>
  );
}

export default App;

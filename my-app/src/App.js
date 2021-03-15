
import './App.css';
import Header from '../src/components/common/Header';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import NewsPage from './components/news/NewsSource';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/news" component={NewsPage} />
      </Switch>
    </div>
  );
}

export default App;

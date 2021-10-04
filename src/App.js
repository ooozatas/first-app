import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import { createTheme, ThemeProvider} from '@material-ui/core'
import Login from './pages/Login';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route  path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
 
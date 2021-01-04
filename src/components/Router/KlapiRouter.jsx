// import 3rd party components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import 1st party components
import Checklists from './../Checklists/Checklists';
import Tasks from './../Tasks/Tasks';
import Map from './../Map/Map';
import Settings from './../general/dropdown/Settings';
import Profile from './../general/dropdown/Profile';
import Index from './../general/Index';
import MenuComponents from './MenuComponents';

/* this router contains every route of the app */
export default props => {
    return (
        <Router>
      <div>
        <MenuComponents bottomLinks={props.bottomLinks} />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/checklists" component={Checklists} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
      </div>
    </Router>
    );
}
// import 3rd party components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import 1st party components
import Checklists from './../Checklists/Checklists';
import Tasks from './../Tasks/Tasks';
import Map from './../Map/Map';
import Settings from './../General/dropdown/Settings';
import Profile from './../General/dropdown/Profile';
import Index from './../General/Index';
import MenuComponents from './MenuComponents';

/* this router contains every route of the app */
export default (props:any) => {
  
    return (
        <Router>
      <div>
        <MenuComponents scoutMode={props.scoutMode} />
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
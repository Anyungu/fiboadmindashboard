import React,{Component} from 'react';
import { Route, Switch,  } from 'react-router-dom';


import DashBoard from './components/DashBoard';
import AllSchools from './components/AllSchools';
import Communicate from './components/Communicate';
import Parents from './components/Parents';
import Devices from'./components/Devices';
import Mpesa from './components/Mpesa';
import SpecificSchool from './components/SpecificSchool';
import LandingPage from './components/LandingPage';



class Router extends Component {

    render () { 
        return (
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/dashboard" component={DashBoard} />
                <Route path="/schools" component={AllSchools} />
                <Route path="/communicate" component={Communicate} />
                <Route path="/parents" component={Parents} />
                <Route path="/mpesa" component={Mpesa} />
                <Route path="/devices" component={Devices} />
                <Route path = "/specific" component={SpecificSchool}/>

            </Switch>
        );

    }
}

export default Router;

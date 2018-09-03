import React, {Component,Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import store from './store';

import AuthRoute from './components/authRoute';
import Dashboard from './components/Dashboard';

import Login from './contianer/login';
import Register from './contianer/register';
import BossInfo from './contianer/BossInfo';
import GeniusInfo from './contianer/GeniusInfo';

import './index.css';
//涉及页面   me boss genius msg 4个页面
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        <AuthRoute></AuthRoute>
                        <Switch>
                            <Route path='/geniusInfo' exact component={GeniusInfo}></Route>
                            <Route path='/bossInfo' exact component={BossInfo}></Route>
                            <Route path='/login' exact component={Login}></Route>
                            <Route path='/register' exact component={Register}></Route>
                            <Route component={Dashboard}></Route>
                        </Switch>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default App;

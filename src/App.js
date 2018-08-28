import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';

import AuthRoute from './components/authRoute';
import Login from './contianer/login';
import Register from './contianer/register';
import BossInfo from './contianer/BossInfo';
import GeniusInfo from './contianer/GeniusInfo';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <AuthRoute></AuthRoute>
                        <Route path='/geniusInfo' exact component={GeniusInfo}></Route>
                        <Route path='/bossInfo' exact component={BossInfo}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/register' exact component={Register}></Route>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default App;

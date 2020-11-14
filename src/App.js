import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Compatibility from './pages/Compatibility';
import Home from './pages/Home';
import MySign from './pages/MySign';


const App = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/my-sign/" component={MySign} />
                <Route exact path="/compatibility/" component={Compatibility} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;

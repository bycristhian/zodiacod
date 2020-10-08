import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Compatibility from './pages/Compatibility';
import Home from './pages/Home';
import Sign from './pages/Sign';


const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/my-sign/" component={Sign} />
                <Route exact path="/compatibility/" component={Compatibility} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;

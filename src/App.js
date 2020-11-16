import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Compatibility from './pages/Compatibility';
import Home from './pages/Home';
import MySign from './pages/MySign';

import soundfile from './audio/cosmos.mp3'
import { PanelAudio } from './components/PanelAudio';

const App = () => {

    const [isPause, setIsPause] = useState(true)

    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>        
            <Switch>
                <PanelAudio>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/my-sign/" component={MySign} />
                    <Route exact path="/compatibility/" component={Compatibility} />
                </PanelAudio>
            </Switch>
        </BrowserRouter>
    )
}

export default App;

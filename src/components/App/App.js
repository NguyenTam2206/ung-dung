import React from 'react';
import Navi from '../Navi/Navi';
import {BrowserRouter as Router} from "react-router-dom";
import RouterURL from '../RouterURL/RouterURL';

const App = () => {
    return (
        <div>
            <Router>
                <Navi />
                <RouterURL />
            </Router>
        </div>
    );
}

export default App;
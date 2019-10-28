import React from 'react';
import {Route, Switch} from 'react-router-dom';
import QLpage from '../QLpage/QLpage';
import Calculatorpage from '../Calculatorpage/Calculator';
import Caro from '../Caropage/Caro';


const RouterURL = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/applications/QLpage">
                    <QLpage />
                </Route>
                <Route path="/applications/may-tinh">
                    <Calculatorpage />
                </Route>
                <Route path="/applications/ca-ro">
                    <Caro />
                </Route>
                <Route>
                    <QLpage path="/applications/QLpage" />
                </Route>
            </Switch>

        </div>
    );
}

export default RouterURL;
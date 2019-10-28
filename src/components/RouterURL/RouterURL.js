import React from 'react';
import {Route, Switch} from 'react-router-dom';
import QLpage from '../QLpage/QLpage';
import Calculatorpage from '../Calculatorpage/Calculator';
import Caro from '../Caropage/Caro';


const RouterURL = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/applications">
                    <QLpage />
                </Route>
                <Route path="/may-tinh">
                    <Calculatorpage />
                </Route>
                <Route path="/ca-ro">
                    <Caro />
                </Route>
                <Route>
                    <QLpage path="/applications" />
                </Route>
            </Switch>

        </div>
    );
}

export default RouterURL;
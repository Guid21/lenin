import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Papers from '../../secns/Papers';
import Presentation from '../../secns/Presentation';

const Routing: FC<any> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Papers />
        </Route>
        <Route path="/presentation" exact>
          <Presentation />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;

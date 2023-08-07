import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>

        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </HashRouter>
    );
  }
}

export default App;

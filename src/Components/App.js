import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Writers from './Writers';
import {NotFound} from './Error'

export default class extends Component {
  state = {
    writers: []
  }

async componentDidMount(){
    const writers = await (await fetch('http://localhost:3002/writers?_embed=texts')).json();
    this.setState({writers});
    // fetch('http://localhost:3002/writers')
    // .then(res => res.json())
    // .then(writers => this.setState({writers}))
  }
 
  render(){
    const { writers } = this.state

    return (
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li> 
              <Link to="/writers">Writers</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" render={() =>  <div>Home</div>} />
            <Route path="/writers" render={props => <Writers {...props} writers = { writers } />} />
            <Route render={() => <h3>Not Found</h3>} /> 
            <Route component={NotFound} />                 
          </Switch>
          
        </Fragment>      
      </BrowserRouter>
    )
    
  }
}
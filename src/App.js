import React,{Component} from 'react';


import './App.css';
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';





class App extends Component {

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <div className="App">
      <div className="App-header">
        
        <Provider store = {store}>
            
          <Router/>

        </Provider>
        
      </div>
    </div>
  );
  }
}

export default App;

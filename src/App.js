import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
           <img src="https://plus.google.com/_/focus/photos/public/AIbEiAIAAABECPG40tH048yMiwEiC3ZjYXJkX3Bob3RvKihhOTJmZjBmODNiNjgzZDU5ZGZhYjlkYzVmNzExYmY5NzlhNjc1Nzc2MAG62vevLIloLmbLOLqxSIxoMW8Rfg?sz=128" className="pic" alt="Front-end developer" />
            <h1 className="App-title">Welcome to Data Fetch  App</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;

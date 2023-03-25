import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Popover from '@radix-ui/react-popover';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Popover.Root>
      <Popover.Trigger>Did this work?</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          Awesome, you can import stuff.
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
        </a>
      </header>
    </div>
  );
}

export default App;

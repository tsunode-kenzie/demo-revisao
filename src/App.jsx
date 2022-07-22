import { useState } from 'react';
import './App.css';
import Names from './components/Names';

function App() {
  const [names, setNames] = useState(['Tsunode', 'Gabriel', 'Alex']);

  function handleAddName() {
    setNames((previuosNames) => ['Viu o som', ...previuosNames]);
  }

  function handleRemoveName(nameToRemove) {
    setNames((previuosNames) => previuosNames
      .filter((name) => name !== nameToRemove)
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Names title='Turma 1' names={names} funcao={handleAddName}>
          <button onClick={handleAddName}>
            Adicionar nome
          </button>
          <button onClick={() => handleRemoveName('Tsunode')}>
            Remove nome
          </button>
        </Names>
        <Names title='Turma 2' names={names}>
          <button onClick={handleAddName}>
            Adicionar nome
          </button>
          <button onClick={() => handleRemoveName('Tsunode')}>
            Remove nome
          </button>
        </Names>
      </header>
    </div>
  );
}

export default App;

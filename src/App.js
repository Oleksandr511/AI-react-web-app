import { useEffect } from 'react';
import './App.css';
import useTelegram from './hooks/useTelegram';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

function App() {
  const {onToggleButton,user, onClose, tg} = useTelegram()

  useEffect(()=> {
    tg.ready()
  },[])

  
  return (
    <div className="App">
      work
      <Header />
      <button onClick={onToggleButton}>toggle</button>
      <Form />
    </div>
  );
}

export default App;

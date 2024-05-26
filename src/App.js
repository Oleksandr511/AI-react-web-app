import { useEffect } from 'react';
import './App.css';
import useTelegram from './hooks/useTelegram';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import DisplayForm from './components/Form/DisplayForm';

function App() {
  const {onToggleButton,user, onClose, tg} = useTelegram()

  useEffect(()=> {
    tg.ready()
  },[])

  
  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
      <Form />
      <DisplayForm />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const enlistBot = (bot) => {
    setArmy([...army, bot]);

    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedArmy = army.filter((b) => b.id !== bot.id);
        setArmy(updatedArmy);
      })
      .catch((error) => console.error('Error deleting bot:', error));
  };

  const releaseBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
      })
      .catch((error) => console.error('Error releasing bot:', error));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
      })
      .catch((error) => console.error('Error discharging bot:', error));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
}

export default App;

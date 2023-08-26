import React from 'react';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <button onClick={() => releaseBot(bot)}>Release</button>
          <button onClick={() => dischargeBot(bot)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;

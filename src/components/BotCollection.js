import React from 'react';

const BotCollection = ({ bots, enlistBot }) => {
  return (
    <div>
      <h2>List of Available Bots</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <button onClick={() => enlistBot(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;

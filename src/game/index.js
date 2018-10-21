import React, { Component } from 'react';
import * as GameHelpers from './helpers';
import uuid from 'uuid/v4';
import Villager from './Components/Villager';
// Write a function which adds a villager to a work que to gain resources.

class villager {
  constructor(luck, stamina, workSpeed, experience, skills, health) {
    this.luck = 0; // Luck multiplier for each successful harvest
    this.stamina = 5; // How many work cycles can be completed before needed energy
    this.workSpeed = 25; // How fast a worker can complete their task
    this.experience = 0; // Worker experience
    this.skills = []; // skills that affect the above stats
    this.health = 100;
    this.id = uuid();
  }
}

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      resources: [],
      rollResult: null,
      village: {
        villagers: [],
        tasks: [
          {
            name: 'wood',
            type: 'harvest'
          },
          {
            name: 'berries',
            type: 'harvest'
          }
        ]
      }
    };
  }
  componentDidMount() {
    this.startGame();
  }

  render() {
    const { rollResult, village } = this.state;
    const dura = new GameHelpers.durabilityComponent(100);
    console.log(village, 'info on dura');
    return (
      <div>
        Village:
        <div>
          Number Of Villagers:
          {village.villagers.map((villager, i) => {
            return <Villager villager={villager} />;
          })}
        </div>
        <button type="button" onClick={this.birthVillager}>
          birth Villager
        </button>
        <button type="button" onClick={() => this.rollDie(10)}>
          Roll D10
        </button>
        {rollResult ? rollResult : null}
      </div>
    );
  }

  rollDie = sides => {
    this.setState({ rollResult: GameHelpers.rollDie(sides) });
  };

  startGame = () => {
    const { village } = this.state;
    const villagers = [...village.villagers];
    const adam = new villager();
    const eve = new villager();
    villagers.push(adam, eve);

    this.setState({
      gameStatus: 'started',
      village: { ...village, villagers }
    });
  };

  birthVillager = () => {
    const { village } = this.state;
    console.log(village, 'vil');
    const villagers = [...village.villagers];
    console.log(villagers, 'huh');
    const newVillager = new villager();

    villagers.push(newVillager);
    console.log(villagers, 'new');
    this.setState({
      village: { ...village, villagers }
    });
  };
}

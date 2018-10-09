import React, {Component} from 'react';
import * as GameHelpers from './helpers';
export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      rollResult: null,
      village: {
        villagers: [1, 2],
        tasks: [
          {
            name: 'wood',
            type: 'harvest',
          },
          {
            name: 'berries',
            type: 'harvest',
          },
        ],
      },
    };
  }
  render() {
    const {rollResult, village} = this.state;
    const dura = new GameHelpers.durabilityComponent(100);
    console.log(village, 'info on dura');
    return (
      <div>
        Village:
        <div>
          Number Of Villagers:
          {village.villagers.length}
        </div>
        <button type="button" onClick={this.startGame}>
          Start Game
        </button>
        <button type="button" onClick={() => this.rollDie(10)}>
          Roll D10
        </button>{' '}
        {rollResult ? rollResult : null}
      </div>
    );
  }

  rollDie = sides => {
    this.setState({rollResult: GameHelpers.rollDie(sides)});
  };

  startGame = () => {
    this.setState({gameStatus: 'started'}, this.birthVillager());
  };

  birthVillager = () => {
    const {village} = this.state;
    const villagers = [...village.villagers];

    const newVillager = villagers.length + 1;
    villagers.push(newVillager);
    console.log(villagers, 'new');
    this.setState({
      village: {...village, villagers},
    });
  };
}

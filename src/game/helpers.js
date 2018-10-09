//Role a die base on the number
export function rollDie(dieSides = 6) {
  const dice = {
    sides: dieSides,
    roll() {
      const randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    },
  };

  const roleResult = dice.roll();
  return roleResult;
}

//Returns crit roll
export function crit(rolls, critChance) {
  const crit = rolls.find(r => r >= critChance);
  return crit;
}

//Total Roll
export function totalRoll(rolls) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return rolls.reduce(reducer);
}

export class durabilityComponent {
  constructor(durability) {
    this.durability = durability;
  }
}

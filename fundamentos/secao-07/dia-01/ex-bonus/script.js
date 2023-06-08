// const { log } = require("console");

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };


const dragonAttack = (dragon) => {
  const minDmg= 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);

  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg; 
  return dragonDmg; 
};
dragonAttack();

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = Math.floor(Math.random() * warrior.strength) * maxDmg;

  const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return warriorDmg;
}
warriorAttack();

const mageAttack = (mage) => {
  const manaMage = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;

  const turnStats = {
    manaSpent: 0,
    demageDealt: 'Não possui mana suficiente'
  }

  if (manaMage >15) {
  const mageDamage = maxDmg > minDmg ? maxDmg : minDmg;
  turnStats.manaSpent = 15;
  turnStats.demageDealt = mageDamage;
  return turnStats;
  }
  return turnStats;
}


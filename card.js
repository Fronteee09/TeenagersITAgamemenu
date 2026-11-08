const teenCardsArchive = {
  "frontealpino": {
    name: "Fronte Alpino",
    image: "frontealpino.png",
    hp: 80,
    maxHp: 80,
    attack: {
      name: "Attacco Base",
      damage: 10
    },
    ability: {
      name: "Abilità Speciale",
      damage: 20,
      usesLeft: 1, // Si può usare una volta sola
      description: "Toglie 20 HP alla carta scelta avversaria."
    }
  },

  "clipp3r": {
    name: "Clipp3r",
    image: "clipp3r.png",
    hp: 80,
    maxHp: 80,
    attack: {
      name: "Attacco Base",
      damage: 15
    },
    // Questa carta ha due abilità/varianti
    abilities: [
      {
        name: "Matita",
        damage: 20,
        usesLeft: 1,
        description: "Toglie 20 HP."
      },
      {
        name: "Sketchbook",
        damage: 30,
        usesLeft: 1,
        description: "Toglie 30 HP."
      }
    ]
  },

  "fronte": {
    name: "Fronte",
    image: "fronte.png",
    hp: 100,
    maxHp: 100,
    attack: {
      name: "Attacco Base",
      damage: 15
    },
    abilities: [
      {
        name: "Fucilata",
        damage: 30,
        usesLeft: 1,
        description: "Toglie 30 HP."
      },
      {
        name: "Bombardata",
        damage: 60,
        usesLeft: 1,
        description: "Toglie 60 HP."
      }
    ]
  },

  "aspro": {
    name: "Aspro",
    image: "aspro.png",
    hp: 100,
    maxHp: 100,
    attack: {
      name: "Attacco Base",
      damage: 20
    },
    ability: {
      name: "Aspro",
      damage: 50,
      usesLeft: 1,
      description: "Toglie 50 HP."
    }
  },

  "automoderator": {
    name: "Automoderator",
    image: "automoderator.png",
    hp: 40,
    maxHp: 40,
    attack: {
      name: "Attacco Base",
      damage: 10
    },
    ability: {
      name: "u/Bho_76 menzionatoo?",
      damage: 40,
      usesLeft: 1,
      description: "Toglie 40 HP e permette di eliminare una carta a scelta del proprietario di Automoderator."
    }
  }
};

class Participant {
  #position;
  #symbol;

  constructor(name, symbol) {
    this.name = name;
    this.#symbol = symbol;
    this.#position = 0;
  }

  get position() {
    return this.#position;
  }

  updatePosition(delta) {
    this.#position += delta;
  }

  get symbol() {
    return this.#symbol;
  }
}

class Race {
  #participants;
  #intervalIdS;
  #trackLength;

  constructor(trackLength, ...participants) {
    this.#participants = [...participants];
    this.#intervalIdS = Array(participants.length);
    this.#trackLength = trackLength;
  }

  start() {
    this.#participants.map((player, index) => {
      this.#intervalIdS[index] = setInterval(() => {
        this.#updatePlayerPos(player);
        this.#hasWon(player);
      }, 100);
    });
  }

  #updatePlayerPos(player) {
    player.updatePosition(Math.floor(1 + Math.random() * 10));
    this.#display();
  }

  #display() {
    this.#participants.forEach((participant) =>
      process.stdout.write(`${participant.name}: ${participant.position} `)
    );
    console.log();
  }

  #hasWon(person) {
    if (person.position >= this.#trackLength) {
      console.log(`${person.name} won!`);
      this.#end();
    }
  }

  #end() {
    this.#intervalIdS.forEach(clearInterval);
  }
}

const raj = new Participant("raj", "🚘");
const qasim = new Participant("qasim", "🚖");
const biswa = new Participant("biswa", "🚔");
const race = new Race(10, raj, qasim, biswa);
race.start();

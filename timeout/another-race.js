class Participant {
  #name;
  #symbol;
  #position;

  constructor(name, symbol) {
    this.#name = name;
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

  get name() {
    return this.#name;
  }
}

class Race {
  #participants;
  #intervalIdS;
  #trackLength;

  constructor(trackLength, ...participants) {
    this.#participants = [...participants];
    this.#intervalIdS = new Array(participants.length);
    this.#trackLength = trackLength;
  }

  start() {
    this.#participants.map((player, index) => {
      this.#intervalIdS[index] = setInterval(() => {
        this.#updatePlayerPos(player);
        this.#checkForWin(player);
      }, 175);
    });
  }

  #updatePlayerPos(player) {
    player.updatePosition(Math.floor(1 + Math.random() * 10));
    console.clear();
    console.log(this.showStatus);
  }

  get showStatus() {
    let track = "";
    this.#participants.forEach((participant) => {
      const name = participant.name.padStart(8);
      const position = participant.position;
      const symbol = name + participant.symbol.padStart(position, "# ");
      const lagBy = Math.max(this.#trackLength - position, 0);

      track += `${symbol}${" ".repeat(lagBy)}|` + "\n";
    });
    return track;
  }

  #checkForWin(person) {
    if (person.position >= this.#trackLength) {
      console.log(`${person.name} won!`);
      this.#end();
    }
  }

  #end() {
    this.#intervalIdS.forEach(clearInterval);
  }
}

const cars = ["🚘", "🚖", "🚔", "🚠"];
const players = process.argv.slice(2);

if (players.length > 4) {
  const error = new Error(
    "Race track can only handle 4 participants at a time"
  );
  throw error;
}

const participants = players.map(
  (name, pos) => new Participant(name, cars[pos])
);

const raceTrack = new Race(80, ...participants);
raceTrack.start();

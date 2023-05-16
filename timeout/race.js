class Participant {
  #distance;

  constructor(name) {
    this.name = name;
    this.#distance = 0;
  }

  get position() {
    return this.#distance;
  }

  updatePosition(delta) {
    this.#distance += delta;
  }
}

class Race {
  #firstPerson;
  #secondPerson;
  #intervalIdS;

  constructor(firstPerson, secondPerson) {
    this.#firstPerson = firstPerson;
    this.#secondPerson = secondPerson;
    this.#intervalIdS = [];
  }

  start() {
    this.#intervalIdS[0] = setInterval(() => {
      this.#firstPerson.updatePosition(Math.floor(Math.random() * 10));
    }, 100);

    this.#intervalIdS[1] = setInterval(() => {
      this.#secondPerson.updatePosition(Math.floor(Math.random() * 10));
    }, 100);

    this.#checkWinner();
  }

  #checkWinner() {
    this.#intervalIdS[2] = setInterval(() => {
      this.#showRaceStatus();
      this.#hasWon(this.#firstPerson);
      this.#hasWon(this.#secondPerson);
    }, 100);
  }

  #showRaceStatus() {
    console.log(
      `${this.#firstPerson.name} = ${this.#firstPerson.position}`,
      `${this.#secondPerson.name} = ${this.#secondPerson.position}`
    );
  }

  #hasWon(person) {
    if (person.position > 100) {
      console.log(`${person.name} won!`);
      this.#end();
    }
  }

  #end() {
    this.#intervalIdS.forEach(clearInterval);
  }
}

const raj = new Participant(process.argv[2]);
const qasim = new Participant(process.argv[3]);
const race = new Race(raj, qasim);
race.start();

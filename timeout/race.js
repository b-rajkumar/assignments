let firstParticipantDistance = 0;
let secondParticipantDistance = 0;

const firstParticipant = (timeout) => {
  this.firstPerson = setTimeout(() => {
    firstParticipantDistance += 1;

    if (firstParticipantDistance === 10) {
      console.log("First Participant won!");
      clearTimeout(this.firstPerson);
      clearTimeout(this.secondPerson);
      return;
    }
    console.log("first:", firstParticipantDistance);
    firstParticipant(Math.floor(Math.random() * timeout));
  }, timeout);
};

const secondParticipant = (timeout) => {
  this.secondPerson = setTimeout(() => {
    secondParticipantDistance += 1;

    if (secondParticipantDistance === 10) {
      console.log("Second Participant won!");
      clearTimeout(this.firstPerson);
      clearTimeout(this.secondPerson);
      return;
    }

    console.log("second:", secondParticipantDistance);
    secondParticipant(Math.floor(Math.random() * timeout));
  }, timeout);
};

secondParticipant(1000);
firstParticipant(1000);

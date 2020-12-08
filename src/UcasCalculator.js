class UcasCalculator {
  totalPoints = 0;
  lastUcasID = 0;
  //ucas ID: value
  prevVals = {};

  generateID() {
    this.lastUcasID++;
    this.prevVals[this.lastUcasID] = 0;
    return this.lastUcasID;
  }

  updateValue(id, currentValue) {
    this.totalPoints += (currentValue - this.prevVals[id]);
    this.prevVals[id] = currentValue;
    console.log(this.totalPoints);
  }

  reset() {
    this.prevVals = {};
    this.lastUcasID = 0;
    this.totalPoints = 0;
  }
}

export const ucasCalculator = new UcasCalculator();

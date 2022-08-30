//syntactic sugar
class Instructor {
  name;
  designation = "Web Course Instructor";
  team = "Web Team";
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  startSupportSession(time) {
    console.log(`Start the Support Session at ${time}`);
  }
  createQuiz(module) {
    console.log(`Please create quiz for ${module}`);
  }
  provideFeedback() {
    console.log(`${this.time} thank you for your feedback.`);
  }
}

class Developer {
  name;
  designation = "Web Course Instructor";
  team = "Web Team";
  location;
  tech;
  constructor(name, location, tech) {
    this.name = name;
    this.location = location;
    this.tech = tech;
  }
  developFeature(feature) {
    console.log(`Please develop the ${feature}`);
  }
  createQuiz(module) {
    console.log(`Please create quiz for ${module}`);
  }
  provideFeedback() {
    console.log(`${this.time} thank you for your feedback.`);
  }
}

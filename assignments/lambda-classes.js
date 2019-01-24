// CODE here for your Lambda Classes
class Person {
    constructor(attrib) {
        this.name = attrib.name;
        this.age = attrib.age;
        this.location = attrib.location;
        this.gender = attrib.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttrib) {
    super(instructorAttrib);
    this.specialty =   instructorAttrib.specialty;
    this.favLanguage = instructorAttrib.favLanguage;
    this.catchPhrase = instructorAttrib.catchPhrase;
    }
    demo(){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade() {
        console.log(`${this.student.name}receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
constructor(studentAttrib) {
    super(studentAttrib);
    this.previousBackground = studentAttrib.previousBackground;
    this.className = studentAttrib.className;
    this.favSubjects = studentAttrib.favSubjects;
    }
    PRAssignment(){
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge() {
        console.log(`${student.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrib) {
    super(pmAttrib);
    this.gradClassName = pmAttrib.gradClassName;
    this.favInstructor = pmAttrib.favInstructor;
    }
    standup() {
        console.log(`${this.name} announces to ${channel}, @channel standy times.`);
    }
    debugsCode(){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const joan = new Instructor({
    name: "Joan",
    age: 40,
    location: "California",
    gender: "Female",
    specialty:  "Ruby",
    favLanguage: "JavaScript",
    catchPhrase:"Are you sure that's what you want to do?",
})

const edgar = new Instructor({
    name: "Edgar",
    age: 44,
    location: "Florida",
    gender: "Male",
    specialty: "Scratch",
    favLanguage: "CSS",
    catchPhrase: "Try it yourself",
})

const susan = new  Student({
        name: "Susan",
        age: 32,
        location: "New Jersey",
        gender: "Female",
        previousBackground: "personal assistant",
        className: "WEB21",
        favoriteSubjects: ["Ruby", "Perl","Html"]
})

const john = new  Student({
    name: "John",
    age: 65,
    location: "Pennsylvania",
    gender: "Male",
    previousBackground: "policeman",
    className: "CS107",
    favoriteSubjects: ["JavaScript", "CSS","Redux"]
})

const pearl = new ProjectManager ({
    name: "Pearl",
    age: 25,
    location: "North Dakota",
    gender: "Female",
    specialty:  "JavaScript",
    favLanguage: "JavaScript",
    catchPhrase:"Time will tell",
    gradClass: "CS107",
    favInstructor: "Edgar",
})

const mark = new ProjectManager ({
    name: "Mark",
    age: 66,
    location: "Arizona",
    gender: "Male",
    specialty:  "PL/SQL",
    favLanguage: "Python",
    catchPhrase:"I here you",
    gradClass: "WEB21",
    favInstructor: "Joan",
})

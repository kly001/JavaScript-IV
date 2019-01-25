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
    demo(subject) {
        return `Today we are learning ${subject}.`;
    }
    grade(student,subject){
        return `${student.name} receives a perfect score in ${subject}.`
    }
}
class Student extends Person {
constructor(studentAttrib) {
    super(studentAttrib);
    this.previousBackground = studentAttrib.previousBackground;
    this.className = studentAttrib.className;
    this.favSubjects = studentAttrib.favSubjects;
        }
    listSubjects() {
        return `${this.name}'s favorite subjects are ${this.favSubjects}.`;
    }
    PRAssignment(student, subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(student, subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrib) {
    super(pmAttrib);
    this.gradClassName = pmAttrib.gradClassName;
    this.favInstructor = pmAttrib.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standup times.`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const joan = new Instructor({
    name: "Joan",
    age: 40,
    location: "California",
    gender: "Female",
    specialty:  "Math",
    favLanguage: "German",
    catchPhrase:"Are you sure that's what you want to do?",
})

const elmer = new Instructor({
    name: "Elmer",
    age: 44,
    location: "Florida",
    gender: "Male",
    specialty: "Music",
    favLanguage: "Portugese",
    catchPhrase: "Why don't you try it yourself",
})

const susan = new  Student({
        name: "Susan",
        age: 32,
        location: "New Jersey",
        gender: "Female",
        previousBackground: "personal assistant",
        className: "WEB21",
        favSubjects: ["Fencing","Woodshop","Math"]
})

const john = new  Student({
    name: "John",
    age: 65,
    location: "Pennsylvania",
    gender: "Male",
    previousBackground: "policeman",
    className: "CS107",
    favSubjects: ["Gym","Home Economics","Recess"]
})

const pearl = new ProjectManager ({
    name: "Pearl",
    age: 25,
    location: "North Dakota",
    gender: "Female",
    specialty:  "Sign Language",
    favLanguage: "JMandarin",
    catchPhrase:"Time will tell",
    gradClass: "CS107",
    favInstructor: "Edgar",
})

const mark = new ProjectManager ({
    name: "Mark",
    age: 66,
    location: "Arizona",
    gender: "Male",
    specialty:  "Archery",
    favLanguage: "Spanish",
    catchPhrase:"I here that !",
    gradClass: "WEB21",
    favInstructor: "Joan",
})
console.log(joan.speak())
console.log(elmer.speak())
console.log(susan.speak())
console.log(john.speak())
console.log(pearl.speak())
console.log(mark.speak())
console.log(joan.demo("math"))
console.log(elmer.demo("science"))
console.log(joan.grade(john,"english"))
console.log(elmer.grade(susan, "social studies"))
console.log(pearl.standup("science"))
console.log(mark.standup("history"))
console.log(pearl.debugsCode(john, "CSS"))
console.log(mark.debugsCode(susan,"RUBY"))
console.log(susan.listSubjects())

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
}

class Student extends Person {
constructor(studentAttrib) {
    super(studentAttrib);
    this.previousBackground = studentAttrib.previousBackground;
    this.className = studentAttrib.className;
    this.favSubjects = studentAttrib.favSubjects;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrib) {
    super(pmAttrib);
    this.gradClassName = pmAttrib.gradClassName;
    this.favInstructor = pmAttrib.favInstructor;

    }
}

const joan = new Instructor({
    specialty:  "Ruby",
    favLanguage: "JavaScript",
    catchPhrase:"Ae you sure that's what you want to do?",

})

const edgar = new Instructor({
    specialty: "Scratch",
    favLanguage: "CSS",
    catchPhrase: "Try it yourself",
})

const susan = new  Student({
        previousBackground: "personal assistant",
        className: "WEB21",
        favoriteSubjects: ["Ruby", "Perl","Html"]
})

const john = new  Student({
    previousBackground: "policeman",
    className: "CS107",
    favoriteSubjects: ["JavaScript", "CSS","Redux"]
})

const pearl = new ProjectManager ({
    gradClass: "CS107",
    favInstructor: "Edgar",
})

const mark = new ProjectManager ({
    gradClass: "WEB21",
    favInstructor: "Joan",
})
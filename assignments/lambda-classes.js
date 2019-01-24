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
    constructor(pmAttrib);{
    super(pmAttrib);
    this.gradClassName = pmAttrib.gradClassName;
    this.favInstructor = pmAttrib.favInstructor;

    };
}
"use strict";
class _HavardStudnet {
    constructor(name, age, grade, classes) {
        this.name = name;
        this.grade = grade;
        this.age = age;
        this.classes = classes;
        this._indentify = () => {
            console.log(this);
        };
    }
}
const studnet = new _HavardStudnet("Henry", 20, "A", [
    "Mathematics",
    "Computer Science",
]);
const mStudent = {
    name: "Henry",
    age: 30,
    classes: ["English", "Poetry"],
    grade: "B",
    _indentify: function () {
        console.log(this);
    },
};
studnet._indentify();
mStudent._indentify();

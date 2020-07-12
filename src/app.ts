interface Student {
  name: string;
  age: number;
  grade: string;
  classes: string[];
  _indentify: () => void;
}

class _HavardStudnet implements Student {
  name: string;
  age: number;
  grade: string;
  classes: string[];
  _indentify: () => void;

  constructor(name: string, age: number, grade: string, classes: string[]) {
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

const mStudent: Student = {
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

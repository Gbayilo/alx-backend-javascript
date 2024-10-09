interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  const teacher: Teacher = {
    firstName: "John",
    lastName: "Wick",
    fullTimeEmployee: true,
    yearsOfExperience: 8,
    location: "LA",
    contract: false,
  };
  
  // console.log(teacher);
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  // console.log(director1);
  
  interface printTeacherFunction {
    printTeacher: (firstName: string, lastName: string) => string;
  }
  
  function pringtTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
  }
  
  // console.log(pringtTeacher("John", "Doe"));
  
  export interface IStudentClassConstructor {
    new (firstName: string, lastName: string): IStudentClass;
  }
  
  export interface IStudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  export class StudentClass implements IStudentClass {
    private _firstName!: string;
    private _lastName!: string;
  
    constructor(firstName: string, lastName: string) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    workOnHomework() {
      return "Currently working";
    }
  
    displayName() {
      return this._firstName;
    }
  }
  
  export function createStudent(
    ctor: IStudentClassConstructor,
    firstName: string,
    lastName: string
  ): IStudentClass {
    return new ctor(firstName, lastName);
  }
  
//접근 제어자
class Employee {
  //필드
  protected name: string;
  public age: number;
  public position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log(`${this.name}일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  //생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    this.name;
  }
}

const employee = new Employee("김연호", 26, "developer");

// employee.name = "홍길동";
employee.age = 30;
employee.position = "디자이너";
console.log(employee);

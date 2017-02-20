/*****************Typescript file**************************
//abstract class which has implementation of printName method
abstract class Department { 
  name: string; 
  constructor (name) {} 
  printName(): void {
      console.log(`Welcome to ${this.name} department`); 
  }
  abstract printMeeting(): void; 
}

//derived class
class AccountingDepartment extends Department {
    //Use department class property and methods here 
    name = "Accounting Department";
    constructor() { super(name); }//constrcutor calls base class
        printName() {
            super.printName();
        }
        printMeeting() {
            console.log(`Meeting of ${this.name} at 4pm`);
        }
   
}

//derived class
class MathsDepartment extends Department {  
  //Use department class property and methods here 
    name = "Mathematics Department";
     constructor() { super(name); }
    printName() {
        super.printName();
    }
    printMeeting() {
        console.log(`Meeting of ${this.name} at 2:30pm`);
    }
}  

//derived class
class PhysicsDepartment extends Department {  
     constructor() { super(name); }
  //Use department class property and methods here 
    name = "Physics Department";
    printName() {
        super.printName();
    }
    printMeeting() {
        console.log(`Meeting of ${this.name} at 10am`);
    }
}  

//creating objects and invoking methods
let acctDept: AccountingDepartment = new AccountingDepartment();
acctDept.printName();
acctDept.printMeeting();
let mathDept: MathsDepartment = new MathsDepartment();
mathDept.printName();
mathDept.printMeeting();
let phyDept: PhysicsDepartment = new PhysicsDepartment();
phyDept.printName();
phyDept.printMeeting();
**************************************/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//abstract class which has implementation of printName method
var Department = (function () {
    function Department(name) {
    }
    Department.prototype.printName = function () {
        console.log("Welcome to " + this.name + " department");
    };
    return Department;
}());
//derived class
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        var _this = _super.call(this, name) || this;
        //Use department class property and methods here 
        _this.name = "Accounting Department";
        return _this;
    } //constrcutor calls base class
    AccountingDepartment.prototype.printName = function () {
        _super.prototype.printName.call(this);
    };
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("Meeting of " + this.name + " at 4pm");
    };
    return AccountingDepartment;
}(Department));
//derived class
var MathsDepartment = (function (_super) {
    __extends(MathsDepartment, _super);
    function MathsDepartment() {
        var _this = _super.call(this, name) || this;
        //Use department class property and methods here 
        _this.name = "Mathematics Department";
        return _this;
    }
    MathsDepartment.prototype.printName = function () {
        _super.prototype.printName.call(this);
    };
    MathsDepartment.prototype.printMeeting = function () {
        console.log("Meeting of " + this.name + " at 2:30pm");
    };
    return MathsDepartment;
}(Department));
//derived class
var PhysicsDepartment = (function (_super) {
    __extends(PhysicsDepartment, _super);
    function PhysicsDepartment() {
        var _this = _super.call(this, name) || this;
        //Use department class property and methods here 
        _this.name = "Physics Department";
        return _this;
    }
    PhysicsDepartment.prototype.printName = function () {
        _super.prototype.printName.call(this);
    };
    PhysicsDepartment.prototype.printMeeting = function () {
        console.log("Meeting of " + this.name + " at 10am");
    };
    return PhysicsDepartment;
}(Department));
//creating objects and invoking methods
var acctDept = new AccountingDepartment();
acctDept.printName();
acctDept.printMeeting();
var mathDept = new MathsDepartment();
mathDept.printName();
mathDept.printMeeting();
var phyDept = new PhysicsDepartment();
phyDept.printName();
phyDept.printMeeting();

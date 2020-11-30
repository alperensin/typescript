"use strict";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDeatails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old.");
    };
    return UserAccount;
}());
var andre = new UserAccount('André Luiz', 26);
andre.logDeatails();
console.log(andre);
console.log(andre.age);

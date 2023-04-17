// function calculate(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(calculate(1, 3));

{
  /*................................................................................................................................................*/
}

// const greet = (arg: string) => {
//   return arg;
// }

// console.log(greet('Hello Utkarsh'));

{
  /*................................................................................................................................................*/
}

// const getTotal = (number: Array<number>) => {
//   return number.reduce((acc, item) => {
//     return acc + item;
//   })
// }

// console.log(getTotal([1,2,3,4,5]));

{
  /*................................................................................................................................................*/
}

// const user = {
//   firstName: "Utkarsh",
//   lastName: "Mishra",
//   role: "Software Engineer"
// }
// // Auto Completion in Type Script
// console.log(user.firstName, user.lastName, user.role);

{
  /*................................................................................................................................................*/
}

// Type alias
{
  /*address?: string; This is an optional field in User Type*/
}

// type User = {
//   name: string;
//   age: number;
//   address?: string;
// }

// const user: User = {
//   name: "Utkarsh",
//   age: 18,
// }

// console.log(user.name, user.age);

{
  /*................................................................................................................................................*/
}

// type User = {
//     name: string;
//     age: number;
//     address?: string;
//   }

// const user:User =  {
//   name: "Utkarsh",
//   age:25,
//   address: "Lucknow"
// }

// function login(userData: User): User {
//   return userData;
// }

// console.log(login(user));

{
  /*................................................................................................................................................*/
}

// Union

// type ID = number | string;

// const userId: ID = '123';

{
  /*................................................................................................................................................*/
}

// Interfaces

// interface Transaction {

//   payerAccountNumber: number;

//   payeeAccountNumber: number;

// }

// interface BankAccount {

//   accountNumber: number;

//   accountHolder: string;

//   balance: number;

//   isActive: boolean;

//   transactions: Transaction[]

// }

// const transaction1:Transaction = {

//   payerAccountNumber: 123,

//   payeeAccountNumber: 455,

// }

// const transaction2:Transaction = {

//   payerAccountNumber: 123,

//   payeeAccountNumber: 456,

// }

// const bankAccount:BankAccount = {

//   accountNumber:125463,

//   accountHolder:'Utkarsh Mishra',

//   balance:4000,

//   isActive: true,

//   transactions: [transaction1, transaction2]

// }

// console.log(bankAccount.accountHolder, bankAccount.accountNumber, bankAccount.balance, bankAccount.isActive, bankAccount.transactions);

{
  /*................................................................................................................................................*/
}

// Extend

// interface Book {

//   name: string;

//   price: number;

// }

// interface EBook extends Book {

//   fileSize: number;

//   format: string;

// }

// interface AudioBook extends EBook {

//   duration: number;

// }

// const book:AudioBook = {

//   name: 'Harry Porter',

//   price: 1000,

//   fileSize:300,

//   format: 'pdf',

//   duration: 5

// }

// console.log(book.name, book.price, book
//   .fileSize, book.format, book.duration);

{
  /*................................................................................................................................................*/
}

// Merge => In type script, if there are 2 interfaces with same name then it automatically merge them into a single interface

// interface Book {

//   name: string,

//   price: number

// }

// interface Book {

//   size: number;

// }

// const book:Book = {

//   name: 'Pratheesh',

//   price: 1202,

//   size: 45

// }

// console.log(book.name, book.price, book.size);

{
  /*................................................................................................................................................*/
}

// With type merging is not possible

// type Book = {

//   name: string;

//   price: number;

// }

// type Book = {
//   size: number;
// }

{
  /*................................................................................................................................................*/
}

// For Primitives you have to use custom types

// type SanitizedString = string;

// type EvenNumber = number;

{
  /*................................................................................................................................................*/
}

// Unions

// type ID = number | string;

// // Example 1
// function printId(id: ID) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }

// // Example 2
// printId("Utkarsh");

// function getFirstThree(x: string | number[]) {
//   return x.slice(0, 3);
// }

// console.log(getFirstThree([1, 2, 3, 4, 5]));

{
  /*................................................................................................................................................*/
}

// Generics
// // Example 1
// function logStr(arg: string) {
//   console.log(arg);
//   return arg;
// }

// function logNumber(arg: number) {
//   console.log(arg);
//   return arg;
// }

// function logArray(arg: any[]) {
//   console.log(arg);
//   return arg;
// }

// /* Generic */
// function logAnything<T>(arg: T): T {
//   console.log(arg);
//   return arg;
// }

// logAnything(true);

// // Example 2
// interface HasAge {
//   age: number;
// }

// function getOldest<T extends HasAge>(people: T[]): T {
//   return people.sort((a, b) => b.age - a.age)[0];
// }

// const peopleAge: HasAge[] = [
//   { age: 16 },
//   { age: 20 },
//   { age: 30 },
//   { age: 10 },
// ];

// interface Player {
//   name: string;
//   age: number;
// }

// const players: Player[] = [
//   { name: "John", age: 16 },
//   { name: "Jane", age: 30 },
//   { name: "Happy", age: 12 },
// ];

// Assertion
// const person = getOldest(players) as Player;
// console.log(person.name);

// Generics
// const person = getOldest(players);
// console.log(person.age, person.name);

{
  /*................................................................................................................................................*/
}

//Structural Typing or duck typing

// interface ICredential {
//   username: string;
//   password: string;
//   isAdmin?: boolean;
// }

// function login(credentials: ICredential): boolean {
//   console.log(credentials);
//   return true;
// }

// const user: ICredential = {
//   username: "utkaesh945",
//   password: "secret",
//   isAdmin: true,
// };

// login(user);

{
  /*................................................................................................................................................*/
}

// interface IAuthentication {
//   username: string;
//   password: string;
//   login(username: string, password: string): void;
// }

// const auth: IAuthentication = {
//   username: "utkarsh945",
//   password: "secret",
//   login(username: string, password: string): boolean {
//     return true;
//   },
// };

{
  /*................................................................................................................................................*/
}

// Inference

// let num = 1;

{
  /*................................................................................................................................................*/
}

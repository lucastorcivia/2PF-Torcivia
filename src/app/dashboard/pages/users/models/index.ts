export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  telefono: string;
}

// export class User implements IUser {
//   constructor() {}
//   id: number;
//   name: string;
//   surname: string;
//   email: string;
//   password: string;

//   getFullName(): string {
//     return this.name + ' ' + this.surname;
//   }
// }

export interface CreateUserData {
  name: string;
  surname: string;
  email: string;
  password: string;
  telefono: string;
}

export interface UpdateUserData {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  telefono?: string;
}

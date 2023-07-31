import { User } from "../models";

export class UserMockService {
  private users: User[] = [
    {
      id: 1,
      name: 'FAKE_NAME',
      surname: 'FAKE_SURNAME',
      email: 'fake@mail.com',
      password: '123456',
      telefono: '11556324322'
    },
  ];
  getUsers(): User[] {
    return this.users;
  }
}

export interface IUser {
  id: string;
  name: string;
  avatarSrc: string;
}

export class User {
  public id: string;
  constructor(public name: string, public avatarSrc: string) {
    this.id = (Math.random() * 100).toString();
    this.name = name;
    this.avatarSrc = avatarSrc;
  }
}


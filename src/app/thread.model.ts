import { IMessage } from './message.model';

export interface IThread {
  id: string;
  name: string;
  avatarSrc: string;
  lastMessage: IMessage;
}

export class Thread {
  public lastMessage: IMessage;
  constructor(public id?: string, public name?: string, public avatarSrc?: string) {
    this.id = id || (Math.random() * 100).toString();
    this.name = name;
    this.avatarSrc = avatarSrc;
    // subscribe to last message data
  }
}

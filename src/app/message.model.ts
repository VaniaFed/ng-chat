import {IUser} from './user.model';
import {IThread} from './thread.model';

export interface IMessage {
  id: string;
  author: IUser;
  sentAt: IUser;
  text: string;
  date: Date;
  isRead: boolean;
  thread: IThread;
}

export class Message {
  public id: string;
  public author: IUser;
  public sentAt: IUser;
  public text: string;
  public date: Date;
  public isRead: boolean;
  public thread: IThread;
  constructor(message?: IMessage) {
    this.id = message && message.id || (Math.random() * 100).toString();
    this.author = message && message.author || null;
    this.sentAt = message && message.sentAt || null;
    this.text = message && message.text || null;
    this.date = message && message.date || new Date();
    this.isRead = message && message.isRead || false;
    this.thread = message && message.thread || null;
  }
}


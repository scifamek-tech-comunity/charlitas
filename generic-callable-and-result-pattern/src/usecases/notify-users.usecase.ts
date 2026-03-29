import { User } from "../models";
import { DomainEvent, GenericUsecase } from "../core";
import { GetValidUsersUsecase } from "./get-valid-users.usecase";
import {
  GottenValidUsersSTR,
  NotifiedUsersSTR,
  NotNotifiedUsers,
} from "../domain-events";

export class NotifyUsersUsecase extends GenericUsecase<User[]> {
  constructor(private getValidUsersUsecase: GetValidUsersUsecase) {
    super();
  }
  call(users: User[]): DomainEvent {
    const validUsersDE = this.getValidUsersUsecase.call(users);
    if (validUsersDE.code == GottenValidUsersSTR) {
      for (const user of validUsersDE.payload) {
        console.log("Notificando: " + user.phone);
      }
      return {
        code: NotifiedUsersSTR,
        payload: validUsersDE.payload,
      };
    } else {
      return NotNotifiedUsers(undefined);
    }
  }
}

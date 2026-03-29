import { DomainEvent, GenericUsecase } from "../core";
import { GottenValidUsersSTR } from "../domain-events";
import { User } from "../models";

export class GetValidUsersUsecase extends GenericUsecase<User[]> {
  call(users: User[]): DomainEvent {
    const goodUsers = users.filter((u) => !!u.phone);

    return {
      code: GottenValidUsersSTR,
      payload: goodUsers,
    };
  }
}

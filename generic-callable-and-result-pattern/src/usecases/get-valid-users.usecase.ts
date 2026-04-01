import { DomainEvent, GenericUsecase } from "../core";
import { GottenValidUsersSTR } from "../domain-events";
import { User } from "../models";

export abstract class GetValidUsersUsecase extends GenericUsecase<User[]> {
  abstract call(users: User[]): DomainEvent 
}




export class GetValidUsersUsecaseImpl extends GetValidUsersUsecase {
  call(users: User[]): DomainEvent {
    const goodUsers = users.filter((u) => !!u.phone);

    return {
      code: GottenValidUsersSTR,
      payload: goodUsers,
    };
  }
}

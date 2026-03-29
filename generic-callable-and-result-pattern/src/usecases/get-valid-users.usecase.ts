import { DomainEvent, GenericUsecase } from "src/core";
import { GottenValidUsersSTR } from "src/domain-events";
import { User } from "src/models";

export class GetValidUsersUsecase extends GenericUsecase<User[]> {
  call(users: User[]): DomainEvent {
    const goodUsers = users.filter((u) => !!u.phone);

    return {
      code: GottenValidUsersSTR,
      payload: goodUsers,
    };
  }
}

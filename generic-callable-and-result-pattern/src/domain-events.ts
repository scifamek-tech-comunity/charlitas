import { DomainEvent } from "./core";

export const SentMessage: DomainEvent = {
  code: "Sent",
  payload: true,
};
export const NotSentMessage: DomainEvent = {
  code: "NotSent",
  payload: false,
};

export const DomainEventConstructor = <T>(
  code: string,
): ((payload: T) => DomainEvent) => {
  return (payload: T) => {
    return {
      code,
      payload,
    };
  };
};


export const GottenValidUsersSTR = "GottenValidUsers";
export const NotifiedUsersSTR = "NotifiedUsers";
export const NotNotifiedUsers = DomainEventConstructor<undefined>("NotNotifiedUsers");
export const UsersAmountIsNotAllowedSTR = "UsersAmountIsNotAllowed";


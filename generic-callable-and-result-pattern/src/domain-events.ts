import { DomainEvent } from "./core";

export const SentMessage: DomainEvent = {
  code: "Sent",
  payload: true,
};
export const NotSentMessage: DomainEvent = {
  code: "NotSent",
  payload: false,
};

export const GottenValidUsersSTR = "GottenValidUsers";

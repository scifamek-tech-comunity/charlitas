export interface DomainEvent {
  code: string;
  payload: any;
}

export abstract class GenericUsecase<P> {
  abstract call(param: P): DomainEvent;
}

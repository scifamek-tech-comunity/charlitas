export interface DomainEvent<T = any> {
  code: string;
  payload: T;
}

export abstract class GenericUsecase<P> {
  abstract call(param: P): DomainEvent;
}

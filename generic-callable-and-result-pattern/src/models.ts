export interface User {
  name: string;
  phone: string;
}

export interface Player extends User {}
export interface Referee extends User {}
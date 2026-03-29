interface User {
  name: string;
  phone: string;
}

interface Player extends User {}
interface Referee extends User {}

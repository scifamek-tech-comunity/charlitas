interface User {
  name: string;
  phone: string;
}

interface Player extends User {}
interface Referee extends User {}

/**
 * Usuarios
 */
const Jimmy: Player = {
  name: "Jimmy",
  phone: "3216549875",
};

const Santiago: Player = {
  name: "Santiago",
  phone: "3219876548",
};

/**
 * Creación de la capacidad de notificación
 */

type Callable<T> = (user: T) => boolean;

const notifyUser: Callable<User> = (user: User) => {
  console.log(`Enviando notificación push al teléfono: ${user.phone}`);
  return true;
};

function notifyUserFN<T extends User>(user: T): boolean {
  console.log(`Enviando notificación push al teléfono: ${user.phone}`);
  return true;
}

notifyUserFN(Jimmy);
notifyUserFN(Santiago);

class Notifier<T> {
  call(user: T): boolean {
    console.log(`Enviando notificación push al teléfono: ${user['phone']}`);
    return true;
  }
}

const myAWSNotifier = new Notifier();
const notifierResponse = myAWSNotifier.call(Jimmy);
console.log("Respuesta de mi notifier: " + notifierResponse);

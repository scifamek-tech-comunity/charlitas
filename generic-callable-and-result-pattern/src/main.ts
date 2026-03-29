import { GottenValidUsersSTR } from "./domain-events";
import { User } from "./models";
import { GetValidUsersUsecase } from "./usecases/get-valid-users.usecase";

const users: User[] = [
  {
    name: "Juan",
    phone: "",
  },
  {
    name: "Estefanía",
    phone: "12346546",
  },
  {
    name: "Bryan",
    phone: "4363215235",
  },
  {
    name: "Daniel",
    phone: "23453453",
  },
  {
    name: "Santiago",
    phone: "",
  },
];

const getValidUsersUsecase = new GetValidUsersUsecase();
const validUsersDE = getValidUsersUsecase.call(users);
if ((validUsersDE.code = GottenValidUsersSTR)) {
  console.log("Los usuarios validos son " + validUsersDE.payload);
} else {
  console.log("Error en el sistema. ");
}

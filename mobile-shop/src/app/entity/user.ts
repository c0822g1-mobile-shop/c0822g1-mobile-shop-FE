import {Bill} from "./bill";
import {UserRole} from "./user-role";
import {BillHistory} from "./bill-history";

export interface User {
  id?: number;
  name?: string;
  username?: string;
  password?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  age?: number;
  avatar?: string;
  gender?: boolean;
  dateOfBirth?: string;
  role?: string;
  bill?: Bill;
  billHistory?: BillHistory;
}

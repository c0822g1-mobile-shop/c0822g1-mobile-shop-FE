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
  gender?: boolean;
  dateOfBirth?: string;
  userRole?: UserRole;
  bill?: Bill;
  billHistory?: BillHistory;
}

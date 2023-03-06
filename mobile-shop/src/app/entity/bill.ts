import {BillHistory} from "./bill-history";

export interface Bill {
  id?: number;
  idUser?: number;
  buyDate?: string;
  detail?: string;
  moneyTotal?: number;
  quantity?: number;
  paymentMethod?: string;
  billHistory?: BillHistory;
  billPrint?: boolean;
}

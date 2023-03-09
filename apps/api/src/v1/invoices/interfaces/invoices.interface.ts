export enum InvoiceStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  PAID = 'paid',
}

export enum PaymentTermsOptions {
  NET_1_DAY = 1,
  NET_7_DAYS = 7,
  NET_14_DAYS = 14,
  NET_30_DAYS = 30,
}

export interface Invoice {
  invoiceId: string;
  ownerId: string;
  status: InvoiceStatus;
  description: string;
  billFrom: BillFrom;
  billTo: BillTo;
  date: string;
  paymentTerms: PaymentTermsOptions;
  itemList: Item[];
}

export interface BillFrom {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface BillTo {
  clientName: string;
  clientEmail: string;
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
}

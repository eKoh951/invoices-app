enum InvoiceStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  PAID = 'paid',
}

export interface Invoice {
  id: string;
  status: InvoiceStatus;
  description: string;
  billFrom: BillFrom;
  billTo: BillTo;
  date: string;
  paymentTerms: string;
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

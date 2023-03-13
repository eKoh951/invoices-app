import {
  InvoiceStatus,
  PaymentTermsOptions,
} from '../../../v1/invoices/interfaces/invoices.interface';
import {
  CreateInvoiceDto,
  CreateInvoiceParams,
  UpdateInvoiceDto,
} from '../../../v1/invoices/dto/invoices.dto';

export const CreateInvoiceParamsStub = (): CreateInvoiceParams => ({
  username: 'test1234',
});

export const CreateInvoiceDtoStub = (): CreateInvoiceDto => ({
  status: InvoiceStatus.PENDING,
  description: 'Invoice test',
  billFrom: {
    street: 'Lirios 187',
    city: 'Colima',
    postCode: '28120',
    country: 'Mexico',
  },
  billTo: {
    clientName: 'Ronaldo',
    clientEmail: 'client@email.com',
    street: 'Morelos',
    city: 'Tecoman',
    postCode: '28100',
    country: 'Mexico',
  },
  itemList: [
    {
      name: 'Toy',
      quantity: 2,
      price: 100,
    },
  ],
  paymentTerms: PaymentTermsOptions.NET_30_DAYS,
});

export const UpdateInvoiceDtoStub = (): UpdateInvoiceDto => ({
  status: InvoiceStatus.PAID,
});

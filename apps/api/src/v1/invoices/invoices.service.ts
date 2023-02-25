import { Injectable } from '@nestjs/common';
import { InvoiceDto } from './dto/invoices.dto';

@Injectable()
export class InvoicesServiceV1 {
  createUserInvoice(username: string) {
    return {};
  }

  getAllUserInvoices(username: string) {
    return {};
  }

  getUserInvoice(username: string, invoiceId: string) {
    return {};
  }

  updateInvoice(username: string, invoiceId: string) {
    return {};
  }

  deleteInvoice(username: string, invoiceId: string) {
    return {};
  }
}

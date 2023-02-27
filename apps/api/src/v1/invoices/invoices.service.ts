import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InvoiceDto } from './dto/invoices.dto';

@Injectable()
export class InvoicesServiceV1 {
  constructor(@InjectModel('Invoices') private invoicesModel: Model<InvoiceDto>) {}

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

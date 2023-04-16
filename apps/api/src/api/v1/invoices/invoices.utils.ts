import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InvoiceDto } from './dto/invoices.dto';

export class InvoicesUtilsV1 {
  constructor(
    @InjectModel('Invoices') private invoicesModel: Model<InvoiceDto>,
  ) {}

  async generateUniqueId(): Promise<string> {
    const letters = 'ABCDEFGHIJKLMNOPKRSTUVWXYZ';
    const firstLetterIndex = Math.floor(Math.random() * letters.length);
    const secondLetterIndex = Math.floor(Math.random() * letters.length);

    const firstLetter = letters.charAt(firstLetterIndex);
    const secondLetter = letters.charAt(secondLetterIndex);

    const idNumber = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0');

    const invoiceId = firstLetter + secondLetter + idNumber;

    const idInMongo = await this.invoicesModel.findOne({ invoiceId });

    if (idInMongo) {
      return this.generateUniqueId();
    }

    return invoiceId;
  }
}

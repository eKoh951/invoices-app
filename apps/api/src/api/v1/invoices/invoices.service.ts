import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  InvoiceDto,
  CreateInvoiceDto,
  UpdateInvoiceDto,
} from './dto/invoices.dto';
import { InvoicesUtilsV1 } from './invoices.utils';

@Injectable()
export class InvoicesServiceV1 {
  constructor(
    @InjectModel('Invoices') private invoicesModel: Model<InvoiceDto>,
    private invoicesUtils: InvoicesUtilsV1
  ) {}

  async createUserInvoice(
    ownerEmail: string,
    invoiceData: CreateInvoiceDto
  ): Promise<InvoiceDto> {
    const uniqueId = await this.invoicesUtils.generateUniqueId();

    const createdInvoice = await this.invoicesModel.create({
      invoiceId: uniqueId,
      ownerEmail,
      ...invoiceData,
    });

    return createdInvoice.toObject({ versionKey: false });
  }

  async getAllUserInvoices(ownerEmail: string): Promise<InvoiceDto[]> {
    const mongoInvoices = await this.invoicesModel.find({ ownerEmail }).exec();

    const allInvoices = mongoInvoices.map((invoice) => {
      const invoiceData = invoice.toObject({ versionKey: false });
      delete invoiceData._id;

      return invoiceData;
    });

    return allInvoices;
  }

  async getUserInvoice(
    ownerEmail: string,
    invoiceId: string
  ): Promise<InvoiceDto> {
    const invoiceInMongo = await this.invoicesModel.findOne({
      invoiceId,
      ownerEmail,
    });

    if (!invoiceInMongo) {
      throw new NotFoundException('Invoice not found');
    }

    return invoiceInMongo.toObject({ versionKey: false });
  }

  async updateInvoice(
    ownerEmail: string,
    invoiceId: string,
    invoiceData: UpdateInvoiceDto
  ): Promise<InvoiceDto> {
    if (!Object.keys(invoiceData).length) {
      throw new BadRequestException(
        'At least one property must be added when updating the invoice'
      );
    }

    const invoiceInMongo = await this.invoicesModel.findOneAndUpdate(
      { ownerEmail, invoiceId },
      invoiceData,
      { new: true }
    );

    if (!invoiceInMongo) {
      throw new NotFoundException('Invoice not found');
    }

    return invoiceInMongo.toObject({ versionKey: false });
  }

  async deleteInvoice(
    ownerEmail: string,
    invoiceId: string
  ): Promise<InvoiceDto> {
    const invoiceInMongo = await this.invoicesModel.findOneAndDelete({
      ownerEmail,
      invoiceId,
    });

    if (!invoiceInMongo) {
      throw new NotFoundException('Invoice not found');
    }

    return invoiceInMongo.toObject({ versionKey: false });
  }
}

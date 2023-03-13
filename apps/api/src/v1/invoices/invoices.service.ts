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
    username: string,
    invoiceData: CreateInvoiceDto
  ): Promise<InvoiceDto> {
    const ownerId = await this.invoicesUtils.getUserIdByUsername(username);
    const uniqueId = await this.invoicesUtils.generateUniqueId();

    const createdInvoice = await this.invoicesModel.create({
      invoiceId: uniqueId,
      ownerId,
      ...invoiceData,
    });

    return createdInvoice.toObject({ versionKey: false });
  }

  async getAllUserInvoices(username: string): Promise<InvoiceDto[]> {
    const ownerId = await this.invoicesUtils.getUserIdByUsername(username);

    const mongoInvoices = await this.invoicesModel.find({ ownerId }).exec();

    const allInvoices = mongoInvoices.map((invoice) => {
      const invoiceData = invoice.toObject({ versionKey: false });
      delete invoiceData._id;

      return invoiceData;
    });

    return allInvoices;
  }

  async getUserInvoice(
    username: string,
    invoiceId: string
  ): Promise<InvoiceDto> {
    const ownerId = await this.invoicesUtils.getUserIdByUsername(username);

    const invoiceInMongo = await this.invoicesModel.findOne({
      invoiceId,
      ownerId,
    });

    if (!invoiceInMongo) {
      throw new NotFoundException('Invoice not found');
    }

    return invoiceInMongo.toObject({ versionKey: false });
  }

  async updateInvoice(
    username: string,
    invoiceId: string,
    invoiceData: UpdateInvoiceDto
  ) {
    if (!Object.keys(invoiceData).length) {
      throw new BadRequestException(
        'At least one property must be added when updating the invoice'
      );
    }
    const ownerId = await this.invoicesUtils.getUserIdByUsername(username);

    const invoiceInMongo = await this.invoicesModel.findOneAndUpdate(
      { ownerId, invoiceId },
      invoiceData,
      { new: true }
    );

    if (!invoiceInMongo) {
      throw new NotFoundException('Invoice not found');
    }

    return invoiceInMongo.toObject({ versionKey: false });
  }

  async deleteInvoice(
    username: string,
    invoiceId: string
  ): Promise<InvoiceDto> {
    const ownerId = await this.invoicesUtils.getUserIdByUsername(username);

    const invoiceInMongo = await this.invoicesModel.findOneAndDelete({
      ownerId,
      invoiceId,
    });

    if (!invoiceInMongo) {
      throw new NotFoundException('Invoice not found');
    }

    return invoiceInMongo.toObject({ versionKey: false });
  }
}

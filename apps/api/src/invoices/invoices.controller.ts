import { Controller } from "@nestjs/common";
import { InvoicesService } from "./invoices.service";
import { InvoiceDto } from "./dto/invoice.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('invoices')
@Controller("invoices")
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}
}

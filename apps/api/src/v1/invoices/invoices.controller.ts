import { Controller } from "@nestjs/common";
import { InvoicesServiceV1 } from "./invoices.service";
import { InvoiceDto } from "./dto/invoice.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Invoices")
@Controller({ path: "invoices", version: "1" })
export class InvoicesControllerV1 {
  constructor(private readonly invoicesService: InvoicesServiceV1) {}
}

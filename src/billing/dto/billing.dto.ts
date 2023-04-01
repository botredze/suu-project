export class CreateBillingDto {
  water_type: string;
  price: number;
}

export class UpdateBillingDto{
  water_type: string;
  price: number;
  billingId: number
}
export class CreateAddressDto  {
  street: string;
  home_number: number;
  region: string;
  area: string;
  city: string;
  user_details_id: number;
}

export class UptdateAddressDto {
  street: string;
  home_number: number;
  city: string;
  region: string;
  area: string;
  user_details_id: number;
  address_id: number
}
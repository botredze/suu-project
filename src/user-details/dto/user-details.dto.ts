
import { Address } from 'src/address/address.model';
export class UserDetailsDto {

    firs_name: string;
    last_name: string;
    birth_date: string;
    phone_number: string;
    wa_phone_number: string;
    user_type: string;
    userId: string

    address: Address
}
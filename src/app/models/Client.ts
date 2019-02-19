import { Timestamp } from 'rxjs';

export interface Client {
    id?: string,
    firstName?: string,
    lastName?: string,
    City?: string,
    Email?: string,
    Notes?: string,
    Phone?: string,
    State?: string,
    Street?: string,
    ZIP?: string,
    case?: string,
    docStatus: string,
    lastContact?: any,
    payStatus?: string,
    registered?: any; 

}
import { ServiceItem } from './service-item.model';

export class CercetatorSectionModel {
    id: number;
    title: string;
    subtitle: string;
    rowVersion: string;
    items: Array<ServiceItem>;
}

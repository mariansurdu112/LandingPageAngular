import { ServiceItem } from './service-item.model';

export class OmSectionModel {
    id: number;
    title: string;
    subtitle: string;
    rowVersion: string;
    items: Array<ServiceItem>;
}

import { PortfolioItemModel } from './portfolio-item.model';

export class ArhitectSectionModel {
    id: number;
    title: string;
    subtitle: string;
    items: Array<PortfolioItemModel>;
    rowVersion: string;
}

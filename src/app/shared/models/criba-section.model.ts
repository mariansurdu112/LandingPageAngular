import { PortfolioItemModel } from './portfolio-item.model';

export class CribaSectionModel {
    id: number;
    title: string;
    subtitle: string;
    items: Array<PortfolioItemModel>;
    rowVersion: string;
}

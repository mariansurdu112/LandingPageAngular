import { StoryItemModel } from './story-item.model';

export class ProfesorSectionModel {
    id: number;
    title: string;
    subtitle: string;
    rowVersion: string;
    storyItems: Array<StoryItemModel>;
}

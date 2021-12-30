export interface ICompetition{
    id: number;
    name: string;
    sportID: number;
    categoryID: number;
    seasons: any[];
    sourceCompetitions: string;
    lastCheckedBy: string;
    lastCheck: Date;
    deleted: boolean;
    translations: string;
    createdBy: string;
    createdAt: Date;
}
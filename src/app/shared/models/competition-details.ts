export interface ICompDet {
    id: number;
    name: string;
    sportID: number;
    countryID: number;
    country: string;
    competitorPlayers: string;
    sourceCompetitors: any[];
    lastCheckedBy: string;
    lastCheck: Date;
    deleted: boolean;
    translations: string;
    createdBy: string;
    createdAt: Date;
}
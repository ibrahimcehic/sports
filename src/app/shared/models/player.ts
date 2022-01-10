export interface IPlayer{
    id: string;
    sportID: string;
    countryID: number;
    name: string;
    sourcePlayers: [];
    deleted: boolean;
    createdBy: string;
    createdAt: Date;
}
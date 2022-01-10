export interface IPlayers{
    id: number;
    sportID: number;
    countryID: number;
    name: string;
    sourcePlayers: any[];
    deleted: boolean;
    createdBy: string;
    createdAt:  Date;
}

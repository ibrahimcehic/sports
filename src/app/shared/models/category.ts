export interface ICatergory{
    id: number;
    name: string;
    sportID: number;
    countryID: number;
    country: string;
    sourceCategories: string;
    deleted: boolean;
    translations: string;
    createdBy: string;
    createdAt: Date;
}
export interface Amount extends DatabaseObject {
    currency: string;
    value: number;
}

export interface Auditable {
    createdBy?: string;
    creationDate?: Date;
    modifiedBy?: string;
    modificationDate?: Date;
}

export interface DatabaseObject extends Auditable {
    id?: number;
    version?: number;
}
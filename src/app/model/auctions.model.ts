import { Attachment } from "./attachments.model";
import { Amount, DatabaseObject } from "./common.model";

export interface Auction extends DatabaseObject {
    signature: string;

    title: string;

    price: Amount;

    description: string;

    category: string;

    status: string;

    toCheckManually: boolean;

    statusChangeDate: Date;

    attachments: Attachment[];

    seller: SellerProfile;

    ownerId: string;

    finishReason: string;

    startDate: Date;

    lastRefreshmentDate: Date;

    expiryDate: Date;

    endDate: Date;
}

export interface AuctionCreationRequest {

    title?: string;

    description?: string;

    categoryId?: string;

    price?: Amount;

    attachments?: Attachment[];

    seller?: SellerProfile;
}

export interface SellerProfile extends DatabaseObject {
    
    firstname: string;

    name: string;

    location: string;

    ownerId?: string;

    contactInformation: ContactInformation[];
}

export interface ContactInformation extends DatabaseObject {
    type: string;
    value: string;
}

export interface AuctionsSearchResponse {
    auctions: Auction[];
    total: number;
}

export interface UserFavourites {
    auctions: string[];
}

export interface CategoryRestModel extends DatabaseObject {
    parentId: number;
    code: string;
}

export interface Category extends CategoryRestModel {

}

export interface AuctionsSearchRequest {
    text?: string;
    category?: string;
    offset?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: string;
}

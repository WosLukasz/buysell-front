import { Attachment } from "./attachments.model";
import { Amount } from "./common.model";

export interface Auction {
    signature: string;

    title: string;

    price: Amount;

    description: string;

    category: string;

    status: string;

    statusChangeDate: Date;

    endDate: Date;

    attachments: Attachment[];

    seller: SellerProfile;

    ownerId: string;

    finishReason: string;

    creationDate: Date;
}

export interface AuctionCreationRequest {

    title?: string;

    description?: string;

    categoryId?: string;

    price?: Amount;

    attachments?: Attachment[];

    seller?: SellerProfile;
}

export interface SellerProfile {
    
    firstname: string;

    name: string;

    location: string;

    contactInformation: ContactInformation[];
}

export interface ContactInformation {
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

export interface CategoryRestModel {
    id: string;
    parentId: string;
    code: string;
}

export interface Category extends CategoryRestModel {

}

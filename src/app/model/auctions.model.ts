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

export interface Amount {
    currency: string;
    value: number;
}

export interface AttachmentWithContent extends Attachment {
    content?: File;
    context?: string;
}

export interface AttachmentSaveRequest extends Attachment {
    content?: File;
    context?: string;
}

export interface Attachment {
    id?: string;
    path?: string;
    originalFilename?: string;
    contentType?: string;
    main?: boolean;
    order?: number;
}


export interface AuctionsSearchResponse {
    auctions: Auction[];
    total: number;
}
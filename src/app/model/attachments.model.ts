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
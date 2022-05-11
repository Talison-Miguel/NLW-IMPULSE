export interface feedBackCreateData {
    type: string,
    comment: string,
    screenshot?: string,
}

export interface FeedBacksRepository {
    create: (data: feedBackCreateData) => Promise<void>;
}
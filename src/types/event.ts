export interface Event {
    metadata?: {
        [key: string]: any;
    },
    message: string;
    event_channel: string;
    event_type: string;
}
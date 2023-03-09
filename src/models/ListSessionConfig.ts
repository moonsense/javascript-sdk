import { common } from './generated/protos';

export interface ListSessionConfig {
    sessionsPerPage?: number;
    labels?: string[];
    journeyId?: string;
    platforms?: common.DevicePlatform[];
    since?: Date;
    until?: Date;
}
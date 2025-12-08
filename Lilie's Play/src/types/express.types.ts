 // src/types/express.types.ts

import type { Request } from 'express';
import { IJwtPayload } from './auth.types';

// Augments the Express Request interface with the decoded user payload
export interface AuthRequest extends Request {
    user?: IJwtPayload; 
}
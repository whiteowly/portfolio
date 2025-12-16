// src/services/token.service.ts
import jwt from 'jsonwebtoken';

import type { IJwtPayload } from '../types/auth.types';
import type { User } from '@prisma/client/edge';

const JWT_SECRET = process.env.JWT_SECRET!;
const EXPIRATION = '15m'; 

export function generateAccessToken(user: User): string {
   
    const payload: IJwtPayload = {
        sub: user.id, 
        username: user.username,
    };

    const token = jwt.sign(
        payload, 
        JWT_SECRET,
        { expiresIn: EXPIRATION }
    );

    return token;
}
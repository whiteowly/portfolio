
import type {  Response } from 'express';
import type { Request } from 'express';
import bcrypt from 'bcrypt';
import { generateAccessToken } from './token.service';
import { prisma } from '../lib/prisma';

export async function loginUser(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

  
    const user = await prisma.user.findUnique({
        where: { username },
        select: {
            id: true,
            username: true,
            email: true,
            password_hash: true,
            
        }
    });

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials." });
    }

    
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials." });
    }

    
    const accessToken = generateAccessToken(user);

  
    return res.status(200).json({
        message: 'Login successful!',
        accessToken: accessToken,
        user: { id: user.id, username: user.username }, 
    });
}
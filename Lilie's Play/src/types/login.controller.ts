// src/controllers/login.controller.ts
import type {  Response } from 'express';
import type { Request } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../prisma'; // Your Prisma Client instance
import { generateAccessToken } from '../services/token.service';

export async function loginUser(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    // 1. Find the user in the database
    const user = await prisma.user.findUnique({
        where: { username },
    });

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials." });
    }

    // 2. Compare the plain password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials." });
    }

    // 3. Generate the Access Token for SSO
    const accessToken = generateAccessToken(user);

    // 4. Return the token
    return res.status(200).json({
        message: 'Login successful!',
        accessToken: accessToken,
        user: { id: user.id, username: user.username }, // Return safe user data
    });
}
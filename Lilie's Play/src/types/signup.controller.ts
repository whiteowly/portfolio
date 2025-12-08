// src/controllers/signup.controller.ts
import type { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';
import { prisma } from '../lib/prisma'; // Your Prisma Client instance


const saltRounds = 10;

type SignupBody = {
    username?: string
    email?: string
    password?: string
}

export async function registerUser(req: Request, res: Response): Promise<Response> {
        const { username, email, password } = (req.body as SignupBody);

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Missing required fields.' });
    }

    try {
        // 1. Generate the secure hash
        const password_hash = await bcrypt.hash(password, saltRounds);

        // 2. Save the user (with the HASHED password) to PostgreSQL
        const newUser = await prisma.user.create({
            data: {
                username: username!,
                email: email!,
                password_hash,
               
            },
            select: { id: true, username: true, email: true }, // Never return the hash
        });

        return res.status(201).json({ 
            message: 'User registered successfully for Lilie\'s Play!', 
            user: newUser 
        });

    } catch (error) {
        // Prisma error code for unique constraint violation (username/email already exists)
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return res.status(409).json({ message: 'Username or email is already taken.' });
        }
        console.error(error);
        return res.status(500).json({ message: 'Registration failed.' });
    }
}
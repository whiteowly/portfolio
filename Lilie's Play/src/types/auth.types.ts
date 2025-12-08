// src/types/auth.types.ts

// IJwtPayload defines the exact shape of the object stored inside the JWT
export interface IJwtPayload {
    sub: number;       // JWT standard: Subject, storing the User ID
    username: string;
    // JWT standard claims like exp (expiration) will be added automatically
}
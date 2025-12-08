import { auth } from "./auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";
import { createAuthClient } from "better-auth/react";

export const { POST, GET } = toNextJsHandler(auth);
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:5174/"
})
export const { signIn, signUp, useSession } = createAuthClient()
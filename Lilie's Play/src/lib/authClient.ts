export interface User {
  id?: string;
  email: string;
  name?: string;
}

export interface AuthResponse {
  token?: string;
  user?: User;
}

const API_BASE = (import.meta as any).env?.VITE_API_BASE || '';
const TOKEN_KEY = 'auth_token';

export function setToken(token: string) {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (e) {
    // ignore storage errors
  }
}

export function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (e) {
    return null;
  }
}

export function clearToken() {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (e) {
    // ignore
  }
}

async function request<T = any>(path: string, opts: RequestInit = {}): Promise<T> {
  const headers = new Headers(opts.headers as HeadersInit || {});
  const token = getToken();
  if (token) headers.set('Authorization', `Bearer ${token}`);
  if (!headers.has('Content-Type')) headers.set('Content-Type', 'application/json');

  const res = await fetch(`${API_BASE}${path}`, { ...opts, headers });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  // Try to parse JSON, but return empty on no-content
  if (res.status === 204) return {} as T;
  return (await res.json()) as T;
}

export async function signup(payload: { email: string; password: string; name?: string }): Promise<AuthResponse> {
  return request<AuthResponse>('/auth/signup', { method: 'POST', body: JSON.stringify(payload) });
}

export async function login(payload: { email: string; password: string }): Promise<AuthResponse> {
  const resp = await request<AuthResponse>('/auth/login', { method: 'POST', body: JSON.stringify(payload) });
  if (resp?.token) setToken(resp.token);
  return resp;
}

export async function logout(): Promise<void> {
  try {
    await request('/auth/logout', { method: 'POST' });
  } finally {
    clearToken();
  }
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    return await request<User>('/auth/me', { method: 'GET' });
  } catch (e) {
    return null;
  }
}

const authClient = {
  signup,
  login,
  logout,
  getCurrentUser,
  setToken,
  getToken,
  clearToken,
};

export default authClient;

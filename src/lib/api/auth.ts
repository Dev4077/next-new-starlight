import { API_BASE_URL } from '@/lib/config';

export interface LoginPayload {
    email: string;
    password: string;
}

export async function loginUser(payload: LoginPayload) {
    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || 'Login failed');
    }

    return data;
}

const USERS_KEY = 'hc_users';
const SESSION_KEY = 'hc_session';

// Простое хеширование для демо-режима:
// пароли не хранятся в открытом виде, но это не серверная защита.
function hashPassword(password) {
  let h = 5381;
  for (let i = 0; i < password.length; i++) {
    h = (h * 33) ^ password.charCodeAt(i);
  }
  return String(h >>> 0);
}

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

export function register(name, email, password) {
  email = email.trim().toLowerCase();
  const users = readUsers();

  if (users.some((u) => u.email === email)) {
    return { ok: false, error: 'Этот email уже зарегистрирован' };
  }

  users.push({
    id: Date.now(),
    name: name.trim(),
    email,
    passwordHash: hashPassword(password),
    createdAt: new Date().toISOString(),
  });

  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem(SESSION_KEY, email);
  return { ok: true };
}

export function login(email, password) {
  email = email.trim().toLowerCase();
  const user = readUsers().find((u) => u.email === email);

  if (!user) return { ok: false, error: 'Аккаунт с таким email не найден' };
  if (user.passwordHash !== hashPassword(password)) {
    return { ok: false, error: 'Неверный пароль' };
  }

  localStorage.setItem(SESSION_KEY, email);
  return { ok: true };
}

export function getCurrentUser() {
  const email = localStorage.getItem(SESSION_KEY);
  if (!email) return null;
  const user = readUsers().find((u) => u.email === email);
  return user ? { name: user.name, email: user.email } : null;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

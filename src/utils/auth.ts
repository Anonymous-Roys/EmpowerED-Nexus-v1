export interface User {
  id: string;
  email: string;
  name: string;
}

export const authService = {
  signIn: (email: string, password: string): User | null => {
    // Simple validation for demo
    if (email && password.length >= 6) {
      const user: User = {
        id: '1',
        email,
        name: email.split('@')[0]
      };
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    return null;
  },

  signOut: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
};
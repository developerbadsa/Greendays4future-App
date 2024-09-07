

import { AuthProvider } from '../../context/AuthContext';
import AuthLayout from './AuthLayout';

export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthLayout />
    </AuthProvider>
  );
}

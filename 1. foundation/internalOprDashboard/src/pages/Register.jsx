import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lightning, Envelope, Lock, User, Eye, EyeSlash } from '@phosphor-icons/react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName,
          role: 'pelanggan', // Default role untuk registrasi publik
        }
      }
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      alert('Registration successful! Please check your email for verification.');
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 transition-colors">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-xl text-white mb-4 shadow-lg shadow-indigo-600/20">
            <Lightning weight="bold" className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Daftar Pelanggan</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Buat akun untuk mulai menggunakan layanan kami</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <form className="space-y-5" onSubmit={handleRegister}>
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold rounded-lg border border-red-100 dark:border-red-800">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <User weight="bold" />
                </span>
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  placeholder="John Doe" 
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <Envelope weight="bold" />
                </span>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="name@company.com" 
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <Lock weight="bold" />
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="••••••••" 
                  required
                  className="block w-full pl-10 pr-10 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition"
                >
                  {showPassword ? <EyeSlash weight="bold" /> : <Eye weight="bold" />}
                </button>
              </div>
            </div>

            <button 
              disabled={loading}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-sm text-slate-500">
          Already have an account? <Link to="/login" className="font-bold text-indigo-600 hover:text-indigo-500 transition">Sign in instead</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

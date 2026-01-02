import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lightning, Envelope, Lock, Eye, EyeSlash, GithubLogo, GoogleLogo } from '@phosphor-icons/react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await signIn({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/overview');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 transition-colors">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-xl text-white mb-4 shadow-lg shadow-indigo-600/20">
            <Lightning weight="bold" className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome Back</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Enter your credentials to access OpsCenter</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <form className="space-y-5" onSubmit={handleLogin}>
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold rounded-lg border border-red-100 dark:border-red-800">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <Envelope weight="bold" />
                </span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com" 
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold">Password</label>
                <a href="#" className="text-xs font-bold text-indigo-600 hover:text-indigo-500 transition">Forgot?</a>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <Lock weight="bold" />
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            <span className="relative px-4 bg-white dark:bg-slate-900 text-xs font-bold text-slate-400 uppercase tracking-widest">Or continue with</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition font-semibold text-sm text-slate-600 dark:text-slate-300">
              <GoogleLogo weight="bold" className="text-lg text-red-500" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition font-semibold text-sm text-slate-600 dark:text-slate-300">
              <GithubLogo weight="bold" className="text-lg" />
              Github
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-sm text-slate-500">
          Don't have an account? <Link to="/register" className="font-bold text-indigo-600 hover:text-indigo-500 transition">Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

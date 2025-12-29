import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lightning, Envelope, Lock, User, Eye, EyeSlash } from '@phosphor-icons/react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 transition-colors">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-xl text-white mb-4 shadow-lg shadow-indigo-600/20">
            <Lightning weight="bold" className="text-2xl" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Create Account</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Start managing your operations more efficiently</p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <User weight="bold" />
                </span>
                <input 
                  type="text" 
                  placeholder="John Doe" 
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
                  placeholder="name@company.com" 
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
                  placeholder="••••••••" 
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
              <p className="text-[10px] text-slate-500 mt-2 ml-1 italic">Min. 8 characters with letters & numbers</p>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input type="checkbox" className="mt-1 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700" id="terms" />
              <label htmlFor="terms" className="text-xs text-slate-500">
                I agree to the <a href="#" className="font-bold text-indigo-600">Terms of Service</a> and <a href="#" className="font-bold text-indigo-600">Privacy Policy</a>
              </label>
            </div>

            <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 active:scale-[0.98]">
              Create Account
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


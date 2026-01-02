# Environment Configuration

## 1. Local Development (`.env.local`)
Create this file in the root of `internalOprDashboard`.
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_API_URL=/api
```

## 2. Development (`.env.development`)
Similar to local, used during `npm run dev`.
```env
VITE_SUPABASE_URL=https://your-dev-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-dev-anon-key
VITE_API_URL=/api
```

## 3. Production (`.env.production` / Vercel Settings)
In Production (Vercel), set these in the Dashboard Settings > Environment Variables.
```env
VITE_SUPABASE_URL=https://your-prod-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-prod-anon-key
VITE_API_URL=/api
```


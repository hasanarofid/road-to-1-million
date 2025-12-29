# OpsCenter | Internal Operations Dashboard

Enterprise-ready React dashboard for internal operations.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS v4, Phosphor Icons.
- **Backend**: Vercel Serverless Functions.
- **Database**: Supabase.
- **Infrastructure**: Vercel.

## Project Structure
- `src/api/`: API integration and services.
- `src/components/`: Reusable UI components.
- `src/context/`: State management (Theme, Auth).
- `src/hooks/`: Business logic hooks.
- `src/layouts/`: Main application shells.
- `src/pages/`: Page-level components.
- `src/utils/`: Configuration and helpers (Supabase client).
- `api/`: Vercel serverless functions.

## Setup & Installation

### 1. Prasyarat
Pastikan Anda sudah menginstal **Node.js** (versi 18+) di komputer Anda.

### 2. Instalasi Dependensi
Buka terminal di folder proyek ini dan jalankan:
```bash
npm install
```

### 3. Konfigurasi Environment (.env)
Buat file bernama `.env.local` di root proyek ini (sejajar dengan `package.json`) dan isi dengan data dari Supabase Anda:

```env
# Supabase (Dapatkan di Project Settings > API)
VITE_SUPABASE_URL=https://xxxxxxxxxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# API URL
VITE_API_URL=/api
```

### 4. Menjalankan di Lokal (Development)
Untuk menjalankan aplikasi dengan fitur hot-reload:
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:5173`.

### 5. Deployment ke Vercel (Produksi)
1. Instal Vercel CLI: `npm i -g vercel`
2. Jalankan perintah: `vercel`
3. Saat ditanya "Set up and deploy", pilih **Yes**.
4. Masukkan Environment Variables (`VITE_SUPABASE_URL` & `VITE_SUPABASE_ANON_KEY`) di **Vercel Dashboard** proyek Anda agar sistem di produksi bisa terhubung ke database.

## Fitur Utama
- **React v18 + Vite**: Build cepat dan modern.
- **Supabase Integration**: Auth dan Database ready.
- **Vercel Serverless**: Backend API terintegrasi di folder `/api`.
- **Responsive & Dark Mode**: Nyaman di semua perangkat.


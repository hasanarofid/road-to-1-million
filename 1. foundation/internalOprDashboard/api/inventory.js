import pkg from 'pg';
const { Pool } = pkg;

// Konfigurasi koneksi ke PostgreSQL lokal Anda (Port 5432)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'internal_opr_dashboard',
  password: 'hasanitki', // Password yang Anda buat tadi
  port: 5432,
});

export default async function handler(request, response) {
  try {
    const client = await pool.connect();
    
    // Contoh query: Ambil data dari tabel inventory
    const result = await client.query('SELECT * FROM public.inventory ORDER BY created_at DESC');
    client.release();

    response.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Gagal konek ke database lokal: ' + err.message });
  }
}


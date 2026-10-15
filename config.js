/* ============================================================
   KONFIGURASI PROYEK — isi nilai Supabase Anda (sekali saja).
   Supabase → Project Settings → API:
   - SUPABASE_URL      = "Project URL"
   - SUPABASE_ANON_KEY = "anon public" / "Publishable" key  (JANGAN pakai service_role / secret)
   Aturan: satu baris per nilai, di antara tanda kutip lurus ' ' (bukan kutip melengkung).
   Blok BRAND bersifat opsional; admin tetap bisa mengubahnya di menu Pengaturan > Identitas & Tampilan
   (nilai yang disimpan di sana lebih diutamakan).
   ============================================================ */
window.APP_CONFIG = {
  SUPABASE_URL: 'https://hmdjahsyscdcunqxpbbp.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_R3xhvE9DMN-3C7vu45nb7Q_JVYB1nv8',

  BRAND: {
    appName: 'Manajemen Keuangan Produksi',
    tagline: 'Stok, transaksi & biaya produksi',
    perusahaan: '',          // nama bisnis di header invoice (kosong = pakai nama aplikasi)
    alamat: '',
    telepon: '',
    logoUrl: '',             // kosong = logo inisial otomatis
    faviconUrl: '',          // kosong = pakai logo
    primaryColor: '#16a34a',
    secondaryColor: '#f97316',
    sidebarColor: '#151a35',
    poweredBy: ''            // mis. 'Fix Projects' untuk menampilkan "Didukung oleh ..." di halaman login
  }
};

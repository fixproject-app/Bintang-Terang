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
    appName: 'BINTANG TERANG',
    tagline: 'Industrial Manajemen',
    perusahaan: 'PD. BINTANG TERANG',          // nama bisnis di header invoice (kosong = pakai nama aplikasi)
    alamat: 'Jl. Pengairan No. 19 RT. 18/04, Pesayangan, Talang, Tegal',
    telepon: '0857-4222-1062/0858-4226-6636',
    logoUrl: 'https://hmdjahsyscdcunqxpbbp.supabase.co/storage/v1/object/public/app-assets/logo/logo-1792088362585.png',             // kosong = logo inisial otomatis
    faviconUrl: '',          // kosong = pakai logo
    primaryColor: '#B82601',
    secondaryColor: '#813772',
    sidebarColor: '#062F4F',
    poweredBy: 'FIX PROJECT'            // mis. 'Fix Projects' untuk menampilkan "Didukung oleh ..." di halaman login
  }
};

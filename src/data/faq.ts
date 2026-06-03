export interface FaqItem {
  question: string
  answer: string
}

export interface FaqCategory {
  title: string
  items: FaqItem[]
}

export const faqData: FaqCategory[] = [
  {
    title: 'Pengiriman',
    items: [
      {
        question: 'Berapa lama estimasi pengiriman?',
        answer: 'Estimasi pengiriman bervariasi tergantung lokasi:\n\n• **Jabodetabek:** 1–3 hari kerja\n• **Pulau Jawa:** 2–4 hari kerja\n• **Luar Pulau Jawa:** 3–7 hari kerja\n• **Papua & daerah terpencil:** 5–10 hari kerja\n\nWaktu pengiriman dihitung setelah pesanan diproses (1×24 jam hari kerja). Hari Sabtu, Minggu, dan tanggal merah tidak termasuk hari kerja.',
      },
      {
        question: 'Kurir apa saja yang tersedia?',
        answer: 'Kami bekerja sama dengan kurir-kurir terpercaya berikut:\n\n• **JNE** (REG, YES, OKE)\n• **J&T Express**\n• **SiCepat** (REG, BEST)\n• **AnterAja**\n• **Ninja Express**\n• **GoSend / GrabExpress** (khusus Jabodetabek, same-day delivery)\n\nKurir dapat dipilih saat checkout sesuai preferensi dan estimasi ongkir.',
      },
      {
        question: 'Apakah ada gratis ongkir?',
        answer: 'Ya! Kami menyediakan gratis ongkir dengan ketentuan:\n\n• **Gratis ongkir** untuk pembelian minimal **Rp 300.000** ke seluruh Indonesia\n• **Cashback ongkir** hingga Rp 30.000 untuk pembelian di bawah Rp 300.000\n\nPromo gratis ongkir dapat berubah sewaktu-waktu. Cek banner promo di halaman utama untuk info terbaru.',
      },
      {
        question: 'Bagaimana cara melacak pesanan saya?',
        answer: 'Setelah pesanan dikirim, kamu akan menerima **nomor resi** melalui email dan WhatsApp. Kamu bisa melacak pesanan dengan cara:\n\n1. Klik link tracking di email/WhatsApp konfirmasi\n2. Masukkan nomor resi di website kurir terkait\n3. Hubungi CS kami via WhatsApp untuk bantuan tracking\n\nNomor resi biasanya tersedia dalam 1×24 jam setelah pesanan diproses.',
      },
      {
        question: 'Apakah bisa kirim ke luar negeri?',
        answer: 'Saat ini kami hanya melayani pengiriman ke seluruh wilayah **Indonesia**. Untuk pengiriman internasional, silakan hubungi CS kami via WhatsApp untuk dibantu secara khusus.',
      },
    ],
  },
  {
    title: 'Pembayaran',
    items: [
      {
        question: 'Metode pembayaran apa saja yang tersedia?',
        answer: 'Kami menerima berbagai metode pembayaran:\n\n• **Transfer Bank** — BCA, BNI, BRI, Mandiri, CIMB Niaga\n• **E-Wallet** — GoPay, OVO, DANA, ShopeePay, LinkAja\n• **Virtual Account** — Semua bank besar\n• **QRIS** — Scan QR dari semua e-wallet dan mobile banking\n• **Kartu Kredit/Debit** — Visa, Mastercard\n• **COD** — Bayar di tempat (khusus area tertentu)\n\nSemua transaksi diproses secara aman melalui payment gateway terpercaya.',
      },
      {
        question: 'Apakah bisa cicilan?',
        answer: 'Ya, kami menyediakan opsi cicilan 0% untuk pembelian menggunakan kartu kredit tertentu:\n\n• **Cicilan 3 bulan** — untuk pembelian minimal Rp 300.000\n• **Cicilan 6 bulan** — untuk pembelian minimal Rp 500.000\n\nSilakan cek halaman checkout untuk melihat opsi cicilan yang tersedia sesuai kartu kredit kamu.',
      },
      {
        question: 'Berapa lama batas waktu pembayaran?',
        answer: 'Batas waktu pembayaran tergantung metode yang dipilih:\n\n• **Transfer Bank / VA:** 24 jam\n• **E-Wallet / QRIS:** 15 menit\n• **Kartu Kredit:** Langsung diproses\n\nJika melewati batas waktu, pesanan otomatis dibatalkan dan kamu perlu membuat pesanan baru.',
      },
    ],
  },
  {
    title: 'Produk',
    items: [
      {
        question: 'Apakah parfum Mykonos original?',
        answer: 'Tentu! Semua produk Mykonos adalah **100% original** dan diproduksi langsung oleh tim kami. Kami menggunakan bahan-bahan berkualitas tinggi yang diimpor dan diformulasikan oleh perfumer berpengalaman.\n\nSetiap botol dilengkapi dengan **hologram keaslian** dan **QR code** yang bisa di-scan untuk verifikasi.',
      },
      {
        question: 'Berapa lama ketahanan parfum Mykonos?',
        answer: 'Ketahanan parfum bervariasi tergantung varian:\n\n• **Eau de Parfum (EDP):** 6–10 jam\n• **Projection:** Moderate hingga kuat, tergantung notes\n\nTips agar parfum lebih tahan lama:\n1. Semprotkan di titik nadi (pergelangan tangan, leher, belakang telinga)\n2. Jangan menggosok setelah menyemprotkan\n3. Gunakan pada kulit yang sudah dioles moisturizer (tanpa wangi)',
      },
      {
        question: 'Apakah ada ukuran sample/tester?',
        answer: 'Ya! Kami menyediakan **sample kit** berisi 5 varian pilihan dalam ukuran 2ml dengan harga spesial. Ini cara terbaik untuk mencoba beberapa aroma sebelum membeli ukuran penuh.\n\nSample kit bisa dipesan langsung di halaman Shop atau hubungi CS kami.',
      },
      {
        question: 'Apa perbedaan Scent Family?',
        answer: '**Scent Family** adalah kategori besar yang mengelompokkan parfum berdasarkan karakter aroma dominan:\n\n• **Floral** — Aroma bunga-bungaan (mawar, melati, peony). Feminin dan romantis\n• **Woody** — Karakter kayu (sandalwood, cedar, oud). Hangat dan maskulin\n• **Fresh** — Kesan segar (citrus, aquatic, green). Ringan dan bersih\n• **Oriental** — Aroma eksotis (vanilla, amber, rempah). Kaya dan sensual\n\nGunakan fitur **Find Your Scent** untuk menemukan scent family yang paling cocok denganmu!',
      },
    ],
  },
  {
    title: 'Penukaran & Pengembalian',
    items: [
      {
        question: 'Apakah bisa tukar/retur produk?',
        answer: 'Kami menerima penukaran dan pengembalian dengan ketentuan:\n\n• **Batas waktu:** Maksimal **7 hari** setelah produk diterima\n• **Kondisi produk:** Belum dibuka, segel masih utuh\n• **Produk cacat/rusak:** Langsung hubungi CS dengan foto bukti, kami akan ganti tanpa biaya tambahan\n\n**Tidak bisa ditukar/retur:**\n• Produk yang sudah dibuka segelnya\n• Produk sample/tester\n• Produk promo/diskon khusus (kecuali cacat)',
      },
      {
        question: 'Bagaimana proses retur?',
        answer: 'Proses retur sangat mudah:\n\n1. Hubungi CS via WhatsApp dengan nomor pesanan dan alasan retur\n2. Tim CS akan verifikasi dan memberikan alamat pengiriman retur\n3. Kirim produk dengan packing aman (ongkir retur ditanggung pembeli, kecuali produk cacat)\n4. Setelah produk diterima dan dicek, **refund diproses dalam 3–5 hari kerja**\n\nRefund akan dikembalikan ke metode pembayaran asal.',
      },
    ],
  },
  {
    title: 'Akun & Lainnya',
    items: [
      {
        question: 'Bagaimana cara menghubungi customer service?',
        answer: 'Kamu bisa menghubungi tim CS Mykonos melalui:\n\n• **WhatsApp:** 0812-XXXX-XXXX (respon tercepat)\n• **Email:** cs@mykonos.id\n• **Instagram DM:** @mykonos.id\n\n**Jam operasional CS:**\n• Senin–Jumat: 09:00–18:00 WIB\n• Sabtu: 09:00–15:00 WIB\n• Minggu & tanggal merah: Libur',
      },
      {
        question: 'Apakah ada program loyalty atau membership?',
        answer: 'Ya! Kami memiliki program **Mykonos Club** yang memberikan benefit eksklusif:\n\n• **Akumulasi poin** dari setiap pembelian (1 poin per Rp 10.000)\n• **Early access** ke koleksi baru dan limited edition\n• **Diskon ulang tahun** 15%\n• **Free sample** untuk setiap pembelian di atas Rp 500.000\n\nOtomatis menjadi member setelah membuat akun di website kami.',
      },
      {
        question: 'Apakah data pribadi saya aman?',
        answer: 'Keamanan data pelanggan adalah prioritas kami. Kami menerapkan:\n\n• **Enkripsi SSL** untuk semua transaksi\n• **Tidak menyimpan** data kartu kredit secara langsung\n• **Tidak menjual** data pribadi ke pihak ketiga\n• Kebijakan privasi sesuai regulasi yang berlaku di Indonesia\n\nBaca selengkapnya di halaman **Kebijakan Privasi** kami.',
      },
    ],
  },
]

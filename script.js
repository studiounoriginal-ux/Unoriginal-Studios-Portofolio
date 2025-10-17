// Fungsi untuk menangani animasi fade-in saat scroll

document.addEventListener("DOMContentLoaded", function() {
    
    // Fungsionalitas Hamburger Menu
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a'); // Ambil semua tautan di menu

    function toggleMenu() {
        mobileMenu.classList.toggle('menu-open');
        hamburgerBtn.classList.toggle('is-active');
        // Toggle class 'overflow-hidden' pada body untuk mencegah scrolling saat menu terbuka
        document.body.classList.toggle('overflow-hidden'); 
    }
    
    // Event listener untuk tombol hamburger
    hamburgerBtn.addEventListener('click', toggleMenu);

    // Event listener agar menu tertutup saat tautan diklik (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('menu-open')) {
                toggleMenu();
            }
        });
    });
    
    // 1. Temukan semua elemen yang ingin dianimasikan
    // Di sini kita menargetkan semua item di galeri 'works'
    const animatedItems = document.querySelectorAll('.work-item');

    // 2. Buat "Observer"
    // Intersection Observer adalah API modern di browser untuk mendeteksi
    // kapan sebuah elemen masuk atau keluar dari layar.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // entry.isIntersecting akan bernilai 'true' jika elemen terlihat di layar
            if (entry.isIntersecting) {
                // Tambahkan class 'visible' ke elemen yang terlihat
                entry.target.classList.add('visible');
                
                // (Opsional) Hentikan pengamatan setelah animasi berjalan sekali
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Animasi akan terpicu saat 10% dari elemen terlihat
    });

    // 3. Terapkan Observer ke setiap elemen yang ingin dianimasikan
    animatedItems.forEach(item => {
        observer.observe(item);
    });

});

document.addEventListener("DOMContentLoaded", function() {
    
    // Logika animasi Intersection Observer (biarkan tetap ada)
    const animatedItems = document.querySelectorAll('.work-item');
    // ... (kode Intersection Observer yang lama) ...
    animatedItems.forEach(item => {
        observer.observe(item);
    });

    // -------------------------------------------------------------
    // LOGIKA MUDAH EDIT NEWS DENGAN DATA JSON
    // -------------------------------------------------------------

    // 1. DATA BERITA (Array JSON yang MUDAH DIEDIT)
    // Untuk mengedit/menambah berita, CUKUP UBAH ARRAY INI.
    const newsData = [
        {
            date: "2025.10.15",
            category: "Karya",
            heading: 'Anime "Judul Fantasi" Diumumkan, Tayang Musim Semi 2026!',
            link: "#" // Ganti dengan link detail berita jika ada
        },
        {
            date: "2025.09.28",
            category: "Event",
            heading: "STUDIOANDA Hadir di Event Komik Internasional bulan November",
            link: "#"
        },
        {
            date: "2025.09.05",
            category: "Karya",
            heading: "Trailer Resmi Proyek A dirilis!",
            link: "#"
        },
        {
            date: "2025.08.20",
            category: "Perusahaan",
            heading: "STUDIOANDA Membuka Divisi Produksi CGI Baru di Surabaya",
            link: "#"
        },
        // TAMBAHKAN BERITA BARU DI BAWAH INI:
        {
            date: "2025.07.01",
            category: "Perusahaan",
            heading: "Rekrutmen Animator 3D Dibuka untuk Proyek Baru",
            link: "#"
        }
    ];

    // 2. FUNGSI UNTUK MEMUAT BERITA
    function loadNews() {
        const container = document.getElementById('news-list-container');
        if (!container) return; // Hentikan jika ini bukan halaman news

        newsData.forEach(item => {
            // Menentukan class untuk warna kategori
            let categoryClass;
            switch (item.category) {
                case 'Karya':
                    categoryClass = 'category-works';
                    break;
                case 'Event':
                    categoryClass = 'category-event';
                    break;
                case 'Perusahaan':
                    categoryClass = 'category-company';
                    break;
                default:
                    categoryClass = '';
            }

            // Membuat elemen HTML menggunakan Template String (backticks `)
            const newsItemHTML = `
                <a href="${item.link}" class="news-item">
                    <div class="news-date">${item.date}</div>
                    <div class="news-category ${categoryClass}">${item.category}</div>
                    <h3 class="news-heading">${item.heading}</h3>
                </a>
            `;

            // Masukkan HTML ke dalam kontainer
            container.insertAdjacentHTML('beforeend', newsItemHTML);
        });
    }

    // 3. Panggil fungsi saat halaman News dimuat
    loadNews();

});


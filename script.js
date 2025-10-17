document.addEventListener("DOMContentLoaded", function() {
    
    // =========================================================
    // 1. FUNGSIONALITAS HAMBURGER MENU (untuk Mobile)
    // =========================================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

    function toggleMenu() {
        if (mobileMenu && hamburgerBtn) {
            mobileMenu.classList.toggle('menu-open');
            hamburgerBtn.classList.toggle('is-active');
            // Mencegah scrolling pada body saat menu terbuka
            document.body.classList.toggle('overflow-hidden'); 
        }
    }
    
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMenu);
    }

    // Menutup menu saat link di dalamnya diklik
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && mobileMenu.classList.contains('menu-open')) {
                toggleMenu();
            }
        });
    });


    // =========================================================
    // 2. LOGIKA MEMUAT BERITA DARI JSON (Untuk page news.html)
    // =========================================================

    // DATA BERITA (Edit array ini untuk menambah/mengubah berita)
    const newsData = [
        {
            date: "2025.10.17",
            category: "Karya",
            heading: 'Proyek Baru: Anime "Prajurit Kosmik" Diumumkan!',
            link: "#" 
        },
        {
            date: "2025.10.15",
            category: "Karya",
            heading: 'Anime "Judul Fantasi" Diumumkan, Tayang Musim Semi 2026!',
            link: "#" 
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
        {
            date: "2025.07.01",
            category: "Perusahaan",
            heading: "Rekrutmen Animator 3D Dibuka untuk Proyek Baru",
            link: "#"
        }
    ];

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

    // Panggil fungsi untuk memuat berita
    loadNews();


    // =========================================================
    // 3. LOGIKA ANIMASI FADE-IN SAAT SCROLL (Intersection Observer)
    // =========================================================

    // Temukan semua elemen yang ingin dianimasikan (item portofolio)
    const animatedItems = document.querySelectorAll('.work-item');

    if (animatedItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Hentikan pengamatan setelah animasi berjalan sekali
                    observer.unobserve(entry.target);
                }
            });
        }, {
            // Animasi terpicu saat 10% dari elemen terlihat
            threshold: 0.1 
        });

        // Terapkan Observer ke setiap elemen
        animatedItems.forEach(item => {
            observer.observe(item);
        });
    }

});

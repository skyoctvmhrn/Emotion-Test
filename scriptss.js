document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const resultElement = document.getElementById('result');
    const foodRecommendationElement = document.getElementById('foodRecommendations');
    let currentSlide = 0;
    let score = 0;

    const positiveFoods = [
        {
            name: "Jus Kode",
            img: "/positive/jus.jpg",
            address: "Jalan Margonda Raya No.520A, RT 004/RW 005, Depok"
        },
        {
            name: "Salad",
            img: "/positive/salad.jpg",
            address: "Ikigai Fitness Dmall, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423"
        },
        {
            name: "Gado-Gado",
            img: "/positive/gado-gado.jpg",
            address: "Jl. Mawar I No.12, RT.02/RW.2, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16424"
        },
        {
            name: "Gellato",
            img: "/positive/gelato.jpg",
            address: " Jl. Kukusan Raya No.21 Blok D, RT.2/RW.6"
        },
        {
            name: "Ayam Bakar",
            img: "/positive/ayam.jpg",
            address: " Jl. Pa'maan Jl. Klp. Dua Raya No.009, RT.002, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16951"
        },
        {
            name: "Pisang Nugget",
            img: "/positive/pisangnugget.jpg",
            address: "jl. masjid ratujaya rt06/05 no.11, Ratu Jaya, Kec. Cipayung, Kota Depok, Jawa Barat 16436"
        },
        {
            name: "Tempe Mendoan",
            img: "/positive/tempe.jpg",
            address: "Jl. Raya Abdul Gani No.17, Kalibaru, Kec. Cilodong, Kota Depok, Jawa Barat 16413"
        },
        {
            name: "smoothies buah",
            img: "/positive/smoothies.jpg",
            address: "Jl.Masjid Nurul Huda Rt.1/Rw. 3 Tirtajaya Kec.Sukmajaya Kota Depok"
        },
        {
            name: "Yogurth",
            img: "/positive/yogurth.jpg",
            address: " Margocity, Jl. Margonda No.358, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423"
        },
        {
            name: "Granola",
            img: "/positive/granola.jpg",
            address: "Indomaret/ Alfamart/Hari-Hari/ Hypermart/ Tiptop/ Aeon/ Transmart"
        },
        {
            name: "Capcay",
            img: "/positive/capcay.jpg",
            address: " Jl. Akses UI No.27, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451"
        },
        {
            name: "Alpukat Buah",
            img: "/positive/alpukat.jpg",
            address: "Jl. H. Nirun, RT.001/RW001/RW.No.22, Kalibaru, Kec. Cilodong, Kota Depok, Jawa Barat 16473"
        },
        {
            name: "Pecak Ikan",
            img: "/positive/pecak.jpg",
            address: "Jl. H. Anang No.7, Radar Auri, Kel. Mekarsari, Kec. Cimanggis, Kota Depok, Jawa Barat"
        },
    ];

    const negativeFoods = [
        {
            name: "Ice Cream Cooler City",
            img: "/negativ/icecream.jpg",
            address: " Jl. Bahagia Raya IV No.16, Abadijaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 1641"
        },
        {
            name: "Nasi Padang",
            img: "/negativ/naspad.jpg",
            address: "Jl. Kemakmuran Raya No.109, Mekar Jaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16411"
        },
        {
            name: "Nasi Goreng Gila",
            img: "/negativ/nasgor.jpg",
            address: "Jl. Raya Abdul Gani No.10A, Kalibaru, Kec. Cilodong, Kota Depok, Jawa Barat 16413"
        },
        {
            name: "Mie Goreng",
            img: "/negativ/miegoreng.jpg",
            address: "Jl. Raya Abdul Gani No.10A, Kalibaru, Kec. Cilodong, Kota Depok, Jawa Barat 16413"
        },
        {
            name: "Kwetiaw Goreng",
            img: "/negativ/kwetiaw.jpg",
            address: "Jl. Raya Abdul Gani No.10A, Kalibaru, Kec. Cilodong, Kota Depok, Jawa Barat 16413"
        },
        {
            name: "Roti Bakar",
            img: "/negativ/rotibakar.jpg",
            address: "Jl. Margonda No.2 No.386, RT.2/RW.12, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16424"
        },
        {
            name: "Kentang Goreng",
            img: "/negativ/kentang.jpg",
            address: "Kentang Goreng Lesehan, Jl. Pendowo, Limo, Kec. Limo, Kota Depok, Jawa Barat 16515"
        },
        {
            name: "Burger",
            img: "/negativ/burger.jpg",
            address: "Jl. Tole Iskandar No.6, Sukamaju, Kec. Cilodong, Kota Depok, Jawa Barat 16415"
        },
        {
            name: "Kebab",
            img: "/negativ/kebab.jpg",
            address: "Jl. Akses UI No.57, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16424"
        },
        {
            name: "Shabu & Grill OMG",
            img: "/negativ/shabu.jpg",
            address: "Jl. Margonda No.27, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424"
        },
        {
            name: "Mochi",
            img: "/negativ/mochi.jpg",
            address: " ITC Depok, Samping Terminal Terpadu Gedoran Depok, Jl. Margonda No.48, Depok, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16431"
        },
        {
            name: "Baso Aci",
            img: "/negativ/basoaci.jpg",
            address: "Jl. Proklamasi No.10 Blok A, RT.1/RW.8, Mekar Jaya, Sukmajaya, Depok City, West Java 16411"
        },
        {
            name: "Seblak",
            img: "/negativ/seblak.jpg",
            address: " Jl. Proklamasi No.10 Blok A, RT.1/RW.8, Mekar Jaya, Sukmajaya, Depok City, West Java 16411"
        },
        {
            name: "Pisang Keju Batam",
            img: "/negativ/pisangkeju.jpg",
            address: "Jl. Raya KSU No.16, (Depan Kantor PLN) Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412, Indonesia"
        },
        {
            name: "seafood Saus Padang",
            img: "/negativ/seafood.jpg",
            address: "Jalan Cendana Kampung Pulo, Jl. Raya Cipayung, RT.03/RW.08, Cipayung Jaya, Kec. Cipayung, Kota Depok, Jawa Barat 16437"
        },
      
    ];

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        slides[n].classList.add('active');
        currentSlide = n;
    }

    function nextSlide(points) {
        if (points === 2) {
            score++; // Increase score for positive answers
        } else if (points === 1) {
            score--; // Decrease score for negative answers
        }
        if (currentSlide < slides.length - 2) {
            showSlide(currentSlide + 1);
        } else {
            showResults();
        }
    }

    function showResults() {
        let resultText;

        if (score > 0) {
            resultText = `Total Score: ${score}\n\nEmosi Anda cenderung Positif!`;
            displayFoodRecommendations(positiveFoods);
        } else {
            resultText = `Total Score: ${score}\n\nEmosi Anda cenderung Negatif!`;
            displayFoodRecommendations(negativeFoods);
        }

        resultElement.innerText = resultText;
        showSlide(slides.length - 1);
    }

    function displayFoodRecommendations(foods) {
        foodRecommendationElement.innerHTML = '';
        foods.forEach(food => {
            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');
            foodItem.innerHTML = `
                <img src="${food.img}" alt="${food.name}">
                <div class="food-info">
                    <h4>${food.name}</h4>
                    <p>${food.address}</p>
                </div>
            `;
            foodRecommendationElement.appendChild(foodItem);
        });
    }

    // Add event listener to the "Let's Go" button
    document.querySelector('.start-button').addEventListener('click', () => {
        document.querySelector('.start-button').style.display = "none";
        showSlide(1);
    });

    // Initialize slide navigation
    slides.forEach((slide, index) => {
        const buttons = slide.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const points = parseInt(button.getAttribute('data-points'));
                nextSlide(points);
            });
        });
    });

    // Initial setup: hide all slides except the first one
    slides.forEach((slide, index) => {
        if (index !== 0) slide.classList.add('hidden');
    });
});
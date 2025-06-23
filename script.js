const products = {
    snack: [
      { name: "Arem-arem", image: "Snack/Aremarem.jpeg", price: "2.500" },
      { name: "Bolu kukus", image: "Snack/BoluKukus.jpeg", price: "2.500" },
      { name: "Bolu pisang", image: "Snack/BoluPisang.jpeg", price: "3.000" },
      { name: "Bolu tiwul mini", image: "Snack/BoluTiwulMini.jpeg", price: "2.000" },
      { name: "Brownies kukus ukuran Snack Box", image: "Snack/BrowniesSnackBox.jpeg", price: "2.500" },
      { name: "Burger", image: "Snack/Burger.jpeg", price: "5.000" },
      { name: "Centik Manis", image: "Snack/CentikManis.jpeg", price: "2.500" },
      { name: "Donut", image: "Snack/Donut.jpeg", price: "3.000" },
      { name: "Jasuke (Jagung Susu Kental)", image: "Snack/JaSuKe.jpeg", price: "3.000" },
      { name: "Lemper", image: "Snack/Lemper.jpeg", price: "2.000" },
      { name: "Lumpia Rebung", image: "Snack/LumpiaRebung.jpeg", price: "3.000" },
      { name: "Lumpia Sayur", image: "Snack/LumpiaSayur.jpeg", price: "2.500" },
      { name: "Makaroni Scotel", image: "Snack/MakaroniScotel.jpeg", price: "5.000" },
      { name: "Onde-onde", image: "Snack/OndeOnde.jpeg", price: "2.500" },
      { name: "Pancake Ori", image: "Snack/PancakedgnTopping.jpeg", price: "2.000" },
      { name: "Pancake (w/ Topping)", image: "Snack/PancakeOri.jpeg", price: "5.000" },
      { name: "Pie Buah", image: "Snack/PieBuah.jpeg", price: "3.000" },
      { name: "Pisang Goreng Susu Keju", image: "Snack/PisangGorengSusuKeju.jpeg", price: "5.000" },
      { name: "Pizza Roti Tawar", image: "Snack/PizzaRotiTawar.jpeg", price: "3.000" },
      { name: "Potato Bites", image: "Snack/PotatoBites.jpeg", price: "5.000" },
      { name: "Pudding Buah (Jeruk)", image: "Snack/PuddingBuahJeruk.jpeg", price: "2.500" },
      { name: "Pudding Buah (Susu)", image: "Snack/PuddingBuahSusu.jpeg", price: "2.500" },
      { name: "Pudding Roti Tawar", image: "Snack/PuddingRotiTawar.jpeg", price: "5.000" },
      { name: "Pudding Susu (1 rasa)", image: "Snack/PuddingSusu1rasa.jpeg", price: "2.500" },
      { name: "Pudding Susu Coklat", image: "Snack/PuddingSusuCoklat.jpeg", price: "2.500" },
      { name: "Pudding Susu Stroberi", image: "Snack/PuddingSusuStroberi.jpeg", price: "2.500" },
      { name: "Putu Ayu", image: "Snack/PutuAyu.jpeg", price: "2.000" },
      { name: "Risol Mayo", image: "Snack/RisolMayo.jpeg", price: "2.500" },
      { name: "Salad Buah", image: "Snack/SaladBuah.jpeg", price: "15.000 - 30.000" },
      { name: "Senteleng", image: "Snack/Senteleng.jpeg", price: "2.000" },
      { name: "Tahu Bacem", image: "Snack/TahuBacem.jpeg", price: "2.000" },
      { name: "Tahu Bakso aneka Topping", image: "Snack/TahuBaksoTopping.jpeg", price: "15.000 (1 pack, isi 7)" },
      { name: "Wingko", image: "Snack/Wingko.jpeg", price: "2.500" }
    ],
    kue: [
      { name: "Bolu tiwul", image: "Kue/BoluTiwulGede.jpeg", price: "25.000 (15cm), 35.000 (20cm)" },
      { name: "Brownies kukus", image: "Kue/Brownies.jpeg", price: "15.000 - 30.000" },
      { name: "Nagasari", image: "Kue/Nagasari.jpeg", price: "2.500" },
      { name: "Nagasari daun", image: "Kue/NagasariDaun.jpeg", price: "2.500" },
      { name: "Nagasari lapis sakura", image: "Kue/NagasariSakura.jpeg", price: "2.500" }
    ],
    kuekering: [
      { name: "Castengel", image: "KueKering/Castengel.jpeg", price: "65.000" },
      { name: "Coklat kurma", image: "KueKering/CoklatKurma.jpeg", price: "60.000" },
      { name: "Cookies kacang", image: "KueKering/CookiesKacang.jpeg", price: "60.000" },
      { name: "Cookies palem", image: "KueKering/CookiesPalem.jpeg", price: "50.000" },
      { name: "Nastar", image: "KueKering/Nastar.jpeg", price: "65.000" },
      { name: "Nastar keranjang", image: "KueKering/NastarKeranjang.jpeg", price: "65.000" },
      { name: "Puteri salju", image: "KueKering/PutriSalju.jpeg", price: "65.000" }
    ],
    katering: [
      { name: "Bento #1", image: "Katering/Bento_1.jpeg", price: "18.000" },
      { name: "Bento #2", image: "Katering/Bento_2.jpeg", price: "18.000" },
      { name: "Bento #3", image: "Katering/Bento_3.jpeg", price: "18.000" },
      { name: "Bento #4", image: "Katering/Bento_4.jpeg", price: "20.000" },
      { name: "Gado-gado", image: "Katering/GadoGado.jpeg", price: "13.000" },
      { name: "Katering #1", image: "Katering/Katering_1.jpeg", price: "10.000" },
      { name: "Katering #2", image: "Katering/Katering_2.jpeg", price: "18.000" },
      { name: "Katering #3", image: "Katering/Katering_3.jpeg", price: "20.000" },
      { name: "Katering #4", image: "Katering/Katering_4.jpeg", price: "25.000" },
      { name: "Katering #4 (+ Krupuk & Pisang)", image: "Katering/Katering_4_dgnKrupukPisang.jpeg", price: "25.000" },
      { name: "Nasi Kuning", image: "Katering/NasiKuning.jpeg", price: "10.000" },
      { name: "Nasi Tumpeng Gudangan", image: "Katering/NasiTumpengGudangan.jpeg", price: "250.000" },
      { name: "Nasi Tumpeng Ingkung Gudangan", image: "Katering/NasiTumpengIngkungGudangan.jpeg", price: "300.000" },
      { name: "Tumpeng Nasi Kuning #1", image: "Katering/TumpengNasiKuning_1.jpeg", price: "300.000" },
      { name: "Tumpeng Nasi Kuning #2", image: "Katering/TumpengNasiKuning_2.jpeg", price: "250.000" },
      { name: "Tumpeng Nasi Kuning #3", image: "Katering/TumpengNasiKuning_3.jpeg", price: "150.000" },
      { name: "Tumpeng Nasi Kuning Ingkung Komplit", image: "Katering/TumpengNasiKuningIngkungKomplit.jpeg", price: "500.000" }
    ]
  };
  
  products.all = [
    ...products.snack,
    ...products.kue,
    ...products.kuekering,
    ...products.katering
  ];
  
  const categorySelect = document.getElementById('category');
  const catalogDiv = document.getElementById('catalog');
  const searchInput = document.getElementById('search');
  
  function renderCatalog(items) {
    catalogDiv.innerHTML = '';
    if (items.length === 0) {
      catalogDiv.innerHTML = '<p>No products found.</p>';
      return;
    }
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="product-name">${item.name}</div>
        <div class="product-price">Rp ${item.price}</div>
      `;
      catalogDiv.appendChild(card);
    });
  }
  
  function updateCatalog() {
    const category = categorySelect.value;
    const query = searchInput.value.toLowerCase();
    const list = products[category] || [];
    const filtered = list.filter(p => p.name.toLowerCase().includes(query));
    renderCatalog(filtered);
  }
  
  categorySelect.addEventListener('change', updateCatalog);
  searchInput.addEventListener('input', updateCatalog);
  
  // Initial render
  updateCatalog();
  
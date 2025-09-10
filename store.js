// =======================
// Currency Formatter
// =======================
const fmt = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

// ------------------------
// IMAGE POOLS (15 each)
// ------------------------
const rings = [
  "img/Rings/ring-1.jpg","img/Rings/ring-2.jpg","img/Rings/ring-3.jpg","img/Rings/ring-4.jpg","img/Rings/ring-5.jpg",
  "img/Rings/ring-6.jpg","img/Rings/ring-7.jpg","img/Rings/ring-8.jpg","img/Rings/ring-9.jpg","img/Rings/ring-10.jpg",
  "img/Rings/ring-11.jpg","img/Rings/ring-12.jpg","img/Rings/ring-13.jpg","img/Rings/ring-14.jpg","img/Rings/ring-15.jpg",
];
const necklaces = [
  "img/Necklace/necklace-1.jpg","img/Necklace/necklace-2.jpg","img/Necklace/necklace-3.jpg","img/Necklace/necklace-4.jpg","img/Necklace/necklace-5.jpg",
  "img/Necklace/necklace-6.jpg","img/Necklace/necklace-7.jpg","img/Necklace/necklace-8.jpg","img/Necklace/necklace-9.jpg","img/Necklace/necklace-10.jpg",
  "img/Necklace/necklace-11.jpg","img/Necklace/necklace-12.jpg","img/Necklace/necklace-13.jpg","img/Necklace/necklace-14.jpg","img/Necklace/necklace-15.jpg",
];
const bracelets = [
  "img/Bracelet/bracelet-1.jpg","img/Bracelet/bracelet-2.jpg","img/Bracelet/bracelet-3.jpg","img/Bracelet/bracelet-4.jpg","img/Bracelet/bracelet-5.jpg",
  "img/Bracelet/bracelet-6.jpg","img/Bracelet/bracelet-7.jpg","img/Bracelet/bracelet-8.jpg","img/Bracelet/bracelet-9.jpg","img/Bracelet/bracelet-10.jpg",
  "img/Bracelet/bracelet-11.jpg","img/Bracelet/bracelet-12.jpg","img/Bracelet/bracelet-13.jpg","img/Bracelet/bracelet-14.jpg","img/Bracelet/bracelet-15.jpg",
];
const earrings = [
  "img/Earrings/earrings-1.jpg","img/Earrings/earrings-2.jpg","img/Earrings/earrings-3.jpg","img/Earrings/earrings-4.jpg","img/Earrings/earrings-5.jpg",
  "img/Earrings/earrings-6.jpg","img/Earrings/earrings-7.jpg","img/Earrings/earrings-8.jpg","img/Earrings/earrings-9.jpg","img/Earrings/earrings-10.jpg",
  "img/Earrings/earrings-11.jpg","img/Earrings/earrings-12.jpg","img/Earrings/earrings-13.jpg","img/Earrings/earrings-14.jpg","img/Earrings/earrings-15.jpg",
];
const watches = [
  "img/Watch/watch-1.jpg","img/Watch/watch-2.jpg","img/Watch/watch-3.jpg","img/Watch/watch-4.jpg","img/Watch/watch-5.jpg",
  "img/Watch/watch-6.jpg","img/Watch/watch-7.jpg","img/Watch/watch-8.jpg","img/Watch/watch-9.jpg","img/Watch/watch-10.jpg",
  "img/Watch/watch-11.jpg","img/Watch/watch-12.jpg","img/Watch/watch-13.jpg","img/Watch/watch-14.jpg","img/Watch/watch-15.jpg",
];

// ------------------------
// UNIQUE NAMES + LUXURY PRICES
// ------------------------
const ringNames = [
  "Emerald Whisper Ring","Celestial Halo Ring","Moonstone Crown","Aurora Diamond Ring","Velour Ruby Ring",
  "Eternal Promise Ring","Opal Stardust Ring","Serenity Sapphire Ring","Crimson Blaze Ring","Radiant Dawn Ring",
  "Twilight Eternity Ring","Mystic Pearl Ring","Solstice Gold Band","Ivy Charm Ring","Infinite Grace Ring"
];
const necklaceNames = [
  "Golden Horizon Necklace","Velvet Nightfall Necklace","Elysian Pearl Strand","Celestial Aurora Necklace","Ocean’s Heart Necklace",
  "Moonlit Ivy Necklace","Starlight Whisper Necklace","Dawnfire Gem Necklace","Royal Cascade Necklace","Opaline Elegance Necklace",
  "Mystic Lagoon Necklace","Crimson Dawn Necklace","Emerald Bloom Necklace","Gilded Serpent Necklace","Infinite Charm Necklace"
];
const braceletNames = [
  "Ivory Charm Bracelet","Eternal Grace Cuff","Aurora Bloom Bracelet","Moonlit Pearl Bangle","Velvet Chain Bracelet",
  "Golden Dawn Cuff","Ocean Breeze Bracelet","Celestial Charm Bracelet","Crimson Ivy Bracelet","Radiant Whisper Bracelet",
  "Sapphire Bloom Bracelet","Pearl Cascade Bracelet","Elysian Knot Bracelet","Infinite Glow Bracelet","Twilight Charm Bracelet"
];
const earringNames = [
  "Emerald Whisper Earrings","Celestial Hoop Earrings","Moonlight Drop Earrings","Aurora Pearl Studs","Velvet Ruby Drops",
  "Eternal Charm Earrings","Opal Halo Earrings","Serenity Sapphire Earrings","Crimson Flame Studs","Radiant Cascade Earrings",
  "Twilight Elegance Earrings","Mystic Pearl Earrings","Solstice Gold Earrings","Ivy Bloom Earrings","Infinite Grace Earrings"
];
const watchNames = [
  "Eternal Legacy Watch","Celestial Timepiece","Aurora Luxe Watch","Velvet Horizon Watch","Moonlit Elegance Watch",
  "Royal Cascade Watch","Opaline Masterpiece Watch","Starlight Chronograph","Golden Era Watch","Twilight Prestige Watch",
  "Infinite Valor Watch","Emerald Crown Watch","Crimson Monarch Watch","Sapphire Horizon Watch","Diamond Eternity Watch"
];

// Luxury price ranges per category
function luxuryPrice(category) {
  const ranges = {
    rings: [1200, 5000],
    necklaces: [2000, 8000],
    bracelets: [800, 3500],
    earrings: [700, 2500],
    watches: [5000, 25000]
  };
  const [min, max] = ranges[category];
  return Math.floor(Math.random() * (max - min) + min);
}

// ------------------------
// BUILD PRODUCTS
// ------------------------
const products = [];
const categories = [
  { key: "rings", imgs: rings, names: ringNames },
  { key: "necklaces", imgs: necklaces, names: necklaceNames },
  { key: "bracelets", imgs: bracelets, names: braceletNames },
  { key: "earrings", imgs: earrings, names: earringNames },
  { key: "watches", imgs: watches, names: watchNames }
];

categories.forEach(cat => {
  for (let i = 0; i < 15; i++) {
    products.push({
      id: `${cat.key}-${i+1}`,
      name: cat.names[i],
      price: luxuryPrice(cat.key),
      category: cat.key,
      img: cat.imgs[i]
    });
  }
});

// ------------------------
// STATE + ELEMENTS
// ------------------------
let state = {
  filter: "all",
  cart: JSON.parse(localStorage.getItem("cart") || "[]")
};

const els = {
  grid: document.getElementById("grid"),
  navLinks: document.querySelectorAll(".nav-link"),
  cartCount: document.getElementById("cartCount"),
  cartItems: document.getElementById("cartItems"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  checkoutBtn: document.getElementById("checkoutBtn"),
  year: document.getElementById("year"),
  searchToggle: document.getElementById("searchToggle"),
  searchInput: document.getElementById("searchInput")
};

// ------------------------
// RENDER PRODUCTS
// ------------------------
function renderGrid(list = null) {
  if (!els.grid) return;
  const filtered = list || (state.filter === "all" ? products : products.filter(p => p.category === state.filter));
  els.grid.innerHTML = filtered.map(p => `
    <article class="card">
      <div class="card-media"><img src="${p.img}" alt="${p.name}"></div>
      <div class="card-body">
        <div class="meta">
          <h3 class="title">${p.name}</h3>
          <span class="price">${fmt.format(p.price)}</span>
        </div>
        <button class="add-btn" data-add="${p.id}">Add to cart</button>
      </div>
    </article>
  `).join("");
}

// ------------------------
// CART RENDERING
// ------------------------
function renderCart() {
  const subtotal = state.cart.reduce((s, it) => {
    const prod = products.find(p => p.id === it.id);
    return s + (prod ? prod.price * it.qty : 0);
  }, 0);
  if (els.cartSubtotal) els.cartSubtotal.textContent = fmt.format(subtotal);

  const count = state.cart.reduce((s, it) => s + it.qty, 0);
  if (els.cartCount) els.cartCount.textContent = count;

  if (els.cartItems) {
    els.cartItems.innerHTML = state.cart.length ? state.cart.map(it => {
      const prod = products.find(p => p.id === it.id) || {};
      return `
        <div class="cart-item">
          <img src="${prod.img || ''}" alt="${prod.name || ''}">
          <div>
            <h6>${prod.name || 'Item'}</h6>
            <div class="line">${fmt.format(prod.price || 0)} × ${it.qty}</div>
            <div class="line">Line total: ${fmt.format((prod.price || 0) * it.qty)}</div>
            <div style="margin-top:6px;display:flex;gap:6px">
              <button class="icon-btn" data-dec="${it.id}">−</button>
              <button class="icon-btn" data-inc="${it.id}">+</button>
              <button class="icon-btn" data-rem="${it.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('') : '<p style="padding:10px;color:#6b6b6b">Your cart is empty.</p>';
  }
}

function saveCart() { localStorage.setItem("cart", JSON.stringify(state.cart)); }
function addToCart(id) { const prod = products.find(p => p.id === id); if (!prod) return;
  const existing = state.cart.find(c => c.id === id);
  if (existing) existing.qty += 1; else state.cart.push({ id, qty: 1 });
  saveCart(); renderCart(); }
function inc(id) { const item = state.cart.find(i => i.id === id); if (item) { item.qty++; saveCart(); renderCart(); } }
function dec(id) { const item = state.cart.find(i => i.id === id); if (!item) return; item.qty = Math.max(0, item.qty - 1); if (item.qty === 0) state.cart = state.cart.filter(i => i.id !== id); saveCart(); renderCart(); }
function rem(id) { state.cart = state.cart.filter(i => i.id !== id); saveCart(); renderCart(); }

// ------------------------
// CLICK HANDLERS
// ------------------------
document.addEventListener("click", (e) => {
  const add = e.target.dataset.add;
  const incId = e.target.dataset.inc;
  const decId = e.target.dataset.dec;
  const remId = e.target.dataset.rem;
  const filter = e.target.dataset.filter;

  if (filter) {
    state.filter = filter;
    document.querySelectorAll(".nav-link").forEach(n => n.classList.toggle("active", n.dataset.filter === state.filter));
    renderGrid();
  }
  if (add) addToCart(add);
  if (incId) inc(incId);
  if (decId) dec(decId);
  if (remId) rem(remId);
});

// ------------------------
// SEARCH FEATURE
// ------------------------
if (els.searchToggle && els.searchInput) {
  els.searchToggle.addEventListener("click", () => {
    els.searchInput.classList.toggle("show");
    if (els.searchInput.classList.contains("show")) {
      els.searchInput.focus();
    } else {
      renderGrid(); // reset
    }
  });

  // Live filter on typing
  els.searchInput.addEventListener("input", () => {
    const query = els.searchInput.value.toLowerCase();

    // Match by product name OR category
    const list = products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query)
    );

    renderGrid(list);
  });

  // Scroll to products on Enter
  els.searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.querySelector("#products").scrollIntoView({ 
        behavior: "smooth" 
      });
    }
  });
}

//Search toggle for mobile
const searchToggle = document.getElementById("searchToggle");
const searchInput = document.getElementById("searchInput");

if (searchToggle && searchInput) {
  searchToggle.addEventListener("click", () => {
    searchInput.classList.toggle("active");
    if (searchInput.classList.contains("active")) {
      searchInput.focus();
    }
  });
}

// ------------------------
// INIT
// ------------------------
if (els.checkoutBtn) els.checkoutBtn.addEventListener("click", () => { window.location.href = "payment.html"; });
if (els.year) els.year.textContent = new Date().getFullYear();

renderGrid();
renderCart();

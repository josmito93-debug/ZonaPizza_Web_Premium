
const menuData = {
  entradas: {
    label: 'Entradas y ensaladas',
    image: 'assets/lemon-drink.jpg',
    items: [
      {name:'Antipasto', price:15, desc:'Entrada italiana para compartir.'},
      {name:'Bruschetta', price:8, desc:'Pan tostado italiano con topping.'},
      {name:'Rotolo de Prosciutto', price:16, desc:'Prosciutto enrollado, ideal para abrir el apetito.'},
      {name:'Canapes', price:8, desc:'Canapés ligeros y elegantes.'},
      {name:'Carpaccio de Lomito', price:15, desc:'Carpaccio de lomito fresco.'},
      {name:'Carpaccio de Salmón', price:18, desc:'Láminas de salmón estilo carpaccio.'},
      {name:'Ensalada Cesar', price:8, desc:'César clásica.'},
      {name:'Ensalada Cesar con Pollo', price:12, desc:'César con pollo.'},
      {name:'Ensalada Mediterranea', price:15, desc:'Ensalada fresca estilo mediterráneo.'},
      {name:'Ensalada Iberica', price:18, desc:'Inspiración ibérica.'},
      {name:'Ensalada Dolce Creazione', price:18, desc:'Ensalada especial de la casa.'}
    ]
  },
  especiales: {
    label: 'Platos especiales',
    image: 'assets/baked-cutlet.jpg',
    items: [
      {name:'Cartoccio de Lomito', price:18, desc:'Lomito en preparación especial italiana.'},
      {name:'Cartoccio de Mariscos', price:26, desc:'Mariscos en estilo cartoccio.'},
      {name:'Medallones de Pollo en Salsa de Champiñones', price:16, desc:'Pollo con salsa cremosa de champiñones.'},
      {name:'Pasta Aurora con Pollo', price:14, desc:'Pasta en salsa aurora con pollo.'},
      {name:'Salmone al Pistacchio', price:22, desc:'Salmón con toque de pistacho.'},
      {name:'Pasta Alfredo con Pollo', price:14, desc:'Clásica pasta alfredo con pollo.'},
      {name:'Milanesa de Pollo', price:14, desc:'Milanesa de pollo italiana.'},
      {name:'Pasta Calamarata', price:22, desc:'Pasta especial de la casa.'},
      {name:'Pasta Boscaiola con Pollo', price:14, desc:'Pasta boscaiola con pollo.'},
      {name:'Pasta de Camarones', price:18, desc:'Pasta con camarones.'},
      {name:'Frutti di Mare', price:26, desc:'Pasta / plato de frutos del mar.'},
      {name:'Cotoletta de Pollo', price:16.5, desc:'Corte empanizado estilo italiano.'},
      {name:'Gnocci de Platano', price:12, desc:'Ñoquis de plátano.'},
      {name:'Carbonara', price:12, desc:'Clásica carbonara.'},
      {name:'Tempura de Mariscos al Limoncello', price:24, desc:'Mariscos en tempura con toque cítrico.'}
    ]
  },
  pastas: {
    label: 'Pastas',
    image: 'assets/burrata-pasta.jpg',
    items: [
      {name:'Bologna', price:10, desc:'Pasta a elección.', pasta:true},
      {name:'Pesto', price:10, desc:'Con salsa pesto.', pasta:true},
      {name:'Fungi e Pepe', price:12, desc:'Con hongos y pimienta.', pasta:true},
      {name:'Macarrones con Queso', price:10, desc:'Pasta con queso.', pasta:true},
      {name:'Pasticho de Berenjena', price:10, desc:'Pasticho con berenjena.'},
      {name:'Amatriciana', price:10, desc:'Salsa amatriciana.', pasta:true},
      {name:'Putanesca', price:12, desc:'Clásica putanesca.', pasta:true},
      {name:'Granjera', price:12, desc:'Estilo granjera.', pasta:true},
      {name:'Pasticho', price:8, desc:'Pasticho tradicional.'},
      {name:'Ravioles', price:12, desc:'Ravioles italianos.'},
      {name:'Pasta al Olio', price:10, desc:'Pasta al aceite de oliva.', pasta:true}
    ],
    pastaTypes:['Plumita','Macarron','Linguini','Fetuccini'],
    glutenFree:{label:'Pasta sin gluten', price:3}
  },
  pizzas: {
    label: 'Pizzas',
    image: 'assets/prosciutto-pizza.jpg',
    sizes:[
      {label:'Pequeña', key:'small'},
      {label:'Mediana', key:'medium'},
      {label:'Grande', key:'large'}
    ],
    items: [
      {name:'Margarita', prices:{small:10, medium:14, large:18}, desc:'Clásica italiana.'},
      {name:'Pepperoni e Salami', prices:{small:12, medium:16, large:20}, desc:'Pepperoni y salami.'},
      {name:'Prosciutto e Formaggio', prices:{small:10, medium:14, large:18}, desc:'Prosciutto y queso.'},
      {name:'Prosciutto e Burratta', prices:{small:18, medium:24, large:30}, desc:'Prosciutto con burrata.'},
      {name:'Prosciutto Cotto', prices:{small:14, medium:20, large:26}, desc:'Prosciutto cocido.'},
      {name:'Pizza Nostra', prices:{small:16, medium:22, large:28}, desc:'Especial de la casa.'},
      {name:'Hawaiana', prices:{small:10, medium:15, large:20}, desc:'Con jamón y piña.'},
      {name:'Charcutera', prices:{small:16, medium:22, large:28}, desc:'Selección de charcutería.'},
      {name:'Capresa', prices:{small:10, medium:15, large:20}, desc:'Inspiración caprese.'},
      {name:'Funghi', prices:{small:12, medium:17, large:21}, desc:'Con hongos.'},
      {name:'Marea Alta', prices:{small:20, medium:26, large:32}, desc:'Especial del mar.'}
    ],
    extras:[
      {name:'Maiz', prices:{small:1, medium:1.5, large:3}},
      {name:'Pollo', prices:{small:1.5, medium:2.5, large:3}},
      {name:'Champiñon', prices:{small:1.5, medium:2, large:3}},
      {name:'Cebolla', prices:{small:1, medium:1.5, large:2}},
      {name:'Aceitunas negras', prices:{small:2, medium:3, large:3.5}},
      {name:'Anchoas', prices:{small:2, medium:3, large:3.5}},
      {name:'Pesto', prices:{small:1.5, medium:2.5, large:3}},
      {name:'Jamon serrano', prices:{small:3, medium:4, large:6}},
      {name:'Tocineta', prices:{small:3, medium:4, large:5}},
      {name:'Salami o Pepperoni', prices:{small:3, medium:4, large:5}}
    ]
  },
  postres: {
    label: 'Postres y bebidas',
    image: 'assets/pasticho-table.jpg',
    items: [
      {name:'Tiramisu', price:8, desc:'Postre italiano clásico.'},
      {name:'Quesillo', price:6, desc:'Postre tradicional.'},
      {name:'Cheesecake de Fresa', price:6, desc:'Cheesecake de fresa.'},
      {name:'Refresco personal', price:2},
      {name:'Jugo natural', price:3.5},
      {name:'Nestea', price:2},
      {name:'Frappes', price:5},
      {name:'Frutos rojos', price:6},
      {name:'Coca Cola Zero', price:2.5},
      {name:'Refresco 1L', price:2.5},
      {name:'Refresco 2L', price:3.5},
      {name:'Café', price:2},
      {name:'Café con leche', price:2.5},
      {name:'Frutos amarillos', price:6},
      {name:'Soda con limón', price:4},
      {name:'Frutos verdes', price:6},
      {name:'Soda italiana', price:5},
      {name:'Merengada', price:4},
      {name:'Soda', price:2},
      {name:'Agua 335ml', price:2},
      {name:'Agua 600ml', price:2.5},
      {name:'Agua con gas', price:2.5}
    ]
  }
};

const upsells = [
  {name:'Tiramisu', price:8},
  {name:'Refresco personal', price:2},
  {name:'Soda italiana', price:5},
  {name:'Bruschetta', price:8}
];

const categoryOrder = Object.keys(menuData);
let currentCategory = categoryOrder[0];
let cart = [];
let currentProduct = null;
const tabsEl = document.getElementById('categoryTabs');
const contentEl = document.getElementById('menuContent');
const cartDrawer = document.getElementById('cartDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');
const upsellEl = document.getElementById('upsellList');
const productModal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const sizeOptions = document.getElementById('sizeOptions');
const extraOptions = document.getElementById('extraOptions');
const addonOptions = document.getElementById('addonOptions');
const modalPrice = document.getElementById('modalPrice');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');

const fmt = (n)=>`${window.ZONAPIZZA_CONFIG.currency}${Number(n).toFixed(2).replace('.00','')}`;

function renderTabs(){
  tabsEl.innerHTML = categoryOrder.map(key=>`<button class="${currentCategory===key?'active':''}" data-category="${key}">${menuData[key].label}</button>`).join('');
}

function cardTemplate(item, categoryKey){
  const category = menuData[categoryKey];
  const price = item.prices ? item.prices.small : item.price;
  const desc = item.desc || 'Producto disponible para ordenar.';
  return `
    <article class="product-card">
      <div class="product-card-image"><img src="${category.image}" alt="${item.name}" /></div>
      <div>
        <div class="product-meta">
          <div>
            <h3>${item.name}</h3>
            <p>${desc}</p>
          </div>
          <div class="price-tag">${item.prices ? `${fmt(item.prices.small)} · ${fmt(item.prices.medium)} · ${fmt(item.prices.large)}` : fmt(price)}</div>
        </div>
        <div class="product-actions">
          <span class="product-note">${item.prices ? 'Elige tamaño y adicionales' : item.pasta ? 'Elige tipo de pasta' : 'Listo para agregar'}</span>
          <button class="btn btn-primary" data-category="${categoryKey}" data-item="${item.name}">Agregar</button>
        </div>
      </div>
    </article>`;
}

function renderCategory(){
  const cat = menuData[currentCategory];
  contentEl.innerHTML = cat.items.map(item=>cardTemplate(item, currentCategory)).join('');
}

function findItem(categoryKey, itemName){
  return menuData[categoryKey].items.find(i=>i.name===itemName);
}

function openProduct(categoryKey, itemName){
  const category = menuData[categoryKey];
  const item = findItem(categoryKey, itemName);
  currentProduct = {categoryKey, category, item};
  modalImage.src = category.image;
  modalCategory.textContent = category.label;
  modalName.textContent = item.name;
  modalDescription.textContent = item.desc || 'Producto disponible para ordenar.';
  sizeOptions.innerHTML = '';
  extraOptions.innerHTML = '';
  addonOptions.innerHTML = '';

  if (item.prices) {
    sizeOptions.innerHTML = `<div class="option-group-title">Tamaño</div><div class="option-list">${category.sizes.map((s,idx)=>`
      <label class="option-chip"><span>${s.label}</span><span>${fmt(item.prices[s.key])} <input ${idx===0?'checked':''} type="radio" name="size" value="${s.key}" /></span></label>`).join('')}</div>`;

    extraOptions.innerHTML = `<div class="option-group-title">Adicionales</div><div class="option-list">${category.extras.map(ex=>`
      <label class="option-chip"><span>${ex.name}</span><span>${fmt(ex.prices.small)} / ${fmt(ex.prices.medium)} / ${fmt(ex.prices.large)} <input type="checkbox" name="extra" value="${ex.name}" /></span></label>`).join('')}</div>`;
  }

  if (item.pasta) {
    addonOptions.innerHTML += `<div class="option-group-title">Tipo de pasta</div><div class="option-list">${category.pastaTypes.map((p,idx)=>`<label class="option-chip"><span>${p}</span><span><input ${idx===0?'checked':''} type="radio" name="pastaType" value="${p}" /></span></label>`).join('')}</div>`;
    addonOptions.innerHTML += `<div class="option-group-title">Opcionales</div><div class="option-list"><label class="option-chip"><span>${category.glutenFree.label}</span><span>${fmt(category.glutenFree.price)} <input type="checkbox" name="glutenFree" value="1" /></span></label></div>`;
  }

  updateModalPrice();
  productModal.showModal();
}

function updateModalPrice(){
  if(!currentProduct) return;
  const {categoryKey, category, item} = currentProduct;
  let total = item.price || 0;
  let sizeKey = 'small';
  const sizeChecked = productModal.querySelector('input[name="size"]:checked');
  if (item.prices && sizeChecked) {
    sizeKey = sizeChecked.value;
    total = item.prices[sizeKey];
    const checkedExtras = [...productModal.querySelectorAll('input[name="extra"]:checked')];
    checkedExtras.forEach(el=>{
      const extra = category.extras.find(ex=>ex.name===el.value);
      total += extra.prices[sizeKey];
    });
  }
  if (item.pasta) {
    const gluten = productModal.querySelector('input[name="glutenFree"]:checked');
    if (gluten) total += category.glutenFree.price;
  }
  modalPrice.textContent = fmt(total);
  return total;
}

function addCurrentProductToCart(){
  if(!currentProduct) return;
  const {category, item, categoryKey} = currentProduct;
  const cartItem = { id: crypto.randomUUID(), name: item.name, qty:1, category: category.label, basePrice:item.price || 0, total:0, details:[] };

  if (item.prices) {
    const sizeKey = productModal.querySelector('input[name="size"]:checked')?.value || 'small';
    const sizeLabel = category.sizes.find(s=>s.key===sizeKey)?.label || 'Pequeña';
    cartItem.sizeKey = sizeKey;
    cartItem.details.push(`Tamaño: ${sizeLabel}`);
    cartItem.basePrice = item.prices[sizeKey];
    const extrasChecked = [...productModal.querySelectorAll('input[name="extra"]:checked')];
    const extras = extrasChecked.map(el=> category.extras.find(ex=>ex.name===el.value)).filter(Boolean);
    cartItem.extras = extras.map(ex=>({name: ex.name, price: ex.prices[sizeKey]}));
    if (cartItem.extras.length) cartItem.details.push(`Extras: ${cartItem.extras.map(ex=>`${ex.name} (${fmt(ex.price)})`).join(', ')}`);
  }
  if (item.pasta) {
    const pastaType = productModal.querySelector('input[name="pastaType"]:checked')?.value;
    if (pastaType) cartItem.details.push(`Tipo de pasta: ${pastaType}`);
    const gluten = productModal.querySelector('input[name="glutenFree"]:checked');
    cartItem.glutenFree = !!gluten;
    if (gluten) {
      cartItem.glutenPrice = category.glutenFree.price;
      cartItem.details.push(`Pasta sin gluten (+${fmt(category.glutenFree.price)})`);
    }
  }
  cartItem.total = getItemUnitTotal(cartItem);
  cart.push(cartItem);
  renderCart();
  productModal.close();
  openCart();
}

function getItemUnitTotal(item){
  let total = item.basePrice || 0;
  (item.extras || []).forEach(ex => total += ex.price);
  if (item.glutenPrice) total += item.glutenPrice;
  return total;
}

function renderCart(){
  if(!cart.length){
    cartItemsEl.innerHTML = `<div class="cart-item"><strong>Tu carrito está vacío.</strong><small>Explora el menú y agrega productos para enviar tu pedido.</small></div>`;
  } else {
    cartItemsEl.innerHTML = cart.map(item=>`
      <div class="cart-item">
        <div class="cart-item-top"><span>${item.name}</span><span>${fmt(getItemUnitTotal(item)*item.qty)}</span></div>
        <small>${item.details.join(' · ') || item.category}</small>
        <div class="cart-item-actions">
          <div class="qty-controls">
            <button data-action="decrease" data-id="${item.id}">−</button>
            <strong>${item.qty}</strong>
            <button data-action="increase" data-id="${item.id}">+</button>
          </div>
          <button class="remove-link" data-action="remove" data-id="${item.id}">Eliminar</button>
        </div>
      </div>`).join('');
  }
  upsellEl.innerHTML = upsells.map(u=>`<div class="upsell-item"><div><strong>${u.name}</strong><div>${fmt(u.price)}</div></div><button data-upsell="${u.name}">Agregar</button></div>`).join('');
  const totalQty = cart.reduce((acc,i)=>acc+i.qty,0);
  const total = cart.reduce((acc,i)=>acc + getItemUnitTotal(i)*i.qty,0);
  cartCountEl.textContent = totalQty;
  cartTotalEl.textContent = fmt(total);
}

function openCart(){ cartDrawer.classList.add('open'); drawerBackdrop.classList.add('open'); cartDrawer.setAttribute('aria-hidden','false'); }
function closeCart(){ cartDrawer.classList.remove('open'); drawerBackdrop.classList.remove('open'); cartDrawer.setAttribute('aria-hidden','true'); }

function updateQty(id, delta){
  const item = cart.find(i=>i.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(i=>i.id!==id);
  renderCart();
}

function addUpsell(name){
  const source = upsells.find(u=>u.name===name);
  if(!source) return;
  const existing = cart.find(i=>i.name===name && !i.details.length);
  if(existing) existing.qty += 1;
  else cart.push({id:crypto.randomUUID(), name:source.name, qty:1, category:'Upsell', basePrice:source.price, total:source.price, details:[]});
  renderCart();
}

function buildWhatsAppMessage(){
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const type = document.getElementById('orderType').value;
  const address = document.getElementById('customerAddress').value.trim();
  const notes = document.getElementById('customerNotes').value.trim();
  const total = cart.reduce((acc,i)=>acc + getItemUnitTotal(i)*i.qty,0);
  const lines = [
    `*Pedido Web - ${window.ZONAPIZZA_CONFIG.restaurantName}*`,
    '',
    `*Cliente:* ${name || 'No indicado'}`,
    `*Teléfono:* ${phone || 'No indicado'}`,
    `*Tipo de pedido:* ${type}`,
    `*Dirección / referencia:* ${address || 'No indicada'}`,
    '',
    '*Detalle del pedido:*'
  ];
  cart.forEach((item, index)=>{
    lines.push(`${index+1}. ${item.qty} x ${item.name} - ${fmt(getItemUnitTotal(item)*item.qty)}`);
    if (item.details.length) lines.push(`   - ${item.details.join(' | ')}`);
  });
  lines.push('');
  lines.push(`*Total:* ${fmt(total)}`);
  if(notes) { lines.push(''); lines.push(`*Notas:* ${notes}`); }
  return lines.join('\n');
}

function sendToWhatsApp(){
  if(!cart.length){ alert('Agrega al menos un producto al carrito.'); return; }
  const message = encodeURIComponent(buildWhatsAppMessage());
  const number = (window.ZONAPIZZA_CONFIG.whatsappNumber || '').replace(/\D/g,'');
  const url = number ? `https://wa.me/${number}?text=${message}` : `https://wa.me/?text=${message}`;
  window.open(url, '_blank');
}

// Events
renderTabs();
renderCategory();
renderCart();

tabsEl.addEventListener('click', (e)=>{
  const btn = e.target.closest('button[data-category]');
  if(!btn) return;
  currentCategory = btn.dataset.category;
  renderTabs();
  renderCategory();
});

contentEl.addEventListener('click', (e)=>{
  const btn = e.target.closest('button[data-category][data-item]');
  if(!btn) return;
  openProduct(btn.dataset.category, btn.dataset.item);
});

document.body.addEventListener('click', (e)=>{
  if (e.target.closest('[data-open-cart]')) openCart();
  const qtyBtn = e.target.closest('[data-action]');
  if (qtyBtn){
    const {action, id} = qtyBtn.dataset;
    if(action==='increase') updateQty(id,1);
    if(action==='decrease') updateQty(id,-1);
    if(action==='remove') { cart = cart.filter(i=>i.id!==id); renderCart(); }
  }
  const upsellBtn = e.target.closest('[data-upsell]');
  if(upsellBtn) addUpsell(upsellBtn.dataset.upsell);
  const artBtn = e.target.closest('[data-lightbox]');
  if(artBtn){ lightboxImage.src = artBtn.dataset.lightbox; lightbox.showModal(); }
});

document.getElementById('closeCart').addEventListener('click', closeCart);
drawerBackdrop.addEventListener('click', closeCart);
document.getElementById('sendWhatsApp').addEventListener('click', sendToWhatsApp);
document.getElementById('addToCartBtn').addEventListener('click', addCurrentProductToCart);
document.getElementById('navToggle').addEventListener('click', ()=> document.getElementById('mobileNav').classList.toggle('open'));
productModal.addEventListener('change', updateModalPrice);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js').catch(()=>{}));
}

// 1. IDE-Style Code Background Generator
const ideBg = document.getElementById('ideBg');
const snippets = [
    'function buildSystem() {\n  const design = "Premium";\n  return install(design);\n}',
    'const portfolio = [\n  { cat: "logo", shape: "circle" },\n  { cat: "signage", type: "install" }\n];',
    '.bataan-creation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}',
    'while (creative) {\n  console.log("Designing the future...");\n  innovate();\n}',
    '<html>\n  <body>\n    <div id="masterpiece"></div>\n  </body>\n</html>'
];

function createCodeBlock() {
    const block = document.createElement('div');
    block.className = 'code-block';
    block.innerText = snippets[Math.floor(Math.random() * snippets.length)];
    block.style.left = Math.random() * 90 + "vw";
    block.style.animationDuration = (Math.random() * 15 + 10) + "s";
    block.style.fontSize = (Math.random() * 5 + 10) + "px";
    ideBg.appendChild(block);
    setTimeout(() => block.remove(), 25000);
}
setInterval(createCodeBlock, 1500);

// 2. Security: One-Time Access Logic
function checkSecurity() {
    ['czarina', 'chinteads'].forEach(sys => {
        if (localStorage.getItem('visit_' + sys)) {
            const btn = document.getElementById('btn-' + sys);
            if(btn) {
                btn.innerText = "Trial Expired";
                btn.disabled = true;
            }
        }
    });
}

function secureRedirect(id, url) {
    localStorage.setItem('visit_' + id, 'true');
    window.open(url, '_blank');
    checkSecurity();
}

// 3. Project Data (Organized & Bimbyas Removed)
const projectData = [
    { title: "Czarina Identity", cat: "logo", img: "assets/business-logo/logo-czarina.png", desc: "Corporate branding designed for authority and premium market presence." },
    { title: "Johnise Mart", cat: "logo", img: "assets/business-logo/logo-johnise-korean-mart.png", desc: "Import retail identity emphasizing freshness and quality." },
    { title: "KIII Accessories", cat: "logo", img: "assets/business-logo/logo-kiii-cellphone-accessories.png", desc: "Sleek, tech-focused branding for modern gadget retail." },
    { title: "Q-DeSalon", cat: "logo", img: "assets/business-logo/logo-qdesalon.png", desc: "Luxury typographic branding for professional beauty services." },
    { title: "Kryzens Logo", cat: "logo", img: "assets/business-logo/logo-kryzens-tipsy-throw.png", desc: "Modern visual branding for creative ventures." },

    { title: "Czarina POS Signage", cat: "signage", img: "assets/signage/sign-czarina-pos.jpg", desc: "Large format outdoor signage designed and installed for high durability." },
    { title: "Johnise Mart Shop", cat: "signage", img: "assets/signage/sign-johnise-korean-mart.jpg", desc: "Custom storefront branding and installation." },
    { title: "Dennis Food Sign", cat: "signage", img: "assets/signage/sign-dennis-food-services.jpg", desc: "Commercial food service signage layout." },
    { title: "RJP Poultry Supply", cat: "signage", img: "assets/signage/sign-rjp-poultry-supply.jpg", desc: "Industrial-grade supply store signage." },
    { title: "Triple Pillagara", cat: "signage", img: "assets/signage/sign-triple-pillagara.jpg", desc: "Custom shopfront signage architectural design." },

    { title: "Ate Ches Snack Menu", cat: "food", img: "assets/food-menu/food-menu-ate-ches-snack-stop.jpg", desc: "Clean and vibrant menu layout for rapid readability." },
    { title: "Buko Juice Menu", cat: "food", img: "assets/food-menu/food-menu-buko-juice.jpg", desc: "Fresh beverage menu graphic design." },
    { title: "Burger Buy1 Take1", cat: "food", img: "assets/food-menu/food-menu-burger-buyone-takeone.jpg", desc: "Marketing-focused promotional menu layout." },

    { title: "Family Portrait", cat: "portrait", img: "assets/portrait/portrait-family.jpg", desc: "High-resolution digital portrait art." },
    { title: "Wedding Portrait", cat: "portrait", img: "assets/portrait/portrait-wedding.jpg", desc: "Cinematic wedding portrait photography work." }
];

const grid = document.getElementById('gallery-grid');
let currentIdx = 0;

function loadGallery(filter = 'all') {
    grid.innerHTML = '';
    projectData.forEach((p, i) => {
        if (filter === 'all' || p.cat === filter) {
            const card = document.createElement('div');
            card.className = 'project-card';
            // Logos get the pabilog class 'logo-style'
            const imgClass = p.cat === 'logo' ? 'logo-style' : '';
            card.innerHTML = `
                <img src="${p.img}" class="${imgClass}">
                <div class="card-info">
                    <h4>${p.title}</h4>
                </div>
            `;
            card.onclick = () => openModal(i);
            grid.appendChild(card);
        }
    });
}

function openModal(i) {
    currentIdx = i;
    const p = projectData[i];
    document.getElementById('modalImg').src = p.img;
    document.getElementById('modalTitle').innerText = p.title;
    document.getElementById('modalDesc').innerText = p.desc;
    document.getElementById('projectModal').style.display = 'flex';
}
function closeModal() { document.getElementById('projectModal').style.display = 'none'; }
function changeProject(s) { currentIdx = (currentIdx + s + projectData.length) % projectData.length; openModal(currentIdx); }

document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.cat-btn.active').classList.remove('active');
        btn.classList.add('active');
        loadGallery(btn.dataset.filter);
    }
});

checkSecurity();
loadGallery();
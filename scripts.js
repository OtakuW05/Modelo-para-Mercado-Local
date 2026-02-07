// =====================
// DADOS
// =====================

const lista_produtos = [
  { id: 1, nome: "Coca cola de 2 litros", categoria: "Bebidas", preco: 10.99, imagem: "img/produtos/coca.png" },
  { id: 2, nome: "Guaraná Antarctica 2 litros", categoria: "Bebidas", preco: 9.99, imagem: "img/produtos/guarana.png" },
  { id: 3, nome: "Água mineral pequena (500 ml)", categoria: "Bebidas", preco: 2.50, imagem: "img/produtos/agua.png" },
  { id: 4, nome: "Suco Del Valle de uva (1 litro)", categoria: "Bebidas", preco: 7.49, imagem: "img/produtos/suco.png" },
  { id: 5, nome: "Chocolate Lacta", categoria: "Doces", preco: 5.99, imagem: "img/produtos/chocolate.png" },
  { id: 6, nome: "Bis", categoria: "Doces", preco: 4.50, imagem: "img/produtos/bis.png" },
  { id: 7, nome: "Bala Fini", categoria: "Doces", preco: 3.99, imagem: "img/produtos/bala.png" },
  { id: 8, nome: "Biscoito Oreo", categoria: "Biscoitos", preco: 4.99, imagem: "img/produtos/oreo.png" },
  { id: 9, nome: "Trakinas de chocolate", categoria: "Biscoitos", preco: 3.99, imagem: "img/produtos/trakinas.png" },
  { id: 10, nome: "Sabonete Dove", categoria: "Higiene", preco: 3.50, imagem: "img/produtos/sabonete.png" },
  { id: 11, nome: "Shampoo Clear", categoria: "Higiene", preco: 18.90, imagem: "img/produtos/shampoo.png" },
  { id: 12, nome: "Café Pilão (pacote de 500g)", categoria: "Alimentos", preco: 16.99, imagem: "img/produtos/cafe.png" }
];

// =====================
// UTILIDADES
// =====================

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

// =====================
// DOM
// =====================

const dropdown = document.getElementById("dropdown");
const containerProdutos = document.getElementById("carousel");
const inputPesquisa = document.getElementById("procurar");

// =====================
// ESTADO
// =====================

let categoriaSelecionada = "todos";
let textoPesquisa = "";

// =====================
// DROPDOWN DE CATEGORIAS
// =====================

function montarDropdown() {
  const categorias = [...new Set(lista_produtos.map(p => p.categoria))].sort();
  dropdown.innerHTML = "";

  criarItemDropdown("Todos", "todos");
  categorias.forEach(cat => criarItemDropdown(cat, cat.toLowerCase()));
}

function criarItemDropdown(texto, valor) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = "#";
  a.className = "dropdown-item";
  a.textContent = texto;
  a.dataset.category = valor;

  a.addEventListener("click", e => {
    e.preventDefault();
    categoriaSelecionada = valor;
    renderizarProdutos();
  });

  li.appendChild(a);
  dropdown.appendChild(li);
}

// =====================
// RENDERIZAÇÃO
// =====================

function renderizarProdutos() {
  containerProdutos.innerHTML = "";

  const filtrados = lista_produtos.filter(produto => {
    const categoriaOk =
      categoriaSelecionada === "todos" ||
      produto.categoria.toLowerCase() === categoriaSelecionada;

    const textoOk =
      produto.nome.toLowerCase().includes(textoPesquisa.toLowerCase());

    return categoriaOk && textoOk;
  });

  filtrados.forEach(produto => {
    containerProdutos.appendChild(criarCard(produto));
  });
}

function criarCard(produto) {
  const card = document.createElement("div");
  card.className =
    "card m-3 col-12 col-md-5 col-lg-3 d-flex flex-row border-0";

  const img = document.createElement("img");
  img.src = produto.imagem;
  img.alt = produto.nome;
  img.className = "w-25 p-3";

  const body = document.createElement("div");
  body.className = "card-body";

  const titulo = document.createElement("h5");
  titulo.className = "card-title mb-2";
  titulo.textContent = produto.nome;

  const preco = document.createElement("p");
  preco.className = "card-text";
  preco.textContent = formatarPreco(produto.preco);

  body.append(titulo, preco);
  card.append(img, body);

  return card;
}

// =====================
// EVENTOS
// =====================

inputPesquisa.addEventListener("input", e => {
  textoPesquisa = e.target.value.trim();
  renderizarProdutos();
});

inputPesquisa.closest("form")?.addEventListener("submit", e => e.preventDefault());

// =====================
// INIT
// =====================

montarDropdown();
renderizarProdutos();

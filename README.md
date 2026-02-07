# 🛒 Comércio Local

Projeto front-end desenvolvido com **HTML, CSS, JavaScript e Bootstrap**, simulando a vitrine digital de um pequeno comércio.

O foco do projeto é demonstrar **organização de código, tomada de decisões técnicas conscientes e manutenção de um layout estável**, características comuns em cenários reais de desenvolvimento.

---

## 📌 Objetivo do Projeto

Criar uma interface simples e responsiva para exibição de produtos, permitindo:

* Visualização de produtos em formato de cards
* Filtro por categoria
* Pesquisa por nome do produto
* Boa experiência tanto em mobile quanto em desktop

O projeto **não utiliza frameworks JavaScript** (como React ou Vue) de forma proposital, priorizando JavaScript puro para demonstrar domínio da base da linguagem.

---

## 🧰 Tecnologias Utilizadas

* **HTML5** – Estrutura da aplicação
* **CSS3** – Estilização e responsividade
* **JavaScript (ES6+)** – Lógica de renderização e interações
* **Bootstrap 5** – Grid, componentes e utilitários

---

## 🖥️ Funcionalidades

* Renderização dinâmica dos produtos via JavaScript
* Dropdown de categorias gerado automaticamente a partir dos dados
* Campo de busca com filtro em tempo real
* Layout responsivo
* Efeito de *hover* nos cards apenas em telas desktop

---

## 🧠 Decisões Técnicas

### 1️⃣ Visual congelado como prioridade

Após a validação do layout inicial, foi adotada a decisão de **congelar a aparência visual do site**.

Qualquer melhoria posterior deveria:

* ❌ Não alterar espaçamentos, tamanhos ou grid
* ❌ Não mudar classes ou IDs já utilizados
* ✅ Preservar exatamente o resultado visual existente

Essa decisão reflete um cenário real de produto em produção, onde alterações visuais não planejadas podem gerar regressões.

---

### 2️⃣ Refatoração sem impacto visual

O JavaScript foi organizado em blocos lógicos (dados, estado, renderização, eventos), **mantendo todas as classes Bootstrap originais** responsáveis pelo layout.

Isso garante:

* Código mais legível
* Facilidade de manutenção
* Nenhuma alteração perceptível para o usuário final

---

### 3️⃣ Hover apenas no desktop

O efeito de hover nos cards foi adicionado **exclusivamente em telas maiores** utilizando `media queries`.

Motivos:

* Hover não é uma interação natural em dispositivos touch
* Evita efeitos visuais desnecessários no mobile
* Melhora a experiência no desktop sem impactar o layout

---

### 4️⃣ Uso consciente do Bootstrap

O Bootstrap foi utilizado apenas como **apoio visual e estrutural**, principalmente para:

* Grid responsivo
* Navbar
* Cards

Toda a lógica de negócio e renderização foi feita em JavaScript puro, evitando dependência excessiva do framework.

---

### 5️⃣ Código simples antes de código complexo

Não foram utilizados:

* Frameworks JS
* Bundlers
* Build tools

Isso é proposital. O objetivo do projeto é demonstrar:

* Clareza de raciocínio
* Domínio dos fundamentos
* Capacidade de organizar código sem abstrações excessivas

---

## 📱 Responsividade

* Mobile-first
* Layout fluido utilizando grid do Bootstrap
* Ajustes específicos feitos apenas quando necessários

---

## 🚀 Possíveis Evoluções Futuras

* Carrinho de compras
* Modal de detalhes do produto
* Persistência de dados (LocalStorage)
* Integração com API
* Separação em módulos JS

Todas essas evoluções podem ser feitas **sem alterar o layout atual**, respeitando as decisões técnicas já tomadas.

---

## 📂 Estrutura do Projeto

```
/ (root)
│
├── index.html
├── style.css
├── scripts.js
├── img/
│   ├── produtos/
│   └── ...
└── fonts/
```

---

## ⚠️ Aviso sobre uso de imagens

As imagens utilizadas neste projeto foram obtidas diretamente da web e são usadas apenas para fins educacionais e demonstrativos.

❗ Não é permitido reutilizar essas imagens em projetos comerciais, pois elas podem estar protegidas por direitos autorais.

Caso o projeto seja adaptado para uso real, recomenda-se:

Utilizar imagens próprias

Ou imagens com licença livre (ex.: Unsplash, Pexels, Pixabay)

Ou assets fornecidos oficialmente pelo cliente

---

## 👤 Autor

Projeto desenvolvido como parte de estudo e portfólio pessoal, com foco em boas práticas, legibilidade e tomada de decisão técnica consciente.

---

💡 *Este projeto prioriza clareza, estabilidade e evolução controlada — características essenciais em ambientes profissionais.*

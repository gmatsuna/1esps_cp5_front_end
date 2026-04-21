# 1esps_cp5_front_end
## CP5 de front end

**Integrantes:**  
Gilberto Hideaki Matsunaga RM: 568191  
Diogo Henrique Alves Magalhães RM: 568541

# 🎮 CP5 - Pokedex Interativa

Projeto desenvolvido para o **Checkpoint 5** com o objetivo de criar uma aplicação web interativa inspirada no universo Pokémon, utilizando **HTML, CSS e JavaScript puro**.

---

## 📌 📖 Sobre o Projeto

A aplicação simula uma **Pokédex interativa**, permitindo:

* 🔍 Visualizar diferentes Pokémons
* 🎯 Filtrar Pokémons por tipo
* 📊 Exibir informações detalhadas (modal/ficha)
* 🃏 Criar cartas personalizadas de Pokémon

O projeto também aplica conceitos de **responsividade**, **manipulação do DOM** e **organização de código front-end**.

---

## 🗂️ Estrutura do Projeto

```
CP5_FRONT_END/
│
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── style.css
│   │   ├── pokedex.css
│   │   ├── ficha.css
│   │   ├── card.css
│   │   └── responsividade.css
│   │
│   ├── images/
│   │   ├── global/
│   │   ├── icons/
│   │   └── pokemons/
│
├── index.html
├── main.js
└── README.md
```

---

## 🧩 🏗️ Arquitetura do Projeto

### 🔹 HTML (`index.html`)

Estrutura principal da aplicação dividida em seções:

* **Header / Navbar**
* **Banner inicial**
* **Integrantes**
* **Pokédex (lista + filtro)**
* **Criação de cartas**
* **Footer**
* **Modal (Ficha do Pokémon)**

---

### 🎨 CSS

O estilo foi modularizado:

* `reset.css` → normalização dos estilos
* `style.css` → layout geral e identidade visual
* `pokedex.css` → grid e interação dos pokémons
* `ficha.css` → modal com detalhes
* `card.css` → criação de cartas
* `responsividade.css` → adaptação para mobile/tablet

---

### ⚙️ JavaScript (`main.js`)

Responsável por:

* 🎯 Filtro de Pokémons por tipo (`data-tipo`)
* 📂 Abertura da ficha (modal)
* 🧠 Manipulação de atributos `data-*`
* 🃏 Criação dinâmica de cartas
* 🔄 Atualização do preview em tempo real

---

## 🚀 Funcionalidades

### 🔍 Pokédex Interativa

* Filtro por tipo (água, fogo, planta, etc.)
* Exibição dinâmica com base em atributos HTML (`data-*`)

---

### 📊 Ficha do Pokémon (Modal)

* Nome
* Altura
* Peso
* Categoria
* Habilidades
* Tipo e fraqueza
* Evoluções

---

### 🃏 Criador de Cartas

Usuário pode:

* Inserir nome
* Definir vida, ataque e resistência
* Escolher Pokémon
* Selecionar tipo

➡️ A carta é atualizada em tempo real na tela

---

### 📱 Responsividade

O sistema se adapta para:

* 📲 Mobile
* 💻 Desktop
* 📟 Tablet

---

## 🧠 Conceitos Aplicados

* DOM Manipulation
* Eventos em JavaScript
* CSS Grid & Flexbox
* Responsividade com Media Queries
* Organização modular de CSS
* UX/UI inspirado em jogos

---

## ▶️ Como Executar

1. Clone ou baixe o projeto
2. Abra o arquivo:

```bash
index.html
```

3. Execute no navegador

---

## 💡 Melhorias Futuras

* 🔗 Integração com API de Pokémon
* 🎵 Sons e animações
* 🌐 Deploy online

---

## 🏁 Conclusão

Este projeto demonstra a construção de uma aplicação interativa completa utilizando apenas tecnologias base da web, com foco em:

* organização
* interatividade
* experiência do usuário

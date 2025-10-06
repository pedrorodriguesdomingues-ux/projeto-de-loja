document.addEventListener('DOMContentLoaded', () => {
    // 1. Array de produtos (para simulação)
    const products = [
        { id: 1, name: "Teclado Mecânico", price: 350.00 },
        { id: 2, name: "Mouse Sem Fio", price: 89.90 },
        { id: 3, name: "Monitor Ultra HD", price: 1800.00 },
        { id: 4, name: "Cadeira Gamer", price: 1200.00 }
    ];

    // 2. Estado do Carrinho (usando LocalStorage para persistência simples)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');

    // 3. Função para atualizar o contador do carrinho na barra de navegação
    function updateCartCount() {
        cartCountElement.textContent = cart.length;
        // Salva o carrinho no LocalStorage para que o número não suma ao recarregar
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // 4. Adiciona um Listener aos links de "Compre agora"
    document.querySelectorAll('.card-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o link de navegar
            
            // Simula a adição de um item ao carrinho
            const randomIndex = Math.floor(Math.random() * products.length);
            const productToAdd = products[randomIndex];
            
            cart.push(productToAdd);

            updateCartCount();
            
            // Feedback visual simples
            alert(`"${productToAdd.name}" adicionado ao carrinho! Total de itens: ${cart.length}`);
        });
    });

    // Inicializa o contador ao carregar a página
    updateCartCount();
});
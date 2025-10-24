// CONTROLE DO HAMBURGUER - VERSÃO CORRIGIDA
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Carregado - Hamburguer deve funcionar!');
    
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.menu');
    
    if (hamburgerBtn && menu) {
        console.log('Elementos encontrados!');
        
        hamburgerBtn.addEventListener('click', function() {
            console.log('Botão clicado!');
            if (menu.classList.contains('mobile-visible')) {
                menu.classList.remove('mobile-visible');
                hamburgerBtn.textContent = '☰';
            } else {
                menu.classList.add('mobile-visible');
                hamburgerBtn.textContent = '✕';
            }
        });
        
        // Fecha menu ao clicar em um link
        menu.addEventListener('click', function() {
            menu.classList.remove('mobile-visible');
            hamburgerBtn.textContent = '☰';
        });
    } else {
        console.log('Elementos NÃO encontrados:', {
            hamburgerBtn: !!hamburgerBtn,
            menu: !!menu
        });
    }
});

function corrigirSobreposicao() {
    if (window.innerWidth <= 768) {
        // Força todos os elementos problemáticos para layout de coluna
        const secoes = ['#sobre-o-livro', '#autora', '#ilustrador'];
        
        secoes.forEach(secao => {
            const elemento = document.querySelector(secao);
            if (elemento) {
                elemento.style.display = 'flex';
                elemento.style.flexDirection = 'column';
                elemento.style.alignItems = 'center';
                elemento.style.gap = '20px';
            }
        });
    }
}

// Executa quando a página carrega e quando redimensiona
window.addEventListener('load', corrigirSobreposicao);
window.addEventListener('resize', corrigirSobreposicao);

// AJUSTE FINAL PARA ESTRELAS E AUTORA
function ajusteFinal() {
    if (window.innerWidth <= 768) {
        // Corrige posição das estrelas
        const estrelas = document.querySelectorAll('.estrela');
        estrelas.forEach(estrela => {
            estrela.style.margin = '0 auto';
            estrela.style.display = 'block';
        });

        // Corrige textos das estrelas
        const textosEstrela = document.querySelectorAll('.texto-estrela');
        textosEstrela.forEach(texto => {
            texto.style.position = 'static';
            texto.style.transform = 'none';
            texto.style.display = 'block';
            texto.style.textAlign = 'center';
            texto.style.marginTop = '5px';
        });

        // Garante que a imagem da autora fique próxima
        const imagemAutora = document.querySelector('.imagem-Autora');
        if (imagemAutora) {
            imagemAutora.style.marginTop = '0';
            imagemAutora.style.order = '2';
        }
    }
}

window.addEventListener('load', ajusteFinal);
window.addEventListener('resize', ajusteFinal);
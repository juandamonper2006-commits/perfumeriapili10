document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-mujer');
    const infoTxt = document.getElementById('info-productos');
    
    // Función para dibujar los productos en pantalla
    function renderizarProductos(lista) {
        contenedor.innerHTML = ''; // Limpiar
        
        lista.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            card.innerHTML = `
                <div class="product-image">
                    <img src="${prod.imagen}" alt="${prod.nombre}">
                </div>
                <div class="product-info">
                    <p class="brand">${prod.marca}</p>
                    <h3>${prod.nombre}</h3>
                    <p class="price">$${prod.precio} COP</p>
                    <button class="btn-add">Agregar al carrito</button>
                </div>
            `;
            contenedor.appendChild(card);
        });
        
        infoTxt.innerText = `Mostrando ${lista.length} productos de mujer`;
    }

    // Ejecutar la función con la lista que creamos en datos-mujer.js
    renderizarProductos(productosMujer);
});
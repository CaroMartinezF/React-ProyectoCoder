const products = [
    {
        id: 1,
        nombre: 'Biker negra',
        precio: 8000,
        img:'https://img.freepik.com/foto-gratis/retrato-mujer-vestido-fajas_23-2149749534.jpg?w=740&t=st=1706144744~exp=1706145344~hmac=6ffc04d0c0f9826b0fa149758620d7ec22a48cde2919f65b1795315947d50fb0',
        categoria:'Bikers',
        stock: 12,
        descripcion: 'Descripción producto'
    },
    {
        id: 2,
        nombre: 'Biker roja',
        precio: 8000,
        img:'https://img.freepik.com/fotos-premium/cerca-joven-deportista-parada-parque-soleado_137441-4663.jpg?w=740',
        categoria:'Bikers',
        stock: 12,
        descripcion: 'Descripción producto'
    },
    {
        id: 3,
        nombre: 'Top negro',
        precio: 6000,
        img:'https://img.freepik.com/foto-gratis/mujer-sujetador-deportivo-negro-leggings-ropa-deportiva-cuerpo-completo_53876-102883.jpg?w=826&t=st=1706144834~exp=1706145434~hmac=09f12148f45f704c99f986e5e03acf3cc74b83edfb0e052c73523ed3e73cbc12',
        categoria:'Tops',
        stock: 12,
        descripcion: 'Descripción producto'
    },
    {
        id: 4,
        nombre: 'Top rojo',
        precio: 6000,
        img:'https://img.freepik.com/fotos-premium/foto-mujer-deportiva-aspecto-agradable-tiene-figura-perfecta-vestida-top-rojo-informal-pantalones-cortos-negros-lo-motiva-practicar-deporte-aislado-sobre-pared-blanca-concepto-estilo-vida-saludable_176532-6639.jpg?w=900',
        categoria:'Tops',
        stock: 12,
        descripcion: 'Descripción producto'
    },
    {
        id: 5,
        nombre: 'Short negro',
        precio: 9000,
        img:'https://img.freepik.com/fotos-premium/vida-es-corredor-movimiento-pista-estadio-mujer-verano-fitness-entrenamiento-trotar-deporte_386167-4255.jpg?w=900',
        categoria:'Shorts',
        stock: 12,
        descripcion: 'Descripción producto'
    },
    {
        id: 6,
        nombre: 'Short rojo',
        precio: 9000,
        img:'https://img.freepik.com/fotos-premium/banador-rojo_917664-2886.jpg?w=826',
        categoria:'Shorts',
        stock: 12,
        descripcion: 'Descripción producto'
    },
    {
        id: 7,
        nombre: 'Remera negra',
        precio: 7000,
        img:'https://img.freepik.com/foto-gratis/feliz-joven-fitness-vestida-diadema-mirando-arriba-sonriendo-alegremente-pie-sobre-fondo-blanco_141793-118453.jpg?w=826&t=st=1706145037~exp=1706145637~hmac=4329b12055d7da878375af047756d939ec057fa0daee79f464d8887c3e296c40',
        categoria:'Remeras',
        stock: 12,
        descripcion: 'Descripción producto'
    },
    {
        id: 8,
        nombre: 'Remera roja',
        precio: 7000,
        img:'https://img.freepik.com/fotos-premium/joven-deportista-atractiva-descansando-despues-intensa-carrera-nocturna-al-aire-libre-al-atardecer-ciudad_484651-16168.jpg?w=1060',
        categoria:'Remeras',
        stock: 12,
        descripcion: 'Descripción producto'
    }
]


export const getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve (products)
        }, 500) 
        })
}

export const getProductById = (itemId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve (products.find(prod =>prod.id === itemId))
        }, 100)
    })
}

export const getProductsByCategory = (categoriaId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve (products.filter(prod => prod.categoria === categoriaId))
        }, 1000)
    })
}
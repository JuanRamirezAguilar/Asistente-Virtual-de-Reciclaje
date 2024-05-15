// Lista de materiales de reciclaje
const materiales = ['papel', 'hojas arrancadas de cuadernos', 'periódicos',
                    'revistas', 'papeles, tanto impresos como no impresos',
                    'sobres de cartas comunes', 'facturas', 'formularios',
                    'carpetas', 'envases de cartón',
                    'cajas de transporte', 'vidrios', 'envases de alimentos',
                    'botellas de bebidas alcohólicas', 'envases de perfumes y cosmética', 
                    'textiles', 'telas de algodón', 'telas de lino', 'tejidos de origen 100 % natural',
                    'metales', 'latas y envases de refrescos', 'aluminios y metales ferrosos', 'plásticos',
                    'envases provenientes de comida y bebida', 'botes de cosmética', 'envases de transporte de la industria alimenticia',
                    'vasos, platos y cubiertos desechables', 'macetas', 'sillas de plástico', 'botellas de plástico de productos de limpieza',
                    'carton', 'uranio',
                    'celofán', 'envases de yogurt', 'envases de helado', 'pajitas de plástico',
                    'juguetes de plástico', 'pilas', 'baterías', 'electrodomésticos', 
                    'neumáticos', 'colchones', 'bombillas', 'lámparas fluorescentes', 
                    'residuos sanitarios', 'residuos tóxicos', 'medicamentos caducados', 
                    'aceite de cocina usado', 'pinturas', 'barnices', 'productos de limpieza tóxicos',
                    'Residuos verdes',
                    'Hojas frescas y secas',
                    'Restos de césped y de café',
                    'Estiércol de animales',
                    'Restos de frutas y verduras',
                    'Papel y cartón no tratados',
                    'Ceniza de madera',
                    'Cáscaras de huevo trituradas',
                    'Flores y plantas viejas'
                ];

// Estados posibles para cada material
const estados = {'papel':'Se puede reciclar en el contenedor azul siempre que esté libre de restos. Esto es fundamental porque si no ya no podremos reciclarlo.',
                'hojas arrancadas de cuadernos': 'Las hojas de los árboles en pequeñas cantidades puedes depositarlas en el cubo de orgánica en caso de que tengas este tipo de recogida en tu municipio.',
                'periódicos': 'Junto con el resto de papeles, folletos, cuadernos usados… al bote azul',
                'revistas': 'Los libros, como producto, deben ir en el contenedor azul.',
                'papeles, tanto impresos como no impresos': 'Se puede reciclar en el contenedor azul siempre que esté libre de restos.',
                'sobres de cartas comunes': 'Lo más recomendable es que separes el plástico y el cartón y lo deposites en sus contenedores correspondientes.', 
                'facturas': ' no dudes en tirarlas todas en el azul para que puedan reciclarse.',
                'formularios': 'Pasa algo parecido con el cartón: se puede reciclar en el contenedor azul siempre que esté libre de restos.',
                'carpetas': 'Al contenedor azul',
                'envases de cartón': 'El cartón, siempre que esté libre de restos, puedes tirarlo al contenedor azul. Pero ten cuidado, los briks, a pesar de tener cartón, ¡deben ir al contenedor amarillo!',
                'cajas de transporte': 'Los productos hechos con madera (palés, juguetes, etc.) se deben llevar al punto limpio. En el caso de los envases domésticos de madera (caja de frutas, de puros, de botellas de vino, etc.), se deben tirar al contenedor amarillo.',
                'vidrios': 'Todo lo que sea vidrio, al contenedor verde. Pero no caigas en el error de tirar cristal al verde, porque no se puede reciclar debido a los componentes.',
                'envases de alimentos': 'Depende del material, para mas inforamcion revise metal, plastico y carton.',
                'botellas de bebidas alcohólicas': 'Debes depositarla en el contenedor verde, el de vidrio.',
                'envases de perfumes y cosmética': 'Todo lo que sea vidrio, al contenedor verde.',
                'textiles': 'Si la ropa no se encuentra en mal estado la puedes regalar o donar. Si está muy estropeada para ser reutilizada la debes llevar al contenedor de textil más cercano.',
                'telas de algodón': 'Los productos hechos con tela se deben llevar al contenedor de textil más cercano. En el caso de los envases domésticos de tela, como algunas bolsas de legumbres, se deben tirar al contenedor amarillo.',
                'telas de lino': 'Los productos hechos con tela se deben llevar al contenedor de textil más cercano. En el caso de los envases domésticos de tela, como algunas bolsas de legumbres, se deben tirar al contenedor amarillo.',
                'tejidos de origen 100 % natural': 'Asegúrate que no vayas a necesitarlas más adelante, o piensa si tienes algún amigo a quien le puedan venir bien. Si ya están rotas y no hay forma de sacarles partido debes llevarlas al punto limpio.',
                'metales': 'Generalmente, los envases metálicos van al contenedor amarillo. ¡Pero cuidado! No vale cualquier material. Los productos de metal, como las sartenes, han de ir al punto limpio.',
                'latas y envases de refrescos': 'Las latas, siempre al contenedor amarillo. Eso sí, libre de restos.',
                'aluminios y metales ferrosos': 'Generalmente, los envases metálicos van al contenedor amarillo. ¡Pero cuidado! No vale cualquier material. Los productos de metal, como las sartenes, han de ir al punto limpio.',
                'plásticos': 'Hay que tener claro que no cualquier plástico se puede reciclar en el contenedor amarillo. Ahí solo se pueden tirar los envases de plástico.',
                'envases provenientes de comida y bebida': 'Hay que reciclarlo en el amarillo',
                'botes de cosmética': 'El bote, si es de metal o plástico, debe ir en el contenedor amarillo. \nEl bote, si es de papel o cartón, debe ir en el contenedor azul.\nEl bote, si es de cerámica, debe ir en el contenedor gris (basura normal).\nEl bote, si es de vidrio, debe ir en el contenedor verde',
                'envases de transporte de la industria alimenticia': 'Si necesitas saber el detalle de la composición de tu envase para incluirlo en tu declaración, pregunta al proveedor que te suministra el envase.',
                'vasos, platos y cubiertos desechables': 'El cubiero, si es de papel o cartón, debe ir en el contenedor azul.',
                'macetas': 'Para tirar la maceta deberás pensar si se trata de un envase, es decir si es la maceta que te han dado en la floristería para transportarla a casa, en ese caso si es de plástico deberás tirarla en el amarillo y si es de cartón en el azul.\nPor el contrario, si la has adquirido en otro sitio o si es una maceta de cerámica, barro o plástico y se te ha roto y no puede repararla deberás llevarla a un punto limpio.',
                'sillas de plástico': 'Hay que tener claro que no cualquier plástico se puede reciclar en el contenedor amarillo. Ahí solo se pueden tirar los envases de plástico.',
                'botellas de plástico de productos de limpieza': 'Esa va al contenedor amarillo, pero siempre libre de restos.',
                'carton': 'El cartón, siempre que esté libre de restos, puedes tirarlo al contenedor azul. Pero ten cuidado, los briks, a pesar de tener cartón, ¡deben ir al contenedor amarillo!',
                'uranio': 'anto si es enriquecido como del normal estamos de hablando de un producto muy peligroso y que requiere de tratamientos específicos. ¡No lo tires en cualquier sitio! Lo mejor es que llames a tu ayuntamiento.',
                'celofán': 'El celofán, debido a su baja biodegradabilidad y a que puede permanecer mucho tiempo en la naturaleza sin descomponerse, debería ser llevado a puntos de reciclaje especializados.',
                'envases de yogurt': 'Estos envases suelen estar hechos de polipropileno (PP), un tipo de plástico reciclable. Deberían ser lavados antes de ser reciclados.',
                'envases de helado': 'Estos envases, al igual que los envases de yogurt, suelen ser de polipropileno (PP) y pueden ser reciclados. Se recomienda lavarlos antes de su reciclaje.',
                'pajitas de plástico': 'Las pajitas de plástico son un problema ambiental significativo debido a su tamaño y a que a menudo se desechan después de un solo uso. Se pueden reciclar en algunos lugares, pero se recomienda reducir su uso o buscar alternativas biodegradables.',
                'juguetes de plástico': 'Los juguetes de plástico pueden ser difíciles de reciclar debido a los diferentes tipos de plástico que pueden contener y a los materiales adicionales, como pinturas y adhesivos. Se recomienda donarlos o reutilizarlos siempre que sea posible.',
                'pilas': 'Las pilas deben ser recicladas correctamente en puntos de recolección designados para evitar la contaminación ambiental debido a los metales y productos químicos peligrosos que contienen.',
                'baterías': 'Al igual que las pilas, las baterías contienen metales pesados y productos químicos peligrosos que pueden contaminar el medio ambiente si no se reciclan correctamente. Deben ser llevadas a puntos de recolección designados.',
                'electrodomésticos': 'Los electrodomésticos grandes, como lavadoras, refrigeradores y televisores, pueden ser reciclados en centros de reciclaje especializados. Se pueden desmontar para recuperar materiales reciclables y reducir el impacto ambiental.',
                'neumáticos': 'Los neumáticos usados pueden ser reciclados para su reutilización en la fabricación de nuevos productos, como asfalto modificado o gránulos de caucho. También se pueden reutilizar como combustible en la industria cementera.',
                'colchones': 'Los colchones pueden ser reciclados para recuperar materiales como la espuma, la madera y los metales. Se pueden desmontar y los materiales reciclables se pueden reutilizar en la fabricación de nuevos productos.',
                'bombillas': 'Las bombillas deben ser desechadas correctamente para evitar la liberación de mercurio y otros productos químicos peligrosos. Algunos tipos de bombillas, como las fluorescentes compactas, pueden ser recicladas en puntos de recolección designados.',
                'lámparas fluorescentes': 'Las lámparas fluorescentes contienen mercurio y otros productos químicos peligrosos y deben ser recicladas correctamente para evitar la contaminación ambiental. Se pueden reciclar en puntos de recolección designados.',
                'residuos sanitarios': 'Los residuos sanitarios, como jeringas, vendajes y pañales, deben ser desechados correctamente para evitar la propagación de enfermedades y la contaminación ambiental. Se recomienda su tratamiento y disposición adecuados en instalaciones especializadas.',
                'residuos tóxicos': 'Los residuos tóxicos, como productos químicos de limpieza, pesticidas y pinturas, deben ser recogidos y desechados correctamente en instalaciones especializadas para evitar la contaminación del suelo y del agua.',
                'medicamentos caducados': 'Los medicamentos caducados deben ser devueltos a las farmacias o a los puntos de recolección designados para su eliminación adecuada. No deben ser arrojados a la basura o al desagüe para evitar la contaminación del medio ambiente.',
                'aceite de cocina usado': 'El aceite de cocina usado puede ser reciclado para su reutilización en la producción de biodiesel u otros productos. Se recomienda su recogida y entrega en puntos de recolección designados.',
                'pinturas': 'Las pinturas deben ser desechadas correctamente para evitar la contaminación del suelo y del agua. Se pueden llevar a instalaciones de recogida de residuos peligrosos para su eliminación adecuada.',
                'barnices': 'Los barnices y otros productos químicos similares deben ser desechados correctamente para evitar la contaminación del medio ambiente. Se pueden llevar a instalaciones de recogida de residuos peligrosos para su eliminación adecuada.',
                'Residuos verdes': 'Se pueden utilizar para realizar compostaje doméstico.',
                'Hojas frescas y secas': 'Aportan carbono al compost y son excelentes para mantener la humedad.',
                'Restos de césped y de café': 'Ricos en nitrógeno, ideales para acelerar el proceso de compostaje.',
                'Estiércol de animales': 'Aporta nutrientes esenciales y activa la descomposición de otros materiales.',
                'Restos de frutas y verduras': 'Aportan humedad y nutrientes al compost.',
                'Papel y cartón no tratados': 'Proporcionan carbono al compost y ayudan a mantener la estructura del mismo.',
                'Ceniza de madera': 'Debe usarse con moderación ya que puede aumentar el pH del compost.',
                'Cáscaras de huevo trituradas': 'Aportan calcio al compost y ayudan a regular su pH.',
                'Flores y plantas viejas': 'Pueden ser compostadas para volver a la tierra como abono.'
            };


// Al hora de inicializar el script se crean los valores para el asistente virtual
// tomando los valores de los materiales y los estados disponibles.
const numEstados = materiales.length;
const numAcciones = materiales.length;
let Q = Array.from({ length: numEstados }, () => Array(numAcciones).fill(0)); // Crea una matriz para calcular las acciones

// Se entrena la ia con el metodo de exploracion-explotacion
function elegirAccion(estado, epsilon) {
    if (Math.random() < epsilon) {
        // elige una acción al azar
        return Math.floor(Math.random() * numAcciones);
    } else {
        // elige la mejor acción conocida
        return Q[estado].indexOf(Math.max(...Q[estado]));
    }
}


// Parámetros de aprendizaje    NOTA: no tacar
// Es la tasa de exploración, mientras mas grande sea; epsilo explorara mas nuevos estados.
let epsilon = 0.1;
// La tasa de aprendizaje controla la rapidez actualiza sus acciones con respecto a Q
const lr = 0.1;
// Factor de descuento para recompensas futuras, conrola la importancia relativa de lasa recompensas futuras
const gamma = 0.9 // Que este cerca  del 1 indica que valora mucho las recompensa futuras.
// Tasa de decaimiento. Controla la tasa de exploracion que va decayendo con el tiempo.
const decayRate = 0.99;  

// El algoritmo obtiene la recompensa.
function obtenerRecompensa(estado, accion) {
    const material = materiales[estado];
    const accionRecomendada = estados[material];
    
    if (accionRecomendada === estados[materiales[accion]]) {
        return 1;  // La acción tomada coincide con la recomendada, recompensa positiva
    } else {
        return -1;  // La acción tomada no coincide con la recomendada, recompensa negativa
    }
}

// Proceso de entrenamiento.
// Se le asignaran episodios que seran las veces que se entrene el algoritmo
const numEpisodios = 1000;  // Número de episodios de entrenamiento
for (let episodio = 0; episodio < numEpisodios; episodio++) {
    // Reiniciar el estado a uno inicial
    let estado = Math.floor(Math.random() * numEstados);
    
    // Iterar hasta que se alcance un estado final
    while (estado !== numEstados - 1) {
        // Elegir una acción basada en el estado actual y la política
        const accion = elegirAccion(estado, epsilon);
        
        // Obtener recompensa por tomar la acción en el estado actual
        const recompensa = obtenerRecompensa(estado, accion);
        
        // Actualizar la tabla Q
        Q[estado][accion] += lr * (recompensa + gamma * Math.max(...Q[estado]) - Q[estado][accion]);
        
        // Ir al siguiente estado (este es un ejemplo, necesitas definir cómo calcular el nuevo estado)
        const nuevoEstado = estado + 1;  // Por ejemplo, pasar al siguiente estado en la lista de materiales
        estado = nuevoEstado;
    }
    
    // Decrementar la tasa de exploración para enfocarse más en la explotación
    epsilon *= decayRate;
}

function recibirDatos() {
    const consulta = document.getElementById('textarea-form02-5').value;
    
    if (consulta === '') {
        alert("Antes ingresa un mensaje");
        return;
    }
    const resultado = comoReciclar(consulta);
    
    // Crear un nuevo elemento div para el mensaje del usuario
    const usuarioMensaje = document.createElement('div');
    usuarioMensaje.classList.add('mensaje-usuario'); // Añadir una clase para el estilo
    usuarioMensaje.textContent = 'Tú: ' + consulta;

    document.getElementById('chat-container').style.display = 'block';

    // Crear un nuevo elemento div para el mensaje de respuesta
    const respuestaMensaje = document.createElement('div');
    respuestaMensaje.classList.add('mensaje-respuesta'); // Añadir una clase para el estilo
    respuestaMensaje.textContent = 'Asistente: ' + resultado;

    // Obtener el contenedor de chat
    const chatContainer = document.getElementById('chat-container');

    // Agregar los mensajes al contenedor de chat de manera intercalada
    chatContainer.appendChild(usuarioMensaje);
    chatContainer.appendChild(respuestaMensaje);

    // Desplazar el scroll hacia abajo para mostrar los nuevos mensajes
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Limpiar el contenido del área de texto
    document.getElementById('textarea-form02-5').value = '';
}




function comoReciclar(materialIngresado) {
    // Dividir la consulta en palabras individuales
    const palabras = materialIngresado.toLowerCase().split(" ");

    // Inicializar una variable para almacenar la mejor coincidencia encontrada
    let mejorCoincidenciaEstado = -1;

    // Iterar sobre cada palabra en la consulta
    palabras.forEach(palabra => {
        // Buscar el material más similar para cada palabra en la lista de materiales
        const material = buscarMaterial(palabra);
        
        if (material) {
            const estado = materiales.indexOf(material);
            // Verificar si la coincidencia actual es mejor que la mejor coincidencia encontrada hasta ahora
            if (estado > mejorCoincidenciaEstado) {
                mejorCoincidencia = material;
                mejorCoincidenciaEstado = estado;
            }
        }
    });

    if (mejorCoincidenciaEstado !== -1) {
        const accion = Q[mejorCoincidenciaEstado].indexOf(Math.max(...Q[mejorCoincidenciaEstado]));
        return estados[materiales[accion]];
    } else {
        return "Material no encontrado o no reconocido.";
    }
}

function buscarMaterial(materialIngresado) {
    // Buscar el material más similar en la lista de materiales
    const coincidencias = materiales.filter(mat => mat.includes(materialIngresado));
    
    if (coincidencias.length > 0) {
        // Devolver la coincidencia más cercana encontrada
        return coincidencias[0];
    } else {
        return null;
    }
}
const recetas = [
    {
        id: 'empanadas',
        nombre: 'Empanadas criollas',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnZzP5U6PXnY0buLLoJes3mrW21iWi-CH9Qr2Muo8DA&s=10',
        resumen: 'Empanadas rellenas de carne, cebolla, huevo y condimentos.',
        ingredientes: [
            '12 tapas para empanadas',
            '500 g de carne picada',
            '2 cebollas picadas',
            '2 huevos duros picados',
            '1 cucharadita de pimentón',
            'Sal y pimienta'
        ],
        pasos: [
            'Rehogar la cebolla en una sartén con un poco de aceite.',
            'Agregar la carne, el pimentón, la sal y la pimienta. Cocinar y dejar enfriar.',
            'Mezclar el relleno con el huevo duro.',
            'Rellenar las tapas, cerrarlas haciendo un repulgue y colocarlas en una placa.',
            'Hornear a 200 °C durante 15 a 20 minutos, hasta que estén doradas.'
        ]
    },
    {
        id: 'locro',
        nombre: 'Locro',
        imagen: 'https://i.pinimg.com/1200x/8e/06/4f/8e064f3aea0b3aa15d22fbc292352bb2.jpg',
        resumen: 'Guiso tradicional de maíz, porotos, zapallo y carne.',
        ingredientes: [
            '500 g de maíz blanco',
            '250 g de porotos blancos',
            '500 g de zapallo en cubos',
            '300 g de carne vacuna en cubos',
            '200 g de panceta',
            '1 cebolla',
            'sal y pimentón'
        ],
        pasos: [
            'Dejar el maíz y los porotos en remojo desde la noche anterior.',
            'Escurrirlos y cocinarlos en una olla grande con agua durante una hora.',
            'Agregar la carne, la panceta y el zapallo. Cocinar a fuego bajo, revolviendo cada tanto.',
            'Cuando los ingredientes estén tiernos y el guiso espeso, condimentar con sal.',
            'Servir caliente con cebolla rehogada y pimentón.'
        ]
    },
    {
        id: 'pastelitos con masa comprada',
        nombre: 'Pastelitos con masa comprada',
        imagen: 'https://www.paulinacocina.net/wp-content/uploads/2018/05/pastelitos-640x480.png',
        resumen: 'Pastelitos rellenos de dulce de membrillo o batata, fritos y espolvoreados con azúcar.',
        ingredientes: [
            '12 masa de hojaldre comprada',
            '250 gr de dulce de membrillo o batata',
            'c/n harina',
            'c/n grasa para freír',
        ],
        pasos: [
            'cortar el dulce en cubos pequeños.',
            'Pasarlos por harina y colocarlos en el centro de cada cuadrado de masa.',
            'Doblar la masa y sellar la masa dandole forma de pastelitos.',
            'Freír en abundante grasa caliente hasta que estén dorados.',
            'Escurrir sobre papel absorbente y espolvorear con azúcar.'
        ]
    },
    {
        id: 'asado',
        nombre: 'Asado',
        imagen: 'https://www.clarin.com/img/2022/03/07/0w2kcAVNO_1256x620__1.jpg',
        resumen: 'Carne de res cocida a la parrilla.',
        ingredientes: [
            '1 y 1/2 kilo de asado de tira',
            'Sal y pimienta, a gusto'
        ],
        pasos: [
            'Encender el fuego para lograr una buena cantidad de brasas, puede ser tanto con carbón como leña.',
            'Colocar una buena capa de brasas debajo de la parrilla y calentar los fierros hasta que adquieran temperatura.',
            'Salar la carne, al tratarse de un corte de pequeño se puede usar sal fina, sin embargo, siempre lo aconsejable es utilizar sal parrillera, la pimienta es a gusto de cada asador.',
            'El tiempo de cocción dependerá del tamaño de la tira, tanto por el corte que haya realizado el carnicero como por el tamaño del hueso, ya que si es un animal chico los huesos serán pequeños, en cambio si es un animal más grande, también lo serán los huesos.',
            'Aproximadamente, se calcula media hora del lado de los huesos, hasta observar que comienzan a brotar pequeñas gotas de sangre del lado de la carne, es un buen momento para dar vuelta la tira.',
            'Una vez esté del lado de la carne solo dorar la misma para que quede crujiente y con color, bastará con unos diez minutos como mucho y estará listo para salir del fuego y reposar unos minutos.',
            'Servir en un plato.'
        ]
    },
    {
        id: 'pastelitos',
        nombre: 'Pastelitos con masa de hojaldre',
        imagen: 'https://www.paulinacocina.net/wp-content/uploads/2018/05/pastelitos-640x480.png',
        resumen: 'Pastelitos rellenos de dulce de membrillo o batata, fritos y espolvoreados con azúcar.',
        ingredientes: [
            'Masa para pastelitos:',
            '500 gr de harina 0000',
            '100 gr de mantecca',
            '250 cc de agua',
            '1 pizca de sal',
            '1/2 cdta de jugo de limón',
            'Para hojaldrar la masa:',
            'Manteca o margarina',
            'Almidón de maiz',
            'Relleno para pastelitos:',
            '125 gr de dulce de membirllo',
            '125 gr de dulce de batata'
        ],
        pasos: [
            'Lo primero va a ser arenar el harina y la manteca ayudándose de las manos. Cuando esté integrado, vamos a agregar el agua de a poco e ir mezclando. Sumamos el jugo de limón, y mezclamos bien. No hace falta amasar, pero si integrar. Envolvemos en papel film y llevar media hora a la heladera.',
            'Una vez que la sacamos de la heladera, llegó el momento de estirarla. Vamos a hacerlo sobre la mesada o la mesa con un poco de harina, aunque es un masa muy noble y no se pega. La estiramos con un palote y cuando la tengamos bien extendida, la vamos a pintar con manteca o margarina derretida, y por encima vamos a espolvorear con maicena.',
            'Ahora doblamos en tres como un libro (en el video se ve bien) y la volvemos a estirar. Pintamos nuevamente con manteca y espolvoreamos con maicena, y esta vez la vamos a enrrollar y volver a estirar. Si quieren más capas de hojaldre, pueden repetir estos pasos de estirar y pintar un par de veces más, pero hasta acá están perfectos!',
            'Finalmente la estiramos de un espesor medio, y recortamos los bordes para exponer el hojaldre y que todos los pastelitos queden crocantes! Cortamos cuadrados de más o menos 5cm de lado.',
            'Colocar un trozo de dulce (batata o membrillo, lo que quieran) en un cuadradito de masa, pintamos por el borde con agua como una empanada, y colocamos con otro cuadradito de masa en diagonal. Cerramos pellizcando las esquinas y listo!',
            'La cocción: vamos a usar 2 temperaturas. Primero, ponemos el aceite a fuego medio, unos 140° (cuando todavía no está tan caliente) y llevamos los pastelitos unos dos minutos más o menos. Cuando pasó este tiempo, subimos el fuego a 180-200° y los dejamos hasta dorar. Es importante seguir este paso, para que el hojaldre se “abra” en la cocción y después el pastelito quede bien dorado.',
            'Los sacamos, los pasamos por un papel absorbente y los pintamos con almíbar. Pueden decorar con granas y llorar porque la vida es hermosa!'
        ]
    },
    {
        id: 'tortas-fritas',
        nombre: 'Tortas fritas',
        imagen: 'https://i.pinimg.com/1200x/33/05/a6/3305a668877e92ffefc60bbdaef3b97d.jpg',
        resumen: 'Masa sencilla frita, ideal para acompañar el mate.',
        ingredientes: [
            '500 g de harina',
            '1 cucharadita de sal',
            '50 g de grasa',
            '250 ml de agua tibia',
            'grasa para freír'
        ],
        pasos: [
            'Mezclar la harina con la sal y agregar la grasa derretida.',
            'Incorporar el agua de a poco y amasar hasta obtener una masa lisa.',
            'Dejar descansar 20 minutos, dividir en bollos y estirarlos en discos.',
            'Hacer un pequeño agujero en el centro de cada disco.',
            'Freír en grasa caliente hasta dorar de ambos lados.'
        ]
    }
];

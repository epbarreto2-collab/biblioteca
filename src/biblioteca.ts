interface IUsuario {
    nombre: string;
    correo: string;
    id: number;
    telefono: number;
}

class Usuario implements IUsuario {
    id: number;
    nombre: string;
    correo: string;
    telefono: number;
    edad: number;

    constructor(
        id: number,
        nombre: string,
        correo: string,
        telefono: number,
        edad: number
    ) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.edad = edad;
    }

    registrarse(): void {
        console.log(`Usuario registrado: ${this.nombre}, Edad: ${this.edad}`);
    }

    buscarUsuario(): void {
        console.log(`Buscando usuario: ${this.nombre}`);
    }

    validarUsuario(): boolean {
        return this.edad >= 18;
    }
}

interface ILibro {
    titulo: string;
    autor: string;
    id: number;
    categoria: string;
    disponibilidad: boolean;
}

class Libro implements ILibro {
    id: number;
    titulo: string;
    autor: string;
    categoria: string;
    disponibilidad: boolean;

    constructor(
        id: number,
        titulo: string,
        autor: string,
        categoria: string,
        disponibilidad: boolean = true
    ) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.disponibilidad = disponibilidad;
    }

    registrarLibro(): void {
        console.log(`Libro registrado: ${this.titulo} por ${this.autor}`);
    }

    consultarDisponibilidad(): boolean {
        return this.disponibilidad;
    }

    consultarLibro(): void {
        console.log(
            `Título: ${this.titulo}, Autor: ${this.autor}, Categoría: ${this.categoria}, Disponibilidad: ${this.disponibilidad}`
        );
    }
}

interface IPrestamo {
    id: number;
    usuarioId: number;
    libroId: number;
    fechaPrestamo: Date;
    fechaDevolucion: Date | null;
}

class Prestamo implements IPrestamo {
    id: number;
    usuarioId: number;
    libroId: number;
    fechaPrestamo: Date;
    fechaDevolucion: Date | null;

    constructor(
        id: number,
        usuarioId: number,
        libroId: number,
        fechaPrestamo: Date,
        fechaDevolucion: Date | null = null
    ) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.libroId = libroId;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
    }

    crearPrestamo(): void {
        console.log(
            `Préstamo creado: Usuario ID ${this.usuarioId}, Libro ID ${this.libroId}`
        );
    }

    registrarFechaPrestamo(): void {
        console.log(
            `Fecha de préstamo registrada: ${this.fechaPrestamo}`
        );
    }

    asociarUsuarioLibro(): void {
        console.log(
            `Asociando Usuario ID ${this.usuarioId} con Libro ID ${this.libroId}`
        );
    }

    actualizarDisponibilidad(): void {
        console.log(
            `Actualizando disponibilidad del libro ID ${this.libroId}`
        );
    }
}

interface IDevolucion {
    id: number;
    nombre: string;
    descripcion: string;
}

class Devolucion implements IDevolucion {
    id: number;
    nombre: string;
    descripcion: string;

    constructor(id: number, nombre: string, descripcion: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    buscarPrestamoActivo(): void {
        console.log(
            `Buscando préstamo activo para el libro ID ${this.id}`
        );
    }

    registrarFechaDevolucion(): void {
        console.log(
            `Fecha de devolución registrada para el libro ID ${this.id}`
        );
    }

    liberarDisponibilidadLibro(): void {
        console.log(
            `Liberando disponibilidad del libro ID ${this.id}`
        );
    }
}
// Crear usuario
const usuario1 = new Usuario(
    1,
    "Juan Pérez",
    "juan@gmail.com",
    987654321,
    2032
);

usuario1.registrarse();
console.log("¿Usuario válido?", usuario1.validarUsuario());

// Crear libro
const libro1 = new Libro(
    1,
    "la bella y la bestia",
    "",
    "Novela",
    true
);

libro1.registrarLibro();
libro1.consultarLibro();

// Crear préstamo
const prestamo1 = new Prestamo(
    1,
    usuario1.id,
    libro1.id,
    new Date()
);

prestamo1.crearPrestamo();
prestamo1.registrarFechaPrestamo();

// Crear devolución
const devolucion1 = new Devolucion(
    1,
    "Devolución Libro",
    "Entrega del libro en buen estado"
);

devolucion1.buscarPrestamoActivo();
devolucion1.registrarFechaDevolucion();
devolucion1.liberarDisponibilidadLibro();


const usuario = new Usuario(
    1,
    "Juan",
    "juan@gmail.com",
    123456789,
    20
);

usuario.registrarse();

const libro = new Libro(
    1,
    "El Principito",
    "Antoine de Saint-Exupéry",
    "Novela",
    true
);

libro.consultarLibro();
export interface IPerson {
    id: number;
    firstname: string;
    lastname: string;
    fecha_nacimiento: string;  // Puede ser Date si deseas manejar fechas en código
    genre: string;  // Asumiendo que solo hay 'M' y 'F'
    phone: string;
    ciudad: string;
    nivel_estudios: string;
  }
  
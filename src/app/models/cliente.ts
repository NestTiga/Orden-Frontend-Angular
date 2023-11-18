export interface ClientesModel {
    cliente_id: number;
    nombre:     string;
    apellido:   string;
    ordens:     any[];
}

export interface nuevoCliente {
    nombre:     string;
    apellido:   string;
}

export interface DataForm {
    title: string;
    formulario: string;
    data: ClientesModel;
  }
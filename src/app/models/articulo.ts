export interface ArticuloModel {
    artic_id: number;
    codigo:   string;
    nombre:   string;
    precio:   number;
    ordens:   any[];
}

export interface nuevoArticulo {
    nombre:   string;
    precio:   number;
}

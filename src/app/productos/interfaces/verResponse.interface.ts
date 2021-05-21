export interface verResponse {
    data:  alimento[];
    imags: Imag[];
}

export interface alimento {
    idalimento: number;
    tamanio:    number;
    precio:     number;
    cantidad:   number;
}

export interface Imag {
    path: string;
}

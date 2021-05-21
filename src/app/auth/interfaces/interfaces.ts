export interface AuthResponse{

    ok:boolean;
    id?:string;
    nombre?:string;
    token?:string;
    msg?:string;

} 


export interface Usuario{
    ok?:boolean;
    id:string;
    nombre:string;
}





export interface IButtonTable {
    labelUpdate: string,
    labelDelete: string,
    showUpdate: boolean,
    showDelete: boolean,
    styleButtonDelete: string,
    styleButtonUpdate: string,
    styleIconDelete?: string,
    styleIconUpdate?: string
}
//!Haremos una interfaz para personalizar dicho componente 
//Aqui pondre las caracteristica 
export interface IButtonCrud {
    labelCreate: string,
    labelRead: string,
    labelUpdate: string,
    labelDelete: string,
    showCreate: boolean,
    showRead: boolean,
    showUpdate: boolean,
    showDelete: boolean,
    styleButtonCreate: string,
    styleButtonRead: string,
    styleButtonDelete: string,
    styleButtonUpdate: string,
    styleIconCreate: string,
    styleIconRead: string,
    styleIconDelete?: string,
    styleIconUpdate?: string

}
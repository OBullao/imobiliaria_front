import { AbstractEntity } from "./AbstractEntity";
import { Apartamento } from "./Apartamento";
import { Tipo } from "./Tipo";
export class ConstrucaoModel extends AbstractEntity{
    tipo!:Tipo
    quartos!:Number
    metrosQuadrados!:Number
    suites!:Number
    banheiros!:Number
    apartamento!:Apartamento
}
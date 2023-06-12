import { AbstractEntity } from "./AbstractEntity";
export class localizacao extends AbstractEntity{
    cep!:String
    numero!:Number
    rua!:String
    cidade!:String
    bairros!:String
}
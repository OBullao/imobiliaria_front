import { AbstractEntity } from "./AbstractEntity";
export class localizacaoModel extends AbstractEntity{
    cep!:String
    numero!:Number
    rua!:String
    cidade!:String
    bairro!:String
}
import { AbstractEntity } from "./AbstractEntity";
export class LocalizacaoModel extends AbstractEntity{
    cep!:String
    numero!:Number
    rua!:String
    cidade!:String
    bairro!:String
}
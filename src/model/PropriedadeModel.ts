import { AbstractEntity } from "./AbstractEntity";
import { ConstrucaoModel } from "./ConstrucaoModel";
import { DescricaoModel } from "./DescricaoModel";
import { LocalizacaoModel } from "./LocalizacaoModel";
import { ProprietarioModel } from "./ProprietarioModel";
import { StatusModelo } from "./StatusModel";
import { VendedorModel } from "./VendedorModel";

export class PropriedadeModel extends AbstractEntity{
    proprietario!:ProprietarioModel
    vendedor!:VendedorModel
    localizacao!:LocalizacaoModel
    largura!:Number
    comprimento!:Number
    descricao!:DescricaoModel
    status!:StatusModelo
    titulo!:String
    construcao!:ConstrucaoModel
    valor!:Number

    
}
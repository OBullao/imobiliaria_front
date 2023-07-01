import { AbstractEntity } from "./AbstractEntity";
import { ConstrucaoModel } from "./ConstrucaoModel";
import { DescricaoModel } from "./DescricaoModel";
import { localizacaoModel } from "./LocalizacaoModel";
import { ProprietarioModelo } from "./ProprietarioModel";
import { StatusModelo } from "./StatusModel";
import { VendedorModelo } from "./VendedorModel";

export class PropriedadeModel extends AbstractEntity{
    proprietario!:ProprietarioModelo
    vendedor!:VendedorModelo
    localizacao!:localizacaoModel
    largura!:Number
    comprimento!:Number
    descricao!:DescricaoModel
    status!:StatusModelo
    titulo!:String
    construcao!:ConstrucaoModel
    valor!:Number

    
}
import { AbstractEntity } from "./AbstractEntity"

export class AbstractPessoa extends AbstractEntity{
    email!:String
    nome!:String
    cpfCnpj!:String
    phone!:String
}
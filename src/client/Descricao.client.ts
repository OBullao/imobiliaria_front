import { DescricaoModel } from "@/model/DescricaoModel";
import axios, { AxiosInstance } from "axios";

export class DescricaoClient {
    private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/descricao",
      headers: { "Content-type": "application/json" },
    });
  }
  public async findById(id: number): Promise<DescricaoModel> {
    try {
      return (await this.axiosClient.get<DescricaoModel>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public  async listAll() : Promise<DescricaoModel[]>{
    try{
        return (await this.axiosClient.get<DescricaoModel[]> ('/lista')).data
    }
    catch(error: any){
        return Promise.reject(error.response)
    }
}








  public async cadastrar(cadastrar: DescricaoModel): Promise<void> {
    try {
      return await this.axiosClient.post("/", cadastrar);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async editar(editar: DescricaoModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${editar.id}`, editar)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async desativar(deasativar: DescricaoModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/desativar/${deasativar.id}`, deasativar))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
export default new DescricaoClient;

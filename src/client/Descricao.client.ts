import axios, { AxiosInstance } from "axios";
import { DescricaoModel } from "@/model/DescricaoModel";

class DescricaoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'http://localhost:8081/api/descricao',
      headers: { 'Content-type': 'application/json' }
    });
  }
  public async findById(id: number): Promise<DescricaoModel> {
    try {
      return (await this.axiosClient.get<DescricaoModel>(`/lista/id/${id}`)).data;

    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async listaAll(): Promise<any> {
    try {
      return (await this.axiosClient.get<DescricaoModel[]>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(cadastro: DescricaoModel): Promise<string> {
    try {
      return (await this.axiosClient.post<string>(``, cadastro)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(id: number, editar: DescricaoModel): Promise<string> {
    try {
      return (await this.axiosClient.put<string>(`/${id}`, editar)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async excluir(id: number): Promise<string> {
    try {
      return (await this.axiosClient.delete<string>(`/delete/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}

export default new DescricaoClient();



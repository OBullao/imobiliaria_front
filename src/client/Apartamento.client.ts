import axios, { AxiosInstance } from "axios";
import { Apartamento } from "@/model/Apartamento";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
export class ApartamentosClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8081/api/apartamento",
      headers: { "Content-type": "application/json" },
    });
  }
  public async findByAll(): Promise<Apartamento> {
    try {
      return (await this.axiosClient.get<Apartamento>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async findById(id: number): Promise<Apartamento> {
    try {
      return (await this.axiosClient.get<Apartamento>(`/lista/id/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async listAll(): Promise<any> {
    try {
      return (await this.axiosClient.get<Apartamento[]>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(cadastrar: Apartamento): Promise<void> {
    try {
      return await this.axiosClient.post("/cadastrar", cadastrar);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar (id: Number, apartamento: Apartamento) :Promise<string>{
    try {
        return (await this.axiosClient.put<string>(`/${id}`, apartamento)).data
        
    } catch (error: any) {
        return Promise.reject(error.response)   
    }
}







  public async desativar(id:Number): Promise<string> {
    try{
      return (await this.axiosClient.delete<string>(`/${id}`)).data
  }
  catch(error:any)
  {
      return Promise.reject(error.response)

  }
}

  public async findByFiltrosPaginado(
    pageRequest: PageRequest
  ): Promise<PageResponse<Apartamento>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Apartamento>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
export default new ApartamentosClient();


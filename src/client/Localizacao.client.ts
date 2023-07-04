import axios, { AxiosInstance } from "axios";
import { localizacaoModel } from "@/model/LocalizacaoModel";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
export class LocalizacaoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/localizacao",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<localizacaoModel> {
    try {
      return (await this.axiosClient.get<localizacaoModel>(`/lista/id/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public  async listAll() : Promise<localizacaoModel[]>{
    try{
        return (await this.axiosClient.get<localizacaoModel[]> ('/lista')).data
    }
    catch(error: any){
        return Promise.reject(error.response)
    }
}

  public async cadastrar(cadastrar: localizacaoModel): Promise<void> {
    try {
      return await this.axiosClient.post("/", cadastrar);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(editar: localizacaoModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${editar.id}`, editar)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativar(deasativar: localizacaoModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/desativar/${deasativar.id}`, deasativar))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findByFiltrosPaginado(
    pageRequest: PageRequest
  ): Promise<PageResponse<localizacaoModel>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<localizacaoModel>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
export default new LocalizacaoClient;
import axios, { AxiosInstance } from "axios";
import { ConstrucaoModel } from "@/model/ConstrucaoModel";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
export class ConstrucaoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8081/api/construcao",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<ConstrucaoModel> {
    try {
      return (await this.axiosClient.get<ConstrucaoModel>(`/lista/id/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public  async listAll() : Promise<ConstrucaoModel[]>{
    try{
        return (await this.axiosClient.get<ConstrucaoModel[]> ('/lista')).data
    }
    catch(error: any){
        return Promise.reject(error.response)
    }
}

  public async cadastrar(cadastrar: ConstrucaoModel): Promise<void> {
    try {
      return await this.axiosClient.post("/", cadastrar);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar (id: Number, construcao: ConstrucaoModel) :Promise<string>{
    try {
        return (await this.axiosClient.put<string>(`/${id}`, construcao)).data
        
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
  ): Promise<PageResponse<ConstrucaoModel>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<ConstrucaoModel>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
export default new ConstrucaoClient;
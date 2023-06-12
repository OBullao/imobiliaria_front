import axios, { AxiosInstance } from "axios";
import { Propriedade } from "@/model/Propriedade";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
export class PropriedadeClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/propriedade",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<Propriedade> {
    try {
      return (await this.axiosClient.get<Propriedade>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(cadastrar: Propriedade): Promise<void> {
    try {
      return await this.axiosClient.post("/", cadastrar);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(editar: Propriedade): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${editar.id}`, editar)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativar(deasativar: Propriedade): Promise<void> {
    try {
      return (await this.axiosClient.put(`/desativar/${deasativar.id}`, deasativar))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findByFiltrosPaginado(
    pageRequest: PageRequest
  ): Promise<PageResponse<Propriedade>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Propriedade>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}

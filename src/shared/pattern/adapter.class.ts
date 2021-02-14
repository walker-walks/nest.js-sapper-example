import axios from 'axios';
import { endpoints } from '../../interface/api/api.conf';

export class Adapter<T> {

  constructor(
    private readonly path: string,
  ) {}

  get(filter?: Object): Promise<T> {
    return axios.get<T>(`${endpoints.prefix}/${this.path}`)
      .then(res => res.data);
  }

  getById(id: string | number, filter?: Object): Promise<T> {
    return axios.get<T>(`${endpoints.prefix}/${this.path}/${id}`)
      .then(res => res.data);
  }

  create() {

  }

  update() {

  }

  patch() {

  }

  delete() {

  }

}
import { Blog } from '@/types/Blog';
import axios, { AxiosResponse } from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000'
});

class BlogService {
  getAll(): Promise<AxiosResponse<Blog[]>> {
    return axiosClient.get('/blogs');
  }
}

export default new BlogService();

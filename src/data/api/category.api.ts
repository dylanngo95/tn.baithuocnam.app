import { Category } from '../local/models/Category';
import { Config } from '../../config';

export async function getAllCategory(): Promise<Category[]> {
  try {
    const response = await fetch(
      Config.prod.baseUrl + '/category?page=1&limit=100'
    );
    const responseJson = await response.json();
    return Promise.resolve(<Category[]>responseJson.docs);
  } catch (error) {
    return Promise.reject('download category is error');
  }
}
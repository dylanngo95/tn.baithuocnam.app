import { Category } from '../local/models/Category';

export async function getAllCategory(): Promise<Category[]> {
  try {
    let response = await fetch(
      'https://us-central1-baithuocnamhay-93058.cloudfunctions.net/api/v1/category/get'
    );
    let responseJson = await response.json();
    return Promise.resolve(<Category[]>responseJson);
  } catch (error) {
    return Promise.reject('download category is error');
  }
}
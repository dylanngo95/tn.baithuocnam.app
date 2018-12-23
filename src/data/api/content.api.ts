import { Content } from '../local/models/Content';
import { Config } from '../../config';

export async function getAllContent(): Promise<Content[]> {
  try {
    const response = await fetch(
      Config.prod.baseUrl + `/content?page=1&limit=700&q=%7B%22active%22%3A%201%7D`
    );
    const responseJson = await response.json();
    return Promise.resolve(<Content[]>responseJson.docs);
  } catch (error) {
    return Promise.reject('download content is error');
  }
}
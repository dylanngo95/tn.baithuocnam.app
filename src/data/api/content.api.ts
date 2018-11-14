import { Content } from '../local/models/Content';

export async function getAllContent(): Promise<Content[]> {
  try {
    let response = await fetch(
      'https://us-central1-baithuocnamhay-93058.cloudfunctions.net/api/v1/content/get'
    );
    let responseJson = await response.json();
    return Promise.resolve(<Content[]>responseJson);
  } catch (error) {
    return Promise.reject('download content is error');
  }
}
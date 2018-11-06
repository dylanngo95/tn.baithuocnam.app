export async function getAllCategory() {
  try {
    let response = await fetch(
      'https://us-central1-baithuocnamhay-93058.cloudfunctions.net/api/v1/category/get'
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
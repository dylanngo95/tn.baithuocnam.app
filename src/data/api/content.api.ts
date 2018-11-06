export async function getAllContent() {
  try {
    let response = await fetch(
      'https://us-central1-baithuocnamhay-93058.cloudfunctions.net/api/v1/content/get'
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
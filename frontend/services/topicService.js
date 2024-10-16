const API_URL = 'http://localhost:3000/api/topics';

export async function fetchTopics() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des topics');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}

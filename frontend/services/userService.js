export async function fetchUsers() {
  try {
    const response = await fetch('http://localhost:3000/api/users');
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des utilisateurs');
    }
    return await response.json();

  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}

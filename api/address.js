// Vercel Serverless Function - Proxy pour l'API Adresse Data Gouv
export default async function handler(req, res) {
  // Autoriser les requêtes depuis votre domaine
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Gestion du preflight CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Récupérer le paramètre de recherche
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Paramètre "q" manquant' });
  }

  try {
    console.log('🔍 Recherche d\'adresse côté serveur pour:', q);
    
    // Appel à l'API Adresse Data Gouv depuis le serveur
    const response = await fetch(
      `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(q)}&limit=5`,
      {
        headers: {
          'User-Agent': 'MDIAGNOSTIC-Website/1.0'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Réponse API reçue:', data.features?.length || 0, 'adresses');

    // Retourner les données
    return res.status(200).json(data);
    
  } catch (error) {
    console.error('❌ Erreur API:', error);
    return res.status(500).json({ 
      error: 'Erreur lors de la recherche d\'adresse',
      details: error.message 
    });
  }
}

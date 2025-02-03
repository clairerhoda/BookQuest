const SEARCH_API_URL = "https://openlibrary.org/search.json";
const CATEGORY_API_URL = "https://openlibrary.org/subjects";

/**
 * Fetch books based on a search query.
 * @param {string} searchTerm
 * @returns {Promise<object[]>}
 */
export const fetchBooksBySearch = async (searchTerm) => {
  try {
    const response = await fetch(`${SEARCH_API_URL}?q=${encodeURIComponent(searchTerm)}&limit=30`);
    
    if (!response.ok) {
      throw new Error(`Error fetching books: ${response.statusText}`);
    }

    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching books by search:", error);
    return [];
  }
};

/**
 * Fetch books based on a category (subject).
 * @param {string} category
 * @returns {Promise<object[]>}
 */
export const fetchBooksByCategory = async (category) => {
  try {
    const response = await fetch(`${CATEGORY_API_URL}/${encodeURIComponent(category.toLowerCase())}.json`);

    if (!response.ok) {
      throw new Error(`Error fetching category books: ${response.statusText}`);
    }

    const data = await response.json();
    return data.works || []; // Category API returns books under 'works'
  } catch (error) {
    console.error("Error fetching books by category:", error);
    return [];
  }
};

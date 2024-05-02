export const apiData = async () => {
  const apiUrl = "https://api.github.com/search/repositories";
  const query = "q=language:javascript+stars:>=1000";

  try {
    const request = await fetch(`${apiUrl}?${query}&per_page=30&page=1`);
    const data = await request.json();

    return data.items;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to fetch data:", error);
  }
};

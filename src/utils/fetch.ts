const fetchJson = async<T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error("Not Found");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }

}

export default fetchJson;
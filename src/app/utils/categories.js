export const getCategories = async () => {
    const url = "http://localhost:3000/category";
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
};
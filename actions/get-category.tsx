import {isMockMode, categories} from "@/lib/mock-data";
import {Category} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category | null> => {
    if (isMockMode) return categories.find((c) => c.id === id) ?? null;

    const res = await fetch(`${URL}/${id}`);

    return res.json();
};

export default getCategory;

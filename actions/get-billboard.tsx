import {isMockMode, billboards} from "@/lib/mock-data";
import {Billboard} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    if (isMockMode) return billboards.find((b) => b.id === id) ?? billboards[0];

    const res = await fetch(`${URL}/${id}`);

    return res.json();
};

export default getBillboard;

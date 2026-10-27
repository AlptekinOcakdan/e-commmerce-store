import {isMockMode, sizes} from "@/lib/mock-data";
import {Size} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    if (isMockMode) return sizes;

    const res = await fetch(URL);

    return res.json();
};

export default getSizes;

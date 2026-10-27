import {isMockMode, colors} from "@/lib/mock-data";
import {Color} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
    if (isMockMode) return colors;

    const res = await fetch(URL);

    return res.json();
};

export default getColors;

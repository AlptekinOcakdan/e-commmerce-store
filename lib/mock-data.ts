// Demo data used when NEXT_PUBLIC_API_URL is not set (no admin API running).
import {Billboard, Category, Color, Product, Size} from "@/types";

export const isMockMode = !process.env.NEXT_PUBLIC_API_URL;

const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=1200&q=80`;

// Same id the home page asks for, so the home billboard resolves in mock mode.
const homeBillboard: Billboard = {id: "7182f5b7-5a08-4314-a6e2-90d756f321a2", label: "Explore the new collection", imageUrl: img("1441986300917-64674bd600d8")};

export const billboards: Billboard[] = [
    homeBillboard,
    {id: "bb-clothing", label: "Layers for every season", imageUrl: img("1556905055-8f358a7a47b2")},
    {id: "bb-shoes", label: "Step into something new", imageUrl: img("1491553895911-0055eca6402d")},
    {id: "bb-accessories", label: "The finishing touch", imageUrl: img("1483985988355-763728e1935b")},
];

export const categories: Category[] = [
    {id: "clothing", name: "Clothing", billboard: billboards[1]},
    {id: "shoes", name: "Shoes", billboard: billboards[2]},
    {id: "accessories", name: "Accessories", billboard: billboards[3]},
];

export const sizes: Size[] = [
    {id: "size-s", name: "Small", value: "S"},
    {id: "size-m", name: "Medium", value: "M"},
    {id: "size-l", name: "Large", value: "L"},
    {id: "size-os", name: "One Size", value: "OS"},
];

export const colors: Color[] = [
    {id: "color-black", name: "Black", value: "#111111"},
    {id: "color-white", name: "White", value: "#ffffff"},
    {id: "color-red", name: "Red", value: "#dc2626"},
    {id: "color-brown", name: "Brown", value: "#8b5a2b"},
    {id: "color-blue", name: "Blue", value: "#1d4ed8"},
];

const [clothing, shoes, accessories] = categories;
const [s, m, l, os] = sizes;
const [black, white, red, brown, blue] = colors;

const product = (id: string, name: string, price: string, category: Category, size: Size, color: Color, isFeatured: boolean, imageIds: string[]): Product => ({
    id, name, price, category, size, color, isFeatured,
    images: imageIds.map((imageId, i) => ({id: `${id}-img-${i}`, url: img(imageId)})),
});

export const products: Product[] = [
    product("p-white-tee", "Essential White Tee", "29", clothing, m, white, true, ["1521572163474-6864f9cf17ab", "1576566588028-4147f3842f27", "1583743814966-8936f5b7be1a"]),
    product("p-leather-jacket", "Leather Biker Jacket", "249", clothing, l, black, true, ["1551028719-00167b16eac5", "1591047139829-d91aecb6caea"]),
    product("p-denim", "Classic Blue Jeans", "79", clothing, s, blue, false, ["1542272604-787c3835535d", "1434389677669-e08b4cac3105"]),
    product("p-shirt", "Oxford Shirt", "59", clothing, m, white, false, ["1618354691373-d851c5c3a990", "1515886657613-9f3515b0c78f"]),
    product("p-red-runner", "Red Runner", "129", shoes, m, red, true, ["1542291026-7eec264c27ff", "1600185365483-26d7a4cc7519"]),
    product("p-court-sneaker", "Court Sneaker", "99", shoes, l, white, false, ["1595950653106-6c9ebd614d3a", "1606107557195-0e29a4b5b4aa", "1560769629-975ec94e6a86"]),
    product("p-watch", "Minimal Watch", "189", accessories, os, black, true, ["1523275335684-37898b6baf30", "1546868871-7041f2a55e12"]),
    product("p-headphones", "Wireless Headphones", "199", accessories, os, black, false, ["1505740420928-5e560c06d30e"]),
    product("p-sunglasses", "Tortoise Sunglasses", "89", accessories, os, brown, false, ["1572635196237-14b3f281503f"]),
    product("p-tote", "Leather Tote", "159", accessories, os, brown, true, ["1548036328-c9fa89d128fa", "1584917865442-de89df76afd3", "1553062407-98eeb64c6a62"]),
];

// Mirrors the admin API's product filters (undefined = no filter).
export const filterProducts = (query: {categoryId?: string; colorId?: string; sizeId?: string; isFeatured?: boolean}) =>
    products.filter((p) =>
        (!query.categoryId || p.category.id === query.categoryId) &&
        (!query.colorId || p.color.id === query.colorId) &&
        (!query.sizeId || p.size.id === query.sizeId) &&
        (!query.isFeatured || p.isFeatured)
    );

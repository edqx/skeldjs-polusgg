export interface CosmeticBundleModel {
    id: string;
    keyArtUrl: string;
    color: string;
    author: string;
    name: string;
    items: string[];
    priceUsd: number;
    description: string;
    forSale: boolean;
}
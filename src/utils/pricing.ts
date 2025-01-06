export const PRICES = {
  size: {
    small: 45,
    medium: 65,
    large: 85,
  },
  layerPrice: 15,
} as const;

export const calculatePrice = (size: keyof typeof PRICES.size, layers: number): number => {
  const basePrice = PRICES.size[size];
  const layerCost = (layers - 1) * PRICES.layerPrice;
  return basePrice + layerCost;
};

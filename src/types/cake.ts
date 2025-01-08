export type TierColors = string[];

    export interface TierConfig {
      layers: number;
      colors: TierColors;
      outerColor: string;
    }

    export interface CakeDesign {
      tiers: TierConfig[];
      flavor: CakeFlavor;
      frosting: Frosting;
      message: string;
      shape: CakeShape;
      topper: CakeTopper | null;
    }

    export type CakeFlavor = 'vanilla' | 'chocolate' | 'redVelvet' | 'carrot';
    export type Frosting = 'buttercream' | 'fondant' | 'whipped' | 'cream-cheese';
    export type CakeShape = 'round' | 'square';
    export type CakeTopper = 'hearts' | 'stars' | 'flowers' | 'custom' | 'happyBirthday' | 'happyAnniversary';

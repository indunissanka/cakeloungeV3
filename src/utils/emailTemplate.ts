import type { CakeDesign } from '../types/cake';

    export const generateEmailTemplate = (design: CakeDesign): string => {
      const tiers = design.tiers.map((tier, index) => `
        Tier ${index + 1}:
        - Layers: ${tier.layers}
        - Colors: ${tier.colors.join(', ')}
        - Outer Color: ${tier.outerColor}
      `).join('\n');

      return `
        Cake Design Details:
        
        Cake Shape: ${design.shape}
        
        ${tiers}
        
        Cake Flavor: ${design.flavor}
        Frosting Type: ${design.frosting}
        Message: ${design.message || 'No message'}
      `;
    };

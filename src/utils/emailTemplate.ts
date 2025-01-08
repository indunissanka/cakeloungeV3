import type { CakeDesign } from '../types/cake';

    export const generateEmailTemplate = (design: CakeDesign): string => {
      const tiers = design.tiers.map((tier, index) => {
        const colorBoxes = tier.colors.map(color => `<span style="display:inline-block;width:15px;height:15px;background-color:${color};border:1px solid black;margin-right:5px;"></span>`).join('');
        return `
          <tr>
            <td>${index + 1}</td>
            <td>${tier.layers}</td>
            <td>${colorBoxes}</td>
            <td><span style="display:inline-block;width:15px;height:15px;background-color:${tier.outerColor};border:1px solid black;"></span></td>
          </tr>
        `;
      }).join('');

      const renderTopper = () => {
        if (!design.topper) return '';

        const baseStyle = {
          fontSize: '1.2em',
          color: 'black',
          fontFamily: 'Arial, sans-serif',
          display: 'inline-block',
          borderRadius: '50%',
          padding: '0.2em',
          textAlign: 'center',
          width: 'fit-content',
          lineHeight: '1em',
        };

        const woodColor = '#A0522D';

        switch (design.topper) {
          case 'hearts':
            return `<span style="font-size:1.5em; color:red;">♡♡♡</span>`;
          case 'stars':
            return `<span style="font-size:1.5em; color:gold;">☆☆☆</span>`;
          case 'flowers':
            return `<span style="font-size:1.5em; color:pink;">✿✿✿</span>`;
          case 'custom':
            return `<span style="font-size:1.2em; color:gray;">Custom Topper</span>`;
          case 'happyBirthday':
            return (
              `<div style="${Object.entries(baseStyle).map(([key, value]) => `${key}:${value};`).join('')} background-color: ${woodColor}; color: white;">
                <span style="display: block; font-size: 1em; line-height: 1em;">Happy</span>
                <span style="display: block; font-size: 1em; line-height: 1em;">Birthday</span>
              </div>`
            );
          case 'happyAnniversary':
            return (
              `<div style="${Object.entries(baseStyle).map(([key, value]) => `${key}:${value};`).join('')} background-color: ${woodColor}; color: white;">
                <span style="display: block; font-size: 1em; line-height: 1em;">Happy</span>
                <span style="display: block; font-size: 1em; line-height: 1em;">Anniversary</span>
              </div>`
            );
          default:
            return '';
        }
      };

      return `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #e91e63; border-bottom: 2px solid #e91e63; padding-bottom: 5px;">Cake Design Details</h2>
          <p><strong>Cake Shape:</strong> ${design.shape}</p>
          <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
            <thead style="background-color: #f8f8f8;">
              <tr>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Tier</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Layers</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Colors</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Outer Color</th>
              </tr>
            </thead>
            <tbody>
              ${tiers}
            </tbody>
          </table>
          <p><strong>Cake Flavor:</strong> ${design.flavor}</p>
          <p><strong>Frosting Type:</strong> ${design.frosting}</p>
          <p><strong>Message:</strong> ${design.message || 'No message'}</p>
          <p><strong>Topper:</strong> ${renderTopper()}</p>
        </div>
      `;
    };

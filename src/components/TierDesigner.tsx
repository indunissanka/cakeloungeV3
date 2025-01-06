import React from 'react';
    import { ColorPicker } from './ColorPicker';
    import type { TierConfig } from '../types/cake';

    interface TierDesignerProps {
      tier: TierConfig;
      tierIndex: number;
      onUpdate: (tierIndex: number, updatedTier: TierConfig) => void;
    }

    export function TierDesigner({ tier, tierIndex, onUpdate }: TierDesignerProps) {
      const handleLayerCountChange = (layers: number) => {
        const newColors = [...tier.colors];
        while (newColors.length < layers) {
          newColors.push('#FFB5E8');
        }
        onUpdate(tierIndex, { ...tier, layers, colors: newColors.slice(0, layers) });
      };

      const handleColorChange = (layerIndex: number, color: string) => {
        const newColors = [...tier.colors];
        newColors[layerIndex] = color;
        onUpdate(tierIndex, { ...tier, colors: newColors });
      };

      const handleOuterColorChange = (color: string) => {
        onUpdate(tierIndex, { ...tier, outerColor: color });
      };

      return (
        <div className="border border-pink-100 rounded-lg p-4 bg-white">
          <h3 className="text-lg font-medium mb-4">Tier {tierIndex + 1}</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Layers (1-6)
              </label>
              <input
                type="number"
                min="1"
                max="6"
                value={tier.layers}
                onChange={(e) => handleLayerCountChange(parseInt(e.target.value))}
                className="w-24 rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            {Array.from({ length: tier.layers }).map((_, layerIndex) => (
              <div key={layerIndex} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Layer {layerIndex + 1} Color
                </label>
                <ColorPicker
                  color={tier.colors[layerIndex]}
                  onChange={(color) => handleColorChange(layerIndex, color)}
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Outer Color
              </label>
              <ColorPicker
                color={tier.outerColor}
                onChange={handleOuterColorChange}
              />
            </div>
          </div>
        </div>
      );
    }

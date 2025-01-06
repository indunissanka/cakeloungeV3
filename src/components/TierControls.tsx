import React from 'react';
import { TierDesigner } from './TierDesigner';
import type { TierConfig } from '../types/cake';

interface TierControlsProps {
  tiers: TierConfig[];
  onTierUpdate: (tierIndex: number, updatedTier: TierConfig) => void;
  onAddTier: () => void;
  onRemoveTier: (index: number) => void;
}

export function TierControls({ tiers, onTierUpdate, onAddTier, onRemoveTier }: TierControlsProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif text-gray-900">Customize Tiers</h2>
        {tiers.length < 6 && (
          <button
            onClick={onAddTier}
            className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
          >
            Add Tier
          </button>
        )}
      </div>

      <div className="space-y-4">
        {tiers.map((tier, index) => (
          <div key={index} className="relative">
            <TierDesigner
              tier={tier}
              tierIndex={index}
              onUpdate={onTierUpdate}
            />
            {tiers.length > 1 && (
              <button
                onClick={() => onRemoveTier(index)}
                className="absolute top-4 right-4 text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

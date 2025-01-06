import React from 'react';
    import type { TierConfig } from '../types/cake';

    interface CakePreviewProps {
      tiers: TierConfig[];
    }

    export function CakePreview({ tiers }: CakePreviewProps) {
      return (
        <div className="flex flex-col items-center justify-end h-[400px] rounded-lg p-4">
          {[...tiers].reverse().map((tier, index) => {
            const reversedIndex = tiers.length - 1 - index;
            const width = 200 - (reversedIndex * 25);

            return (
              <div
                key={reversedIndex}
                className="relative"
                style={{ width: `${width}px` }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -5,
                    left: -5,
                    right: -5,
                    bottom: -5,
                    border: `5px solid ${tier.outerColor}`,
                    borderRadius: '5px',
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                />
                {[...Array(tier.layers)].map((_, layerIndex) => (
                  <div
                    key={layerIndex}
                    className="w-full h-8 rounded-sm relative"
                    style={{
                      backgroundColor: tier.colors[layerIndex],
                      transform: 'translateY(-2px)',
                      zIndex: 2,
                    }}
                  />
                ))}
              </div>
            );
          })}
        </div>
      );
    }

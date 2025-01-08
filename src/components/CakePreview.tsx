import React from 'react';
    import type { TierConfig, CakeTopper } from '../types/cake';

    interface CakePreviewProps {
      tiers: TierConfig[];
      topper?: CakeTopper | null;
    }

    export function CakePreview({ tiers, topper }: CakePreviewProps) {
      const calculateTopTierHeight = () => {
        if (tiers.length === 0) return 0;
        let totalHeight = 0;
        for (let i = 0; i < tiers.length - 1; i++) {
          totalHeight += tiers[i].layers * 32;
        }
        return totalHeight + (tiers[tiers.length - 1].layers * 32);
      };

      const topTierHeight = React.useMemo(calculateTopTierHeight, [tiers]);

      const renderTopper = () => {
        if (!topper) return null;

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

        switch (topper) {
          case 'hearts':
            return <span style={{ fontSize: '1.5em', color: 'red' }}>♡♡♡</span>;
          case 'stars':
            return <span style={{ fontSize: '1.5em', color: 'gold' }}>☆☆☆</span>;
          case 'flowers':
            return <span style={{ fontSize: '1.5em', color: 'pink' }}>✿✿✿</span>;
          case 'custom':
            return (
              <div style={{...baseStyle, backgroundColor: woodColor, color: 'white'}}>
                <span style={{ display: 'block', fontSize: '1em', lineHeight: '1em' }}>Custom</span>
                <span style={{ display: 'block', fontSize: '1em', lineHeight: '1em' }}>Topper</span>
              </div>
            );
          case 'happyBirthday':
            return (
              <div style={{...baseStyle, backgroundColor: woodColor, color: 'white'}}>
                <span style={{ display: 'block', fontSize: '1em', lineHeight: '1em' }}>Happy</span>
                <span style={{ display: 'block', fontSize: '1em', lineHeight: '1em' }}>Birthday</span>
              </div>
            );
          case 'happyAnniversary':
            return (
              <div style={{...baseStyle, backgroundColor: woodColor, color: 'white'}}>
                <span style={{ display: 'block', fontSize: '1em', lineHeight: '1em' }}>Happy</span>
                <span style={{ display: 'block', fontSize: '1em', lineHeight: '1em' }}>Anniversary</span>
              </div>
            );
          default:
            return null;
        }
      };

      return (
        <div className="flex flex-col items-center justify-end h-[400px] rounded-lg p-4 relative">
          {topper && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 text-center"
              style={{ top: `calc(100% - ${topTierHeight + 60}px)` }}
            >
              {renderTopper()}
            </div>
          )}
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

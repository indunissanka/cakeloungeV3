import React, { useState } from 'react';
    import type { CakeDesign, TierConfig, CakeFlavor, Frosting, CakeShape } from '../types/cake';
    import { Header } from './Header';
    import { CakePreview } from './CakePreview';
    import { TierControls } from './TierControls';
    import { CakeOptions } from './CakeOptions';
    import { EmailForm } from './EmailForm';
    import { AboutUs } from './AboutUs';

    export default function CakeCustomizer() {
      const [design, setDesign] = useState<CakeDesign>({
        tiers: [
          {
            layers: 2,
            colors: ['#FFB5E8', '#FFC9DE'],
            outerColor: '#FFF5E4',
          },
        ],
        flavor: 'vanilla',
        frosting: 'buttercream',
        message: '',
        shape: 'round',
      });

      const handleTierUpdate = (tierIndex: number, updatedTier: TierConfig) => {
        const newTiers = [...design.tiers];
        newTiers[tierIndex] = updatedTier;
        setDesign({ ...design, tiers: newTiers });
      };

      const addTier = () => {
        if (design.tiers.length < 6) {
          setDesign({
            ...design,
            tiers: [
              ...design.tiers,
              { layers: 1, colors: ['#FFB5E8'], outerColor: '#FFF5E4' },
            ],
          });
        }
      };

      const removeTier = (index: number) => {
        setDesign({
          ...design,
          tiers: design.tiers.filter((_, i) => i !== index),
        });
      };

      return (
        <div className="min-h-screen bg-[#FDF8F5]">
          <Header />
          
          <main className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cake Preview */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-serif text-gray-900 mb-2">Your Cake Design</h2>
                <p className="text-gray-700 text-sm mb-4">
                  We invite you to design your cake according to your preferences. Once we have reviewed your design, we will reach out to you to discuss the possibility of proceeding with your order.
                  <br />
                  <br />
                  Thank you for considering us, and we look forward to working with you.
                </p>
                <CakePreview tiers={design.tiers} />
                <div className="mt-6">
                  <EmailForm design={design} />
                </div>
              </div>

              {/* Customization Controls */}
              <div className="space-y-6">
                <TierControls
                  tiers={design.tiers}
                  onTierUpdate={handleTierUpdate}
                  onAddTier={addTier}
                  onRemoveTier={removeTier}
                />

                <CakeOptions
                  flavor={design.flavor}
                  frosting={design.frosting}
                  message={design.message}
                  shape={design.shape}
                  onFlavorChange={(flavor: CakeFlavor) => setDesign({ ...design, flavor })}
                  onFrostingChange={(frosting: Frosting) => setDesign({ ...design, frosting })}
                  onMessageChange={(message: string) => setDesign({ ...design, message })}
                  onShapeChange={(shape: CakeShape) => setDesign({...design, shape})}
                />
              </div>
            </div>
          </main>
          <AboutUs />
        </div>
      );
    }

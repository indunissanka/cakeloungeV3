import React from 'react';
    import type { CakeFlavor, Frosting, CakeShape, CakeTopper } from '../types/cake';

    interface CakeOptionsProps {
      flavor: CakeFlavor;
      frosting: Frosting;
      message: string;
      shape: CakeShape;
      topper: CakeTopper | null;
      onFlavorChange: (flavor: CakeFlavor) => void;
      onFrostingChange: (frosting: Frosting) => void;
      onMessageChange: (message: string) => void;
      onShapeChange: (shape: CakeShape) => void;
      onTopperChange: (topper: CakeTopper | null) => void;
    }

    export function CakeOptions({
      flavor,
      frosting,
      message,
      shape,
      topper,
      onFlavorChange,
      onFrostingChange,
      onMessageChange,
      onShapeChange,
      onTopperChange,
    }: CakeOptionsProps) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cake Shape
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="round"
                  name="cakeShape"
                  value="round"
                  checked={shape === 'round'}
                  onChange={(e) => onShapeChange(e.target.value as CakeShape)}
                  className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300"
                />
                <label htmlFor="round" className="ml-2 text-gray-700">
                  Round
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="square"
                  name="cakeShape"
                  value="square"
                  checked={shape === 'square'}
                  onChange={(e) => onShapeChange(e.target.value as CakeShape)}
                  className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300"
                />
                <label htmlFor="square" className="ml-2 text-gray-700">
                  Square
                </label>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cake Flavor
            </label>
            <select
              value={flavor}
              onChange={(e) => onFlavorChange(e.target.value as CakeFlavor)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="vanilla">Vanilla</option>
              <option value="chocolate">Chocolate</option>
              <option value="redVelvet">Red Velvet</option>
              <option value="carrot">Carrot</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frosting Type
            </label>
            <select
              value={frosting}
              onChange={(e) => onFrostingChange(e.target.value as Frosting)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="buttercream">Buttercream</option>
              <option value="fondant">Fondant</option>
              <option value="whipped">Whipped Cream</option>
              <option value="cream-cheese">Cream Cheese</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cake Topper
            </label>
            <select
              value={topper || ''}
              onChange={(e) => onTopperChange(e.target.value as CakeTopper)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="">None</option>
              <option value="hearts">Hearts</option>
              <option value="stars">Stars</option>
              <option value="flowers">Flowers</option>
              <option value="custom">Custom</option>
              <option value="happyBirthday">Happy Birthday</option>
              <option value="happyAnniversary">Happy Anniversary</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cake Message
            </label>
            <textarea
              value={message}
              onChange={(e) => onMessageChange(e.target.value)}
              placeholder="Enter your cake message..."
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              rows={3}
            />
          </div>
        </div>
      );
    }

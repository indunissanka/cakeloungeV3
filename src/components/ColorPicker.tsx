import React from 'react';

    interface ColorPickerProps {
      color: string;
      onChange: (color: string) => void;
    }

    export function ColorPicker({ color, onChange }: ColorPickerProps) {
      const colors = [
        '#FFFFFF', // White
        '#F0F0F0', // Light Gray
        '#D3D3D3', // Gray
        '#A9A9A9', // Dark Gray
        '#000000', // Black
        '#FF9B9B', // Soft Pink
        '#FFB5E8', // Light Pink
        '#FFC9DE', // Baby Pink
        '#F1CBFF', // Lavender
        '#E5B3FE', // Light Purple
        '#DCD3FF', // Periwinkle
        '#B5DEFF', // Sky Blue
        '#95E1D3', // Mint
        '#A8E6CF', // Light Green
        '#FDFFAB', // Light Yellow
        '#FFD4B2', // Peach
        '#FFF5E4', // Cream
        '#FF6B6B', // Red
        '#FF8A65', // Orange
        '#FFD700', // Gold
        '#90EE90', // Light Green
        '#00CED1', // Dark Turquoise
        '#1E90FF', // Dodger Blue
        '#8A2BE2', // Blue Violet
        '#A52A2A', // Brown
        '#800000', // Maroon
        '#556B2F', // Dark Olive Green
        '#008080', // Teal
        '#000080', // Navy
        '#4B0082', // Indigo
      ];

      return (
        <div className="flex flex-wrap gap-2">
          {colors.map((c) => (
            <button
              key={c}
              className={`w-6 h-6 rounded-full border-2 ${
                color === c ? 'border-gray-600' : 'border-transparent'
              }`}
              style={{ backgroundColor: c }}
              onClick={() => onChange(c)}
            />
          ))}
        </div>
      );
    }

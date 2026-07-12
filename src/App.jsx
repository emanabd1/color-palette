import { useState } from 'react';
import ColorButton from './components/ColorButton';
import ColorPreview from './components/ColorPreview';

const COLORS = [
  { name: 'Red', hex: '#ef4444', emoji: '❤️' },
  { name: 'Green', hex: '#22c55e', emoji: '🍀' },
  { name: 'Blue', hex: '#3b82f6', emoji: '💧' },
  { name: 'Purple', hex: '#a855f7', emoji: '💜' },
  { name: 'Yellow', hex: '#eab308', emoji: '💛' },
];

export default function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [hexInput, setHexInput] = useState('');

  const handleCustomSubmit = () => {
    setSelectedColor({ name: 'Custom', hex: hexInput, emoji: '✏️' });
  };

  return (
    <div className="p-8 max-w-xl mx-auto font-sans">
      <h1 className="text-3xl font-extrabold mb-2">Color Palette Picker</h1>
      
      {/* Buttons Mapping */}
      <div className="flex flex-wrap gap-3 mb-6">
        {COLORS.map((color) => (
          <ColorButton 
            key={color.name} 
            color={color} 
            emoji={color.emoji}
            onSelect={setSelectedColor} 
            isActive={selectedColor?.name === color.name} 
          />
        ))}
      </div>

      {/* Custom Input Section */}
      <div className="flex gap-2 mb-6 p-4 border rounded-xl bg-gray-50">
        <input 
          className="p-2 border rounded flex-1"
          placeholder="Enter HEX (e.g. #FF5733)"
          onChange={(e) => setHexInput(e.target.value)}
        />
        <button 
          onClick={handleCustomSubmit}
          className="bg-black text-white px-4 py-2 rounded font-bold"
        >
          Apply ✏️
        </button>
      </div>

      <ColorPreview selectedColor={selectedColor} />

      {selectedColor && (
        <button onClick={() => setSelectedColor(null)} className="mt-4 w-full py-2 border rounded">
          🔄 Reset
        </button>
      )}
    </div>
  );
}
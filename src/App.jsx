import { useState } from 'react';
import Card from './components/Card';
import ColorButton from './components/ColorButton';
import ColorPreview from './components/ColorPreview';

const COLORS = [
  { name: 'Red', hex: '#ef4444', emoji: '🟥' },
  { name: 'Blue', hex: '#3b82f6', emoji: '🟦' },
  { name: 'Green', hex: '#22c55e', emoji: '🟩' },
  { name: 'Yellow', hex: '#eab308', emoji: '🟨' },
  { name: 'Purple', hex: '#a855f7', emoji: '🟪' },
];

export default function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [hexInput, setHexInput] = useState('');

  const applyCustomColor = () => {
    setSelectedColor({ name: 'Custom', hex: hexInput });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card>
        <h1 className="text-2xl font-bold mb-6 text-center">Color Picker</h1>
        
        <ColorPreview color={selectedColor} />

        <div className="grid grid-cols-5 gap-2 my-6">
          {COLORS.map((c) => (
            <ColorButton 
              key={c.name} 
              color={c} 
              onSelect={setSelectedColor} 
              isActive={selectedColor?.hex === c.hex}
              emoji={c.emoji}
            />
          ))}
        </div>

        <div className="flex gap-2 mb-4">
          <input 
            type="text" 
            placeholder="#FF5733"
            className="bg-gray-800 p-3 rounded-xl flex-1 border border-gray-700 outline-none focus:border-white transition-colors"
            onChange={(e) => setHexInput(e.target.value)}
          />
          <button 
            onClick={applyCustomColor}
            className="bg-white text-black px-4 rounded-xl font-bold hover:bg-gray-200 transition-colors"
          >
            Apply
          </button>
        </div>

        <button 
          onClick={() => setSelectedColor(null)}
          className="w-full py-2 text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          🔄 Reset
        </button>
      </Card>
    </div>
  );
}
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
  // Initializing with '' (empty string) prevents the uncontrolled component warning
  const [selectedColor, setSelectedColor] = useState(null);
  const [hexInput, setHexInput] = useState('');
  const [error, setError] = useState(null);

  const handleCustomSubmit = () => {
    // Validate if the string is a recognized CSS color
    const s = new Option().style;
    s.color = hexInput;

    if (s.color !== '' && hexInput.trim() !== '') {
      setSelectedColor({ name: hexInput.toUpperCase(), hex: hexInput, emoji: '✏️' });
      setHexInput('');
      setError(null);
    } else {
      setError("Invalid color! Please enter a valid HEX, RGB, or name.");
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-gray-100">
        <h1 className="text-3xl font-black text-gray-900 mb-8 text-center tracking-tight">
          Color Palette Picker
        </h1>
        
        {/* Buttons Row */}
        <div className="flex justify-center gap-3 mb-8">
          {COLORS.map((c) => (
            <ColorButton 
              key={c.name} color={c} emoji={c.emoji}
              onSelect={() => { setSelectedColor(c); setHexInput(''); setError(null); }}
              isActive={selectedColor?.name === c.name} 
            />
          ))}
        </div>

        {/* Input Box */}
        <div className="flex gap-2 bg-gray-900 p-2 rounded-2xl shadow-inner">
          <input 
            value={hexInput}
            onChange={(e) => setHexInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCustomSubmit()}
            className="p-3 bg-transparent text-white flex-1 outline-none px-4"
            placeholder="Enter HEX (e.g. #FF5733)"
          />
          <button 
            onClick={handleCustomSubmit}
            className="bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-400 transition"
          >
            Apply ✏️
          </button>
        </div>

        {/* Error Toast */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 font-bold rounded-xl text-center animate-bounce text-sm">
            {error}
          </div>
        )}

        <ColorPreview selectedColor={selectedColor} />

        <button 
          onClick={() => { setSelectedColor(null); setHexInput(''); setError(null); }} 
          className="mt-6 w-full py-3 text-gray-400 hover:text-indigo-600 font-semibold transition border-t border-gray-100"
        >
          🔄 Reset Selection
        </button>
      </div>
    </div>
  );
}
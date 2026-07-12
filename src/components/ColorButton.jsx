export default function ColorButton({ color, onSelect, isActive, emoji }) {
  return (
    <button
      onClick={() => onSelect(color)}
      className={`p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 active:scale-95
        ${isActive ? 'ring-4 ring-white shadow-lg shadow-white/20' : 'hover:shadow-md hover:bg-white/10'}
        bg-gray-800 border-2 ${isActive ? 'border-white' : 'border-transparent'}`}
    >
      <span className="text-3xl">{emoji}</span>
    </button>
  );
}
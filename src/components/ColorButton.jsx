export default function ColorButton({ color, emoji, onSelect, isActive }) {
  return (
    <button
      onClick={() => onSelect(color)}
      className={`p-3 text-2xl rounded-xl border-2 transition-all duration-200 
        ${isActive ? 'border-black shadow-lg scale-105 ring-2 ring-blue-500' : 'border-gray-200 hover:border-gray-400'}`}
    >
      {emoji}
      <span className="ml-2 text-base font-medium">{color.name}</span>
    </button>
  );
}
export default function ColorButton({ color, emoji, onSelect, isActive }) {
  return (
    <button
      onClick={onSelect}
      className={`flex flex-col items-center w-20 p-3 rounded-2xl border transition-all duration-300
        ${isActive 
          ? 'border-indigo-500 bg-indigo-50 shadow-lg scale-105' 
          : 'border-gray-100 bg-white hover:border-indigo-200 hover:shadow-md'}`}
    >
      <span className="text-3xl mb-1">{emoji}</span>
      <span className="text-xs font-bold text-gray-700">{color.name}</span>
    </button>
  );
}
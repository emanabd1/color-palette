export default function ColorPreview({ color }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-black/20 rounded-2xl border border-white/5">
      {color ? (
        <div className="text-center animate-in fade-in duration-500">
          <div 
            className="w-32 h-32 rounded-2xl shadow-2xl mb-4 border-4 border-white/20"
            style={{ backgroundColor: color.hex }}
          />
          <p className="font-bold text-xl">{color.name || "Custom"}</p>
          <p className="text-slate-400 font-mono text-sm">{color.hex}</p>
        </div>
      ) : (
        <div className="h-32 flex items-center justify-center text-slate-500 italic">
          No color selected yet
        </div>
      )}
    </div>
  );
}
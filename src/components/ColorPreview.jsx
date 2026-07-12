export default function ColorPreview({ selectedColor }) {
  return (
    <div className="flex flex-col items-center py-8 border-y border-gray-100">
      <h2 className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-6">Preview</h2>
      
      {selectedColor ? (
        <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
          <div 
            className="w-32 h-32 rounded-3xl shadow-xl mb-4 border-4 border-white" 
            style={{ backgroundColor: selectedColor.hex }} 
          />
          <p className="font-bold text-gray-800 text-lg">{selectedColor.name}</p>
        </div>
      ) : (
        /* The "Empty" State Box */
        <div className="w-32 h-32 rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-gray-400">
          <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
          <p className="text-xs font-semibold text-center px-2">No color<br/>selected yet</p>
        </div>
      )}
    </div>
  );
}
export default function ColorPreview({ selectedColor }) {
  return (
    <div className="mt-6 text-center">
      <h2 className="font-bold text-lg mb-2">Preview:</h2>
      {selectedColor ? (
        <div className="flex flex-col items-center">
          <div 
            className="w-32 h-32 rounded-lg shadow-md mb-2 border border-gray-200" 
            style={{ backgroundColor: selectedColor.hex }} 
          />
          <p className="font-semibold text-lg">Selected Color: {selectedColor.name}</p>
        </div>
      ) : (
        <p className="text-gray-500 italic">No color selected yet</p>
      )}
    </div>
  );
}
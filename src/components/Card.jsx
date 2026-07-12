export default function Card({ children }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/10 w-full max-w-md">
      {children}
    </div>
  );
}
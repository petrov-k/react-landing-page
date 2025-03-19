
export const Button = ({ onGetStarted }) => {
  return (
    <button
      onClick={onGetStarted}
      className="w-full bg-black text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-lg hover:bg-gray-800 transition-colors"
      aria-label="Proceed to payment"
    >
      Отримати доступ
    </button>
  );
};

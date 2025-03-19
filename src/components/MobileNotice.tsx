export const MobileNotice = () => {
  return (
    <div className="hidden lg:block sticky top-0 z-50">
    <div className="bg-purple-500/80 backdrop-blur-sm text-white px-4 py-8 mb-1 rounded-3xl">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span>Цей сайт оптимізовано для мобільних пристроїв</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  </div>
  );
};


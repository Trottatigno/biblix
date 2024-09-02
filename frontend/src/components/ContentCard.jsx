function ContentCard({ children }) {
  return (
    <div className="flex flex-col bg-gray-200 rounded-lg p-3 m-3 w-64 h-96 transform transition-transform duration-300 hover:scale-105 justify-center items-center">
      {children}
    </div>
  );
}

export default ContentCard;

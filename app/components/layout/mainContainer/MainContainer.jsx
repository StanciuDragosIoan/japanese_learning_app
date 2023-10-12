export const MainContainer = ({ children }) => {
  return (
    <div className="bg-indigo-500 min-h-screen text-white">
      <div className="container mx-auto">{children} </div>
    </div>
  );
};

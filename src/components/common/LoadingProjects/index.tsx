const LoadingProjects = () => {
  //code a three coloum shimmer ui with 80% width and black transparent color with 100vh height use tailwind css only
  return (
    <div className="flex justify-center gap-10 h-[500px] top-0">
      <div className="hidden lg:block w-1/4 h-full bg-gray-900 rounded-md animate-pulse "></div>
      <div className="hidden sm:w-2/5 sm:block lg:w-1/4 h-full bg-gray-900 rounded-md animate-pulse"></div>
      <div className="w-4/5 sm:w-2/5 lg:w-1/4 h-full bg-gray-900 rounded-md animate-pulse"></div>
    </div>
  );
};

export default LoadingProjects;

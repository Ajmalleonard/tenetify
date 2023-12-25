function flexButton() {
  return (
    <div>
      <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
        <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
          <div className="bg-lime-200 flex items-center gap-1 p-2 rounded-md">
            <span>Uiverse.io</span>
          </div>
          <div className="shadow-md bg-lime-200 absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
          <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
            <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
          </div>
        </div>

        <div className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-lime-200 to-yellow-200 p-3 rounded-full cursor-pointer duration-300">
          <span className="text-[0px] group-hover:text-sm duration-300">
            Check Our Website
          </span>
        </div>
      </div>
    </div>
  );
}

export default flexButton;

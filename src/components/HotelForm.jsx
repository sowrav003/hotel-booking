


const HotelForm = () => {
  return (
    <div className="relative" >
      <form
  className=" bg-white rounded-3xl shadow-2xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-[2fr_1.6fr_1.6fr_.8fr_auto] gap-4 md:gap-2 items-center text-start"
>

  {/* Destination */}
  <div className="px-4 md:border-r border-gray-200">
    <label className="block text-xs uppercase tracking-widest text-[#b59567] mb-2">
      Destination
    </label>

    <input
      type="text"
      placeholder="Country,city..."
      className="
      w-full
      outline-1
      outline-gray-200
      rounded
      px-2

      md:outline-none
      text-lg
      text-gray-700
      placeholder:text-gray-400"
    />
  </div>

  {/* Check In */}
  <div className="px-4 md:border-r border-gray-200">
    <label className="block text-xs uppercase tracking-widest text-[#b59567] mb-2">
      Check In
    </label>

    <input
      type="date"
      className="
      w-full
      outline-none
      text-lg
      text-gray-700"
    />
  </div>

  {/* Check Out */}
  <div className="px-4 md:border-r border-gray-200">
    <label className="block text-xs uppercase tracking-widest text-[#b59567] mb-2">
      Check Out
    </label>

    <input
      type="date"
      className="
      w-full
      outline-none
      text-lg
      text-gray-700"
    />
  </div>

  {/* Guests */}
  <div className="px-4 md:border-r border-gray-200">
    <label className="block text-xs uppercase tracking-widest text-[#b59567] mb-2">
      Guests
    </label>

    <input
      type="number"
      min="1"
      placeholder="1"
      className="
      w-full
      outline-none
      text-lg
      text-gray-700"
    />
  </div>

  {/* Button */}
  <button
    className="
    h-[72px]
    px-10
    bg-[#b59567]
    hover:bg-[#a38357]
    text-white
    font-medium
    rounded-2xl
    transition-all
    duration-300"
  >
    Check Availability
  </button>

</form>
    </div>
  )
}

export default HotelForm
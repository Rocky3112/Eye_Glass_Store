import React from "react";

const EyeglassesCategories = () => {
  return (
    <section className="py-10 px-4 bg-[#f4fdff]">
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-6">
        {/* Sidebar */}
        <div className="col-span-1 bg-gradient-to-b from-gray-100 to-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Eyeglasses</h2>
          <div className="space-y-3">
              <img className="h-[110px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s" alt="Young Fashion" />
              <img className="h-[110px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s" alt="Young Fashion" />
              <img className="h-[110px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s" alt="Young Fashion" />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="col-span-4 grid grid-cols-2 gap-4">
          {/* Men */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-md font-semibold mb-2">Men</h3>
            <div className="grid grid-cols-4 gap-2">
              <img className="rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gIfzn0DR6BxHfwfGr58JznE3WtO-Z318Ag&s" alt="Men" />
              <img className="rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gIfzn0DR6BxHfwfGr58JznE3WtO-Z318Ag&s" alt="Men" />
              <img className="rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gIfzn0DR6BxHfwfGr58JznE3WtO-Z318Ag&s" alt="Men" />
              <img className="rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gIfzn0DR6BxHfwfGr58JznE3WtO-Z318Ag&s" alt="Men" />
            </div>
          </div>

          {/* Women */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-md font-semibold mb-2">Women</h3>
            <div className="grid grid-cols-4 gap-2">
              <img className="rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwVV44pcx-GTYEdkPDkNz9anUsWlYtzV-CA&s" alt="Women" />
              <img className="rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwVV44pcx-GTYEdkPDkNz9anUsWlYtzV-CA&s" alt="Women" />
              <img className="rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwVV44pcx-GTYEdkPDkNz9anUsWlYtzV-CA&s" alt="Women" />
              <img className="rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwVV44pcx-GTYEdkPDkNz9anUsWlYtzV-CA&s" alt="Women" />
            </div>
          </div>

          {/* Baby */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-md font-semibold mb-2">Baby</h3>
            <div className="grid grid-cols-4 gap-2">
              <img className="rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8Q0P8V29OqGxrDh0TuQVGG5eE_hZtandZQ&s" alt="Baby" />
              <img className="rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8Q0P8V29OqGxrDh0TuQVGG5eE_hZtandZQ&s" alt="Baby" />
              <img className="rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8Q0P8V29OqGxrDh0TuQVGG5eE_hZtandZQ&s" alt="Baby" />
              <img className="rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8Q0P8V29OqGxrDh0TuQVGG5eE_hZtandZQ&s" alt="Baby" />
            </div>
          </div>

          {/* Young Fashion */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-md font-semibold mb-2">Young Fashion</h3>
            <div className="grid grid-cols-4 gap-2">
              <img className="h-[110px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s" alt="Young Fashion" />
              <img className="h-[110px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s" alt="Young Fashion" />
              <img className="h-[110px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s" alt="Young Fashion" />
              <img className="h-[110px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s" alt="Young Fashion" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EyeglassesCategories;

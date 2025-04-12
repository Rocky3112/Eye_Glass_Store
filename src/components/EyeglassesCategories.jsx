import React from "react";

const EyeglassesCategories = () => {
  const categories = [
    {
      title: "Men",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gIfzn0DR6BxHfwfGr58JznE3WtO-Z318Ag&s",
    },
    {
      title: "Women",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwVV44pcx-GTYEdkPDkNz9anUsWlYtzV-CA&s",
    },
    {
      title: "Baby",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8Q0P8V29OqGxrDh0TuQVGG5eE_hZtandZQ&s",
    },
    {
      title: "Young Fashion",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s",
    },
  ];

  return (
    <section className="py-10 px-4 bg-[#f4fdff]">
      <div className="lg:max-w-7xl mx-auto lg:grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* Sidebar */}
        <aside className="bg-gradient-to-b from-gray-100 to-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Eyeglasses</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((_, i) => (
              <img
                key={i}
                className="h-[110px] lg:w-full object-cover rounded-md"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s"
                alt="Sidebar Ad"
              />
            ))}
          </div>
        </aside>

        {/* Categories */}
        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-4 lg:flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>
              <div className="lg:grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[...Array(4)].map((_, index) => (
                  <img
                    key={index}
                    className="h-[100px] lg:w-full object-cover rounded-md"
                    src={cat.img}
                    alt={`${cat.title} ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EyeglassesCategories;

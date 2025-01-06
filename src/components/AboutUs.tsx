import React from 'react';

    export function AboutUs() {
      return (
        <section className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">About The Cake Lounge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://cakeloungephots.pages.dev/aboutus.jpg"
                  alt="Cake Lounge Creation"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  My name is Buddhika Sri Nissanka, and I truly believe that great food is not only about its taste but also about the people with whom you enjoy it.
                </p>
                <p className="text-gray-700">
                  The Cake Lounge is a family-owned business, proudly led by two sisters, with two distinctive studios located in Colombo, Sri Lanka, and Paris, France. For over twenty years, we have been dedicated to our passion for cakes and baking.
                </p>
                <p className="text-gray-700">
                  It has been our lifelong dream to open our own bakery, and we are delighted to have made that dream a reality. Our bakery is a fully registered food establishment, holding a complete hygiene certification, and we are proud of our excellent rating on the doors.
                </p>
                <p className="text-gray-700">
                  At The Cake Lounge, we take great care in selecting only the finest ingredients, including free-range eggs, organic sugars, and high-quality imported cake icings, wherever possible. All our products are meticulously handcrafted and decorated to order, following individual design specifications to ensure freshness and exceptional flavor in every bite.
                </p>
                <p className="text-gray-700">
                  We look forward to sharing our passion for baking with you at The Cake Lounge, both in Colombo and Paris.
                </p>
                <p className="text-gray-700">
                  Warm regards,
                  <br />
                  Buddhika Sri Nissanka
                  <br />
                  The Cake Lounge, Colombo & Paris
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    }

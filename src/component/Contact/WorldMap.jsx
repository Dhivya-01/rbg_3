import { useState } from "react";
import { MapPin } from "lucide-react";

export function WorldMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Location data
  const locations = [
    {
      id: 1,
      place: "Coimbatore",
      name: "SREC Spark Incubation Foundation",
      location: "AIDC-1",
      address:
        "Sri Ramakrishna Engineering College, Coimbatore, Tamil Nadu 641022, IN.",
      direction:
        "https://www.bing.com/maps?osid=3ff44d05-5746-41ec-a03a-0459c9e165ed&cp=11.060858~76.944651&lvl=13.32&pi=0&imgid=fed65f40-8ac6-4624-84b6-1b5216585a90&v=2&sV=2&form=S00027",
      coordinates: { x: 40, y: 30 }, // Adjusted for visual representation
    },
    {
      id: 2,
      place: "Hyderabad",
      name: "ITIC Incubator, Indian Institute of Technology",
      location: "AIDC-2",
      address: "Hyderabad Kandi, Sangareddy, Telangana INDIA – 502284",
      direction:
        "https://www.bing.com/maps?&ty=30&q=Hyderabad%20Kandi%2C%20Sangareddy%2C%20Telangana%20INDIA%20%E2%80%93%20502284&vdpid=7462382632966291457&mb=17.711327~78.070854~17.427224~78.218826&cardbg=%23F98745&dt=1758882600000&tt=Kandi%2C%20Sangareddy%20District%2C%20Telangana&tsts0=%2526ty%253D30%2526q%253DHyderabad%252520Kandi%25252C%252520Sangareddy%25252C%252520Telangana%252520INDIA%252520%2525E2%252580%252593%252520502284%2526vdpid%253D7462382632966291457%2526mb%253D17.711327~78.070854~17.427224~78.218826%2526cardbg%253D%252523F98745%2526dt%253D1758882600000&tstt0=Kandi%2C%20Sangareddy%20District%2C%20Telangana&cp=17.569411~78.059578&lvl=12&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027",
      coordinates: { x: 60, y: 70 }, // Adjusted for visual representation
    },
    {
      id: 3,
      place: "Coimbatore",
      name: "Amrita's Innovation and Incubation Centre",
      location: "AIDC-3",
      address:
        "Amritanagar, Ettimadai, CIR Building, Coimbatore, Tamil Nadu 641112, IN.",
      direction:
        "https://www.bing.com/maps?osid=a2c00aa8-da48-44f9-bd55-ab114bc9059e&cp=11.001355~76.962597&lvl=16&pi=0&imgid=a6736469-886d-4928-9776-6cbf9036f3de&v=2&sV=2&form=S00027",
      coordinates: { x: 65, y: 65 }, // Adjusted for visual representation
    },
    {
      id: 4,
      place: "Coimbatore",
      name: "Forge Innovation & Ventures",
      location: "AIDC-4",
      address:
        "KCT Tech Park, Saravanampatty, Coimbatore, Tamil Nadu 641049, IN.",
      direction:
        "https://www.bing.com/maps?osid=4cbe2795-5a05-46dd-aa06-47dbf9bc7a55&cp=11.308381~77.691879&lvl=11&pi=0&v=2&sV=2&form=S00027",
      coordinates: { x: 65, y: 20 }, // Adjusted for visual representation
    },
  ];

  const handleLocationClick = (id) => {
    setSelectedLocation(id === selectedLocation ? null : id);
  };

  return (
    <div className="mb-12 mt-8 w-full h-96 relative rounded-lg overflow-hidden border border-gray-200 bg-white">
      {/* Simple visual representation of Coimbatore area */}
      <div className="relative w-full h-full bg-purple-50">
        {/* Map outline */}
        <div className="absolute inset-4 border-2 border-purple-300 bg-purple-100 rounded-lg">
          {/* City name */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-800 font-bold opacity-30 text-4xl">
            COIMBATORE
          </div>

          {/* Main roads */}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-purple-300"></div>
          <div className="absolute top-1/3 left-0 w-full h-1 bg-purple-300"></div>
          <div className="absolute top-2/3 left-0 w-full h-1 bg-purple-300"></div>
          <div className="absolute top-0 left-2/3 w-1 h-full bg-purple-300"></div>

          {/* Location markers */}
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${location.coordinates.x}%`,
                top: `${location.coordinates.y}%`,
              }}
              onClick={() => handleLocationClick(location.id)}
            >
              <div className="relative">
                <MapPin
                  size={36}
                  color="#ffffff"
                  fill={
                    selectedLocation === location.id ? "#7e22ce" : "#f0abfc"
                  }
                  strokeWidth={2}
                  className={
                    selectedLocation === location.id
                      ? "scale-125"
                      : "animate-pulse"
                  }
                />

                {/* Location label */}
                <div className="absolute w-20 text-center left-1/2 transform -translate-x-1/2 mt-1 text-xs font-bold text-purple-900 bg-white bg-opacity-70 rounded px-1">
                  {location.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Cards for selected location */}
        {selectedLocation && (
          <div className="absolute z-20 p-4 bg-white rounded-lg shadow-lg w-72 bottom-4 right-4 border-2 border-purple-300">
            {(() => {
              const location = locations.find(
                (loc) => loc.id === selectedLocation
              );
              return (
                <>
                  <h3 className="text-lg font-bold mb-2 text-purple-900">
                    {location.name}
                  </h3>
                  <p className="text-sm font-medium text-purple-800 mb-2">
                    {location.location}
                  </p>
                  <p className="text-sm text-zinc-600">{location.address}</p>
                  <a
                    href={location.direction}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-purple-700 py-2 mt-2 font-medium hover:underline"
                  >
                    Get Direction
                  </a>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}

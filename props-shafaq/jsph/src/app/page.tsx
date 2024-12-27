import Link from 'next/link';

export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/photos");
  const albums = await url.json();

  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-white min-h-screen py-10">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-800 hover:text-blue-600 transition-colors duration-300">
        Shafaque Anees <br /> 
      </h1>
      <h1 className="text-4xl font-extrabold text-center mb-8 text-yellow-500 hover:text-yellow-400 hover:scale-105 transition-all duration-300">
        JSON PlaceHolder Photos
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6">
        {albums.map((album: { id: number; title: string; thumbnailUrl: string }) => (
          <li
            key={album.id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-300 hover:shadow-lg transition-shadow flex flex-col justify-between h-full"
          >
            {/* Thumbnail Image */}
            <Link href={`/${album.id}`}>
              <img
                src={album.thumbnailUrl}
                alt={album.title}
                className="w-full h-32 object-cover rounded-lg mb-4 hover:opacity-90 transition"
              />
            </Link>
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-700 text-left mb-4">
              {album.title}
            </h2>
            {/* View Details Button */}
            <Link href={`/${album.id}`}>
              <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

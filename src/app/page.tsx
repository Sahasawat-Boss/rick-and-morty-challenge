import CharacterCard2 from "@/components/CharacterCard2";
import SearchFilter from "@/components/SearchFilter";

// TODO: Use server-side fetching to fetch static data from api
// EXTRA: Handle errors

export default function Home() {
  return (
    <main>
      {/* Already made Character Card Component */}
      <div className="w-7xl mx-auto">
        {/* Character Card Component */}
        <div className="flex justify-start items-start">
          <SearchFilter />
        </div>
        <div className=" flex flex-col justify-center items-center">
          <CharacterCard2 />
        </div>

      </div>
    </main >
  );
}

import CharacterCard from "@/components/CharacterCard";

// TODO: Use server-side fetching to fetch static data from api
// EXTRA: Handle errors

export default function Home() {
  return (
    <main>
      {/* Already made Character Card Component */}
      <div className="w-[400px]">
        {/* Character Card Component */}
        <CharacterCard />
      </div>
    </main>
  );
}

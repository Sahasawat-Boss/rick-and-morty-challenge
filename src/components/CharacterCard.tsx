import Image from "next/image";
import Link from "next/link";


const CharacterCard = () => {
  
  return (
    <div className="px-4 py-3 bg-white rounded-md shadow-xs flex gap-4">
      <div className="relative w-28 h-28 rounded-md overflow-hidden shrink-0">
        <Image
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick Sanchez"
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 justify-between w-full">
        <div className="space-y-1 pt-1">
          <h2 className="font-semibold text-primary text-lg leading-5">
            Rick Sanchez
          </h2>
          <div>
            <div className="flex gap-2 items-center text-sm text-foreground">
              <div className="min-w-14">Status: </div>
              {/* Create your own status Component. Use colors (success, warning, error) */}
              <div className="flex gap-1 items-center">
                <div className={`w-1.5 h-1.5 rounded-full bg-gray-400`} />
                <div>Alive</div>
              </div>
              {/* End of Status Component */}
            </div>
            <div className="flex gap-2 items-center text-sm text-foreground">
              <div className="min-w-14">Species: </div>
              <div>Human</div>
            </div>
          </div>
        </div>
        <Link
          href="/"
          className="ml-auto text-primary hover:text-primary/80 text-sm text-uppercase font-semibold hover:underline underline-offset-4"
        >
          Inspect
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;

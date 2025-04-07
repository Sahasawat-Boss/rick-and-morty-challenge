// type UserData = {
//     id: number;
//     fname: string;
//     lname: string;
//     username: string;
//     avatar: string;
// };

export default async function DataCard() {
    const data = await fetch('https://rickandmortyapi.com/api/character');
    const cardData:any = await data.json();
    console.log(cardData.results);

    return (
        <div className="p-6">
            <div className="mt-6 space-y-6">
                {cardData.results.map((character: any) => (
                    <div
                        key={character.id}
                        className="border p-4 rounded shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-2xl font-bold mb-1">ID: {character.name}</h2>

                        <p className="text-gray-800">{character.status}</p>
                        <p className="text-gray-800">{character.species}</p>
                        <img
                            src={character.image}
                            alt={character.name}
                            className="w-24 h-24 rounded mt-4 border"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

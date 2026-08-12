

export default function HeroCard({ hero }: { hero: { id: number; name: string; description: string; role: string } }) {
  return (
    <a href={`/hero/${hero.id}`} className="block mb-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">{hero.name}</h2>
        <p className="text-gray-700 mb-2">{hero.description}</p>
        <button type="button" className={
          `${hero.role === 'Damage' ? 'bg-red-500' : hero.role === 'Tank' ? 'bg-green-500' : 'bg-blue-500'
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
          {hero.role}
        </button>
      </div>
    </a>
  )
}
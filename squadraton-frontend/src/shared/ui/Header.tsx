
export default function Header() {
  return (
    <header className="bg-gray-500 text-white py-4">
      <div className="container mx-auto flex items-center">
        <a href="/" className="text-white hover:text-gray-300">
          Главное
        </a>
        <a href="/hero" className="text-white hover:text-gray-300 ml-4">
          Герои
        </a>
        <a href="/about" className="text-white hover:text-gray-300 ml-4">
          О нас
        </a>
      </div>
    </header>
  )
}
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8 itemsgap-5 mx-auto-col lg:flex -row lg :gap-0">
      <h2 className="text-2xl font-semibold">FoodRecipe</h2>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Enter items ...."
          className="p-3 px-8 rounded-full shadow-lg outline-none lg:w-96 shadow-red-100 focus-shadow-red-200 bg-white/75"
        />
      </form>
    </nav>
  );
}

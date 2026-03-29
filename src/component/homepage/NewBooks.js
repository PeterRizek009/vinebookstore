import { useStore } from "../../context/StoreContext";
import BookCard from "../BookCard";

const NewBooks = () => {
  const { books } = useStore();

  return (
    <div className="px-10 py-12 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center">
        New Release Books
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {books.slice(0, 4).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};


export default NewBooks;
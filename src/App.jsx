import React, { useState } from "react";



const App = () => {
  const [book, setBook] = useState({ name: "", author: "", year: "" });
  const [books, setBooks] = useState([
    { name: "1984", author: "George Orwell", year: 1949 },
    { name: "To'qnashuv", author: "Isaac Asimov", year: 1950 },
    { name: "Shum Bola", author: "G'afur G'ulom", year: 1936 },
    { name: "O'tkan Kunlar", author: "Abdulla Qodiriy", year: 1926 },
    { name: "Ufq", author: "Oybek", year: 1949 },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addBook = () => {
    if (book.name && book.author && book.year) {
      if (editingIndex !== null) {
        const updatedBooks = books.map((item, index) =>
          index === editingIndex ? book : item
        );
        setBooks(updatedBooks);
        setEditingIndex(null);
      } else {
        setBooks([...books, book]);
      }
      setBook({ name: "", author: "", year: "" });
    }
  };

  const deleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  const editBook = (index) => {
    setBook(books[index]);
    setEditingIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 bg-[url('../public/library-bg.jpg/')] bg-cover bg-center bg-no-repeat">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 flex items-center gap-2">
        📚 <span className="bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text">Kitoblar Ro'yxati</span>
      </h1>~
      <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-xl p-6 w-full max-w-md">

        <input
          type="text"
          placeholder="Kitob nomini kiriting"
          className="w-full p-2 mb-2 border rounded"
          value={book.name}
          onChange={(e) => setBook({ ...book, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Muallifni kiriting"
          className="w-full p-2 mb-2 border rounded"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Yozilgan yil"
          className="w-full p-2 mb-2 border rounded"
          value={book.year}
          onChange={(e) => setBook({ ...book, year: e.target.value })}
        />
        <button
          className="btn w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 active:scale-95"
          onClick={addBook}
        >
          {editingIndex !== null ? "Saqlash" : "Qo'shish"}
        </button>
      </div>

      <div className="mt-6 w-full max-w-3xl">
        <table className="w-full bg-white/30 backdrop-blur-md shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="p-3"></th>
              <th className="p-3">Kitob Nomi</th>
              <th className="p-3">Muallif</th>
              <th className="p-3">Yili</th>
              <th className="p-3">Amallar</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item, index) => (
              <tr key={index} className="border-b border-red-600">
                <td className="p-3 text-center">{index + 1}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.author}</td>
                <td className="p-3 text-center">{item.year}</td>
                <td className="p-3 flex gap-2 justify-center">
                  <button
                    className="btn bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-700 active:scale-95"
                    onClick={() => editBook(index)}
                  >
                     Tahrirlash
                  </button>
                  <button
                    className="btn bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 active:scale-95"
                    onClick={() => deleteBook(index)}
                  >
                     O'chirish
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

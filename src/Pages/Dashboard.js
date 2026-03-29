import { useState, useEffect } from "react";
import { supabase } from "../Supabase";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editBook, setEditBook] = useState(null);
  const [form, setForm] = useState({ title: "", image: "", category: "", price: "" });

  const fetchBooks = async () => {
    const { data } = await supabase.from("books").select("*");
    if (data) setBooks(data);
  };

  useEffect(() => { fetchBooks(); }, []);

  const openAdd = () => {
    setEditBook(null);
    setForm({ title: "", image: "", category: "", price: "" });
    setShowModal(true);
  };

  const openEdit = (book) => {
    setEditBook(book);
    setForm({ title: book.title, image: book.image, category: book.categorry, price: book.price });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.title || !form.price) return alert("Title and Price are required!");
    const payload = { title: form.title, image: form.image, categorry: form.category, price: Number(form.price) };
    if (editBook) await supabase.from("books").update(payload).eq("id", editBook.id);
    else await supabase.from("books").insert([payload]);
    setShowModal(false);
    fetchBooks();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this book?")) return;
    await supabase.from("books").delete().eq("id", id);
    fetchBooks();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", background: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", paddingBottom: "1.25rem", borderBottom: "1px solid #eee" }}>
        <div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 400, color: "#111" }}>
            VINE <span style={{ color: "#2d6a4f" }}>BOOKSTORE</span>
          </h1>
          <p style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{books.length} books in library</p>
        </div>
        <button onClick={openAdd} style={{ background: "#2d6a4f", color: "#fff", border: "none", borderRadius: 8, padding: "9px 20px", fontSize: 13, cursor: "pointer", fontWeight: 500 }}>
          + Add Book
        </button>
      </div>

      {/* Table */}
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            {["Cover", "Title", "Category", "Price", "Actions"].map(h => (
              <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontSize: 12, color: "#888", fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id} style={{ borderBottom: "1px solid #f5f5f5" }}>
              <td style={{ padding: "12px" }}><img src={book.image} alt="" style={{ width: 40, height: 54, objectFit: "cover", borderRadius: 4, background: "#f0f0f0" }} /></td>
              <td style={{ padding: "12px", fontWeight: 500 }}>{book.title}</td>
              <td style={{ padding: "12px" }}><span style={{ background: "#e9f5f0", color: "#1b4332", fontSize: 11, padding: "3px 10px", borderRadius: 20 }}>{book.categorry}</span></td>
              <td style={{ padding: "12px", color: "#2d6a4f", fontWeight: 500 }}>${book.price}</td>
              <td style={{ padding: "12px", display: "flex", gap: 6 }}>
                <button onClick={() => openEdit(book)} style={{ background: "none", border: "1px solid #ddd", borderRadius: 6, padding: "5px 12px", fontSize: 12, cursor: "pointer" }}>Edit</button>
                <button onClick={() => handleDelete(book.id)} style={{ background: "none", border: "1px solid #ddd", borderRadius: 6, padding: "5px 12px", fontSize: 12, cursor: "pointer", color: "#e53e3e" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #eee", padding: "1.5rem", width: 360 }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 400, marginBottom: "1.25rem" }}>
              {editBook ? "Edit Book" : "Add Book"}
            </h3>
            {[
              { label: "Title *", key: "title", placeholder: "Book title" },
              { label: "Image URL", key: "image", placeholder: "https://..." },
              { label: "Category", key: "category", placeholder: "e.g. Fiction, Religion..." },
              { label: "Price *", key: "price", placeholder: "10", type: "number" },
            ].map(({ label, key, placeholder, type }) => (
              <div key={key} style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, color: "#888", marginBottom: 5, fontWeight: 500 }}>{label}</label>
                <input type={type || "text"} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} placeholder={placeholder}
                  style={{ width: "100%", padding: "8px 10px", border: "1px solid #ddd", borderRadius: 6, fontSize: 13 }} />
              </div>
            ))}
            <div style={{ display: "flex", gap: 8, marginTop: "1.25rem" }}>
              <button onClick={handleSave} style={{ flex: 1, background: "#2d6a4f", color: "#fff", border: "none", borderRadius: 8, padding: 9, fontSize: 13, cursor: "pointer", fontWeight: 500 }}>Save</button>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, background: "none", border: "1px solid #ddd", borderRadius: 8, padding: 9, fontSize: 13, cursor: "pointer", color: "#888" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
import React, { useEffect, useState } from "react";
import './App.css';
import { motion } from "framer-motion";

function ContactsApp() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setContacts);
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Contacts</h1>
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search contacts..."
          className="w-full p-2 rounded border border-gray-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredContacts.map((contact) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white p-4 rounded-2xl shadow-md flex items-center gap-4">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {contact.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-lg">{contact.name}</p>
                <p className="text-sm text-gray-600">{contact.email}</p>
                <p className="text-sm text-gray-500">{contact.phone}</p>
                <p className="text-sm text-gray-400 italic">{contact.company.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ContactsApp;

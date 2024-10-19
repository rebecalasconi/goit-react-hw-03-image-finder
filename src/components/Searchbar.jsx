import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
    const [query, setQuery] = useState(''); // Folosim useState pentru a gestiona input-ul

    // Actualizează starea locală când utilizatorul tastează în input
    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    // Gestionează submit-ul formularului
    const handleSubmit = (event) => {
        event.preventDefault(); // Previne comportamentul implicit al formularului
        onSubmit(query); // Trimite query-ul către componenta părinte
        setQuery(''); // Resetează câmpul de input
    };

    return (
        <header className="searchbar">
            <form className="form" onSubmit={handleSubmit}>
                <button type="submit" className="button">
                    <span className="button-label">Search</span>
                </button>

                <input
                    className="input"
                    type="text"
                    value={query} // Valoarea câmpului de input
                    onChange={handleChange} // Apelează funcția la schimbarea input-ului
                    autoComplete="off" // Dezactivează completarea automată
                    autoFocus // Activează input-ul imediat
                    placeholder="Search images and photos" // Textul de umplere
                />
            </form>
        </header>
    );
};


export default Searchbar;
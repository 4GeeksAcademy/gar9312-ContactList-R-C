import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import ContactCard from "../component/ContactList.jsx"; // Asegúrate de que esta ruta sea correcta

export const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, [actions]);

    // Verificar que store.agenda sea un arreglo antes de usar .map
    if (!Array.isArray(store.agenda)) {
        return <div>Loading...</div>; // O cualquier otro indicador de carga
    }

    return (
        <div className="container">
            {store.agenda.map((item, index) => (
                <ContactCard key={index} {...item} />
            ))}
        </div>
    );
};

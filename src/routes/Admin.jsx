import React from "react";
import { Link } from "react-router-dom";
import CardTicket from "../components/CardTicket";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import '../assets/styles/admin.css';  // Importa el archivo CSS


const Admin = () => {
  return (
    <div className="home-container">
      <div className="flex items-center justify-between mb-10">
        {/* Asegúrate de agregar contenido si es necesario */}
      </div>
      <div className="card-grid">
        <CardTicket
          ticket="Huespedes"
          totalTickets="Huespedes"
          text="3"
          Linkpagina="/admin/huespedes"
        />
        <CardTicket
          ticket="habitaciones"
          totalTickets="habitaciones disponibles"
          text="3"
          Linkpagina="/admin/habitaciones"
        />
        <CardTicket
          ticket="Inventario"
          totalTickets="Inventario"
          text="912"
          Linkpagina="/admin/stock"
        />
        <CardTicket
          ticket="solicitudes pendientes"
          totalTickets="sOLICITUDES"
          text="6"
          Linkpagina="/admin/solicitudes"
        />
      </div>
      <div>
        <h1 className="title">notificaciones</h1>
      </div>
      <div className="notification-section">
        <div className="table-header hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
          <h5>ID</h5>
          <h5>Descripción</h5>
          <h5>Check In</h5>
          <h5>Check Out</h5>
          <h5>Acciones</h5>
        </div>
        {/* Itera por tus solicitudes */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="request-card grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>#25546</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Descripción</h5>
              <p>Descripción de solicitud</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Check In</h5>
              <span>FECHA DD/MM/AA</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Check Out</h5>
              <span>03/04/24</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <Menu
                menuButton={
                  <MenuButton className="menu-button">
                    Acciones
                  </MenuButton>
                }
                align="end"
                arrow
                arrowClassName="bg-secondary-100"
                transition
                menuClassName="bg-secondary-100 p-4"
              >
                <MenuItem className="menu-item">
                  <Link
                    to="/perfil"
                    className="link-item"
                  >
                    Dashboard tickets
                  </Link>
                </MenuItem>
                <MenuItem className="menu-item">
                  <Link
                    to="/perfil"
                    className="link-item"
                  >
                    Información
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;

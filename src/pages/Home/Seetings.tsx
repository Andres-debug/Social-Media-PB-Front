import { useState } from "react";
import { Navbar } from "../../layout/Navbar";
import { Footer } from "../../layout/Footer";

import {
  FiUser,
  FiLock,
  FiShield,
  FiClock
} from "react-icons/fi";

const Settings = () => {

  const [activeTab, setActiveTab] = useState("account");

  return (

    <div className="min-h-screen flex flex-col bg-sky-50 dark:bg-gray-900 text-black dark:text-white">

      <Navbar />

      <main className="flex-1 w-[90%] max-w-6xl mx-auto py-8">

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row">

          <aside className="w-full md:w-72 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 p-4">

            <h2 className="text-2xl font-bold mb-6">
              Configuración
            </h2>

            <div className="space-y-2">

              <button
                onClick={() => setActiveTab("account")}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${
                  activeTab === "account"
                    ? "bg-sky-100 text-sky-600 dark:bg-sky-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <FiUser />
                Cuenta
              </button>

              <button
                onClick={() => setActiveTab("privacy")}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${
                  activeTab === "privacy"
                    ? "bg-sky-100 text-sky-600 dark:bg-sky-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <FiLock />
                Privacidad
              </button>

              <button
                onClick={() => setActiveTab("activity")}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${
                  activeTab === "activity"
                    ? "bg-sky-100 text-sky-600 dark:bg-sky-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <FiClock />
                Actividad
              </button>

              <button
                onClick={() => setActiveTab("security")}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${
                  activeTab === "security"
                    ? "bg-sky-100 text-sky-600 dark:bg-sky-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <FiShield />
                Seguridad
              </button>

            </div>

          </aside>

          <section className="flex-1 p-8">

            {activeTab === "account" && (
              <div>

                <h3 className="text-2xl font-bold mb-6">
                  Información de la cuenta
                </h3>

                <div className="space-y-5">

                  <div>
                    <label className="block mb-2 text-sm text-gray-500">
                      Nombre.
                    </label>

                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full p-3 rounded-xl border dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-500">
                      Usuario.
                    </label>

                    <input
                      type="text"
                      placeholder="@usuario"
                      className="w-full p-3 rounded-xl border dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                  <button className="bg-sky-600 hover:bg-sky-700 transition text-white px-5 py-3 rounded-xl">
                    Guardar cambios
                  </button>

                </div>

              </div>
            )}

            {activeTab === "privacy" && (
              <div>

                <h3 className="text-2xl font-bold mb-6">
                  Privacidad
                </h3>

                <div className="space-y-5">

                  <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">

                    <div>
                      <h4 className="font-semibold">
                        Cuenta privada
                      </h4>

                      <p className="text-sm text-gray-500">
                        Solo tus seguidores podrán ver tus publicaciones.
                      </p>
                    </div>

                    <input type="checkbox" className="w-5 h-5" />

                  </div>

                  <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">

                    <div>
                      <h4 className="font-semibold">
                        Permitir mensajes
                      </h4>

                      <p className="text-sm text-gray-500">
                        Otros usuarios podrán enviarte mensajes.
                      </p>
                    </div>

                    <input type="checkbox" defaultChecked className="w-5 h-5" />

                  </div>

                </div>

              </div>
            )}

            {activeTab === "activity" && (
              <div>

                <h3 className="text-2xl font-bold mb-6">
                  Tu actividad
                </h3>

                <div className="space-y-4">

                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">

                    <h4 className="font-semibold">
                      Publicaciones guardadas
                    </h4>

                    <p className="text-sm text-gray-500">
                      Revisa las publicaciones que guardaste.
                    </p>

                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">

                    <h4 className="font-semibold">
                      Historial de actividad
                    </h4>

                    <p className="text-sm text-gray-500">
                      Consulta tus interacciones recientes.
                    </p>

                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">

                    <h4 className="font-semibold">
                      Comentarios realizados
                    </h4>

                    <p className="text-sm text-gray-500">
                      Mira todos los comentarios que has hecho.
                    </p>

                  </div>

                </div>

              </div>
            )}

            {activeTab === "security" && (
              <div>

                <h3 className="text-2xl font-bold mb-6">
                  Seguridad
                </h3>

                <div className="space-y-5">

                  <input
                    type="password"
                    placeholder="Nueva contraseña"
                    className="w-full p-3 rounded-xl border dark:bg-gray-700 dark:border-gray-600"
                  />

                  <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    className="w-full p-3 rounded-xl border dark:bg-gray-700 dark:border-gray-600"
                  />

                  <button className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 rounded-xl transition">
                    Actualizar contraseña
                  </button>

                </div>

              </div>
            )}

          </section>

        </div>

      </main>

      <Footer />

    </div>
  );
};

export default Settings;
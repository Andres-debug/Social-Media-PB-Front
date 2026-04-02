const NoddCard2 = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      
      {}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <div>
          <p className="font-bold">Usuario</p>
          <p className="text-sm text-gray-500">@usuario</p>
        </div>
      </div>

      {}
      <p className="text-gray-700">
        Este es un post de prueba en NODD 🚀
      </p>

      {}
      <p className="text-xs text-gray-400 mt-2">
        Hace 2 horas
      </p>

    </div>
  )
}

export default NoddCard2

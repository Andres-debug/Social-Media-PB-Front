const ProfileHeader = () => {
  return (
    <div className="bg-white shadow rounded-2xl overflow-hidden">
      
      <div className="h-40 bg-sky-300"></div>

      <div className="p-4 flex items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-gray-300 border-4 border-white -mt-12"></div>

        <div>
          <h2 className="text-xl font-bold">Usuario</h2>
          <p className="text-gray-500">@usuario</p>
          <p className="text-sm mt-1">Bio del usuario</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
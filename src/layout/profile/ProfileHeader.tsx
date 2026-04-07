import fotoPerfil from '../../assets/perfil.jpeg';
import portada from '../../assets/portada1.jpeg';

const ProfileHeader = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-2xl overflow-hidden">
  
      <div className="relative">
        <img 
          src={portada}
          alt="Portada"
          className="h-48 w-full object-cover"
        />
 
        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 bottom-0">
          <img 
            src={fotoPerfil}
            alt="Perfil"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>
      </div>
 
      <div className="pt-20 pb-6 text-center">
        <h2 className="text-2xl font-bold">Isabella</h2>
        <p className="text-gray-500">@isabella123</p>
        <p className="text-sm mt-2 px-4">
          Me encanta programar
        </p>
      </div>

    </div>
  )
}

export default ProfileHeader;
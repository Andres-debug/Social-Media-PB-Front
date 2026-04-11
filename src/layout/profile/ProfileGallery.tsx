interface Props {
  photos: string[];
  onAdd: () => void;
}

const ProfileGallery = ({ photos, onAdd }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">

      <div className="flex justify-between mb-3">
        <h3 className="font-bold">Galería</h3>

        <button 
          onClick={onAdd}
          className="bg-sky-100 dark:bg-gray-700 px-2 py-1 rounded text-sm"
        >
          Añadir
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo, i) => (
          <img 
            key={i}
            src={photo}
            className="w-full h-24 object-cover rounded"
          />
        ))}
      </div>

      {photos.length === 0 && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Aún no hay fotos
        </p>
      )}
    </div>
  );
};

export default ProfileGallery;
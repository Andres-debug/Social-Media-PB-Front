interface Props {
  bioText: string;
  setBioText: (text: string) => void;
  onClose: () => void;
}

const ProfileModal = ({ bioText, setBioText, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl w-[90%] max-w-md">

        <h3 className="font-bold mb-2">Editar biografía</h3>

        <textarea 
          value={bioText}
          onChange={(e) => setBioText(e.target.value)}
          className="w-full p-2 border rounded mb-3 
                     text-black dark:text-white 
                     dark:bg-gray-700 dark:border-gray-600"
        />

        <div className="flex justify-end gap-2">
          <button 
            onClick={onClose}
            className="bg-gray-300 dark:bg-gray-600 px-3 py-1 rounded"
          >
            Cancelar
          </button>

          <button 
            onClick={onClose}
            className="bg-sky-500 text-white px-3 py-1 rounded"
          >
            Guardar
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfileModal;
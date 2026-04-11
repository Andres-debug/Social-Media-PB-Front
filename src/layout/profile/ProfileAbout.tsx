interface Props {
  bio: string;
}

const ProfileAbout = ({ bio }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
      <h3 className="font-bold mb-2">Presentación</h3>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        {bio || "Agrega una biografía para que te conozcan 👀"}
      </p>

      <div className="mt-3 space-y-2 text-sm">
        <p>💼 Trabaja en <b>Éxito</b></p>
        <p>🎓 Estudió en <b>Contaduría</b></p>
        <p>📍 Vive en <b>Medellín</b></p>
      </div>
    </div>
  );
};

export default ProfileAbout;
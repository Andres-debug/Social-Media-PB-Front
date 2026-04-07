interface Props {
  storyImage: string | null;
}

const ProfileStory = ({ storyImage }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
      <h3 className="font-bold mb-2">Historia</h3>

      {storyImage ? (
        <img 
          src={storyImage} 
          className="w-32 h-48 object-cover rounded-lg"
        />
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No hay historias
        </p>
      )}
    </div>
  );
};

export default ProfileStory;
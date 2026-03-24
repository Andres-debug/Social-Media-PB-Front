type Props = {
  username: string;
  text: string;
  avatar: string;
};

const NoddCard = ({ username, text, avatar }: Props) => {
  return (
    <div className="bg-white text-black p-4 rounded-xl shadow">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <h3 className="font-bold">@{username}</h3>
      </div>

      <p className="mb-3">{text}</p>

      <div className="flex gap-4">
        <button className="text-sky-600">👍 Like</button>
        <button className="text-sky-600">💬 Comment</button>
      </div>
    </div>
  );
};

export default NoddCard;

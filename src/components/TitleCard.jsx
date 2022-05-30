export default function TitleCard({ item }) {
  const { thumbnailURL } = item;

  return (
    <div onClick>
      <img src={thumbnailURL} alt="movie-poster" />
    </div>
  );
}

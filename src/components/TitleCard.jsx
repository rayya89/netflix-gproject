export default function TitleCard({ item }) {
  const { thumbnailURL } = item;

  return (
    <div>
      <img src={thumbnailURL} alt="movie-poster" />
    </div>
  );
}

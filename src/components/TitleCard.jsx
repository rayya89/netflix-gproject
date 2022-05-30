//project Files
import { useModal } from "../state/ModalContext";
import TitleModal from "./TitleModal";

export default function TitleCard({ item }) {
  const { thumbnailURL } = item;
  const { setModal } = useModal();

  return (
    <div onClick={() => setModal(<TitleModal item={item} />)}>
      <img src={thumbnailURL} alt="movie-poster" />
    </div>
  );
}

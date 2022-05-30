//project files
import { useModal } from "../state/ModalContext";

export default function TitleModal({ item }) {
  const { logoURL, imageURL, description, year, ranking, link } = item;
  const { setModal } = useModal();

  //Properties
  const youtubeLink = `https://www.youtube.com/watch?v=${link}`;

  return (
    <div>
      <button onClick={() => setModal(null)}>x</button>
      <img src={imageURL} alt="title poster" />
      <img src={logoURL} alt="title logo" />
      <a href={youtubeLink} target="_blank" rel="noreferrer noopener">
        Play
      </a>
      <span>{year}</span>
      <span>{ranking}</span>
      <p>{description}</p>
    </div>
  );
}

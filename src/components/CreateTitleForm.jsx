//NPM packages
import { useState } from "react";

//Project files
import { useItems } from "../state/ItemsContext";
import { useModal } from "../state/ModalContext";
import { createDocument } from "../scripts/fireStore";
import InputField from "../components/InputField";
import form from "../data/TitleForm.json";

export default function CreateTitleForm() {
  const { items, setItems } = useItems();
  const { setModal } = useModal();

  //Localstate
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [logoURL, setLogoURL] = useState("");
  const [thumbURL, setThumbURL] = useState("");
  const [ranking, setRanking] = useState("");
  const [link, setLink] = useState("");
  const [year, setYear] = useState(0);

  async function onCreate(event) {
    event.preventDefault();
    let newTitle = {
      name: name,
      description: desc,
      imageURL: imageURL,
      thumbnailURL: thumbURL,
      logoURL: logoURL,
      ranking: ranking,
      link: link,
      year: year,
    };
    const createdId = await createDocument(
      "titles/categories/movies",
      newTitle
    ).catch(onFail);
    if (createdId) onSuccess(newTitle, createdId);
  }

  function onSuccess(newTitle, createdId) {
    newTitle.id = createdId;
    setItems([...items, newTitle]);
    setModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not create a document.");
  }

  return (
    <form className="form" onSubmit={onCreate}>
      <h2>Add Title</h2>
      <InputField setup={form.name} state={[name, setName]} />
      <InputField setup={form.desc} state={[desc, setDesc]} />
      <InputField setup={form.imageURL} state={[imageURL, setImageURL]} />
      <InputField setup={form.logoURL} state={[logoURL, setLogoURL]} />
      <InputField setup={form.thumbURL} state={[thumbURL, setThumbURL]} />
      <InputField setup={form.ranking} state={[ranking, setRanking]} />
      <InputField setup={form.link} state={[link, setLink]} />
      <InputField setup={form.year} state={[year, setYear]} />
      <button className="button primary">Add new title</button>
      <button className="button secondary" onClick={() => setModal(null)}>
        Cancel title
      </button>
    </form>
  );
}

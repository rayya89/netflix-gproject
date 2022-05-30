//NPM packages
import { useState } from "react";

//Project files
import { useItems } from "../state/ItemsContext";
import { useModal } from "../state/ModalContext";
import { updateDocument } from "../scripts/fireStore";
import InputField from "../components/InputField";
import form from "../data/TitleForm.json";

export default function UpdateTitleForm({ item }) {
  const { items, setItems } = useItems();
  const { setModal } = useModal();

  //Localstate
  const [name, setName] = useState(item.name);
  const [desc, setDesc] = useState(item.description);
  const [imageURL, setImageURL] = useState(item.imageURL);
  const [logoURL, setLogoURL] = useState(item.logoURL);
  const [thumbURL, setThumbURL] = useState(item.thumbnailURL);
  const [ranking, setRanking] = useState(item.ranking);
  const [link, setLink] = useState(item.link);
  const [year, setYear] = useState(item.year);

  //Methods
  async function onUpdate(event) {
    event.preventDefault();
    const editedTitle = {
      id: item.id,
      name: name,
      description: desc,
      imageURL: imageURL,
      thumbnailURL: thumbURL,
      logoURL: logoURL,
      ranking: ranking,
      link: link,
      year: year,
    };
    const updated = await updateDocument(
      "titles/categories/movies",
      editedTitle
    ).catch(onFail);
    if (updated) onSuccess(editedTitle);
  }

  function onSuccess(editedTitle) {
    const clonedItems = [...items];
    const index = clonedItems.findIndex((item) => item.id === editedTitle.id);

    clonedItems[index] = editedTitle;
    setItems(clonedItems);
    setModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not update a document.");
  }

  return (
    <form className="form" onSubmit={onUpdate}>
      <h2>Edit Title</h2>
      <InputField setup={form.name} state={[name, setName]} />
      <InputField setup={form.desc} state={[desc, setDesc]} />
      <InputField setup={form.imageURL} state={[imageURL, setImageURL]} />
      <InputField setup={form.logoURL} state={[logoURL, setLogoURL]} />
      <InputField setup={form.thumbURL} state={[thumbURL, setThumbURL]} />
      <InputField setup={form.ranking} state={[ranking, setRanking]} />
      <InputField setup={form.link} state={[link, setLink]} />
      <InputField setup={form.year} state={[year, setYear]} />
      <button className="button primary">Edit existing title</button>
      <button className="button secondary" onClick={() => setModal(null)}>
        Cancel Edit
      </button>
    </form>
  );
}

//NPM packages
import { useState } from "react";

//Project files
import { useItems } from "../state/ItemsContext";
import { useModal } from "../state/ModalContext";
import { deleteDocument } from "../scripts/fireStore";
import InputField from "../components/InputField";
import form from "../data/deleteForm.json";

export default function DeleteTitleForm({ item }) {
  const { items, setItems } = useItems();
  const { setModal } = useModal();

  // Local state
  const [compare, setCompare] = useState("");

  async function onDelete(event) {
    event.preventDefault();

    if (compare === item.name) {
      const deleted = deleteDocument("titles/categories/movies", item.id).catch(
        onFail
      );

      if (deleted) onSuccess(item.id);
    } else {
      alert("The name does not match");
    }
  }

  function onSuccess(id) {
    const filteredItems = items.filter((item) => item.id !== id);

    setItems(filteredItems);
    setModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not delete the document");
  }

  return (
    <form className="form" onSubmit={onDelete}>
      <h2>Delete Title</h2>
      <p className="danger">
        Doing so will permanently delete the data asociated with this title.
      </p>
      <p>
        Confirm you want to delete this title by typing its name:{" "}
        <b>{item.name}</b>.
      </p>
      <InputField setup={form.compare} state={[compare, setCompare]} />
      <button className="button danger">Delete this title</button>
      <button className="button secondary" onClick={() => setModal(null)}>
        Keep title
      </button>
    </form>
  );
}

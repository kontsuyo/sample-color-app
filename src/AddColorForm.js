import { useColors } from "./ColorProvider";
import { useInput } from "./hook";

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const {addColor} = useColors();

  const submit = (event) => {
    event.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required //必須入力欄
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}

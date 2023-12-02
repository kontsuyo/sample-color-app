import { useState } from "react";

export default function AddColorForm({ onNewColor = (f) => f }) {
  const [title, setTitle] = useState(""); // userの入力値にステート経由でアクセス
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)} //targetフィールドはDOMへの参照。event文字を入力するたびに関数を呼び出し、再描画される仕組み
        type="text"
        placeholder="color title..."
        required //必須入力欄
      />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        type="color"
        required
      />
    </form>
  );
}

import { useRef } from "react";

export default function AddColorForm({ onNewColor = (f) => f }) {
  const txtTitle = useRef();
  const hexColor = useRef();

  // 悪いコード
  // 制御されていないコンポーネント
  // valueを直接書き換え。処理手順の記述に終始。
  const submit = (e) => {
    // eはeventのe
    e.preventDefault(); // submitのデフォルト動作を抑止。POSTリクエストが送信されなくなる
    const title = txtTitle.current.value; // userの入力値をref-objのcurrent-fieldから取得
    const color = hexColor.current.value;
    onNewColor(title, color); // この関数プロパティ経由で親コンポーネントに通知
    txtTitle.current.value = ""; // DOM要素のvalue属性をリセット。続けて他の色を追加可にする。
    hexColor.current.value = "";
  };

  return (
    // form要素のsubmitイベントは、指定されたURLに対してHTTP POSTリクエストで入力値を送るもの
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
      <button>ADD</button>
    </form>
  );
}

import { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import { HexColorPicker } from "react-colorful";

import { Section } from "./components/Section";
import {
  RatingComponentOption,
  RatingComponentSwitcher,
} from "./components/Rating";
import { OpenRating } from "./components/ORStar";

function App() {
  const [color, setColor] = useState("#aabbcc");
  const templates = [
    { title: "埋め込み", hint: "" },
    { title: "モーダル", hint: "" },
  ];
  const scriptToHead = `
  <script src="https://unpkg.com/open-rating-element/out/dist/index.umd.js"></script>
  `;
  const wcRenderer = (props: { color?: string }) =>
    `<or-star active_color=${props?.color}></or-star>`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container m-auto pb-10">
      <Section title="1. テンプレート">
        <RadioCardForm items={templates} />
      </Section>
      <Section title="2. 質問">
        <textarea
          className="textarea textarea-bordered max-w-xl resize-none"
          placeholder="最大40字まで"
        />
      </Section>
      <Section title="3. デザイン">
        <RadioCardFormRatingSamples items={["star", "star2", "heart"]} />
      </Section>
      <Section title="4. カスタマイズ（オプション）">
        <HexColorPicker color={color} onChange={setColor} />
      </Section>
      <OpenRating active_color={color} />
      <div className="textarea textarea-bordered  w-full bg-base-100 border-">
        <div className="card-body">
          <h2 className="card-title">ステップ1. headタグの中に挿入する</h2>
          <div className="flex my-auto">
            <button
              className="btn btn-outline btn-xs mr-5 my-auto"
              onClick={() => copyToClipboard(scriptToHead)}
            >
              コピーする
            </button>
            <code>{scriptToHead}</code>
          </div>
          <h2 className="card-title">
            ステップ2. bodyタグの埋め込みたい場所に以下のタグを挿入する
          </h2>
          <div className="flex my-auto">
            <button
              className="btn btn-outline btn-xs mr-5 my-auto"
              onClick={() => copyToClipboard(wcRenderer({ color: undefined }))}
            >
              コピーする
            </button>
            <code>{wcRenderer({ color })}</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

type RadioCardForm = {
  items: { title: string; hint?: string }[];
};

const RadioCardForm = ({ items }: RadioCardForm) => {
  const [randomString] = useState(nanoid(4));
  const [selected, setSelected] = useState(0);

  return (
    <form className="flex gap-5 w-full">
      {items.map((temp, i) => (
        <Fragment key={i}>
          <input
            readOnly
            type="radio"
            className="hidden"
            id={`${randomString}+${i}`}
            checked={selected === i}
          />
          <label
            className="text-center p-4 border-2 border-gray-400 cursor-pointer w-64"
            htmlFor={`${randomString}+${i}`}
            onClick={() => setSelected(i)}
          >
            <span className="text-xl font-bold m-auto">{temp.title}</span>
          </label>
        </Fragment>
      ))}
    </form>
  );
};

const RadioCardFormRatingSamples = ({
  items,
}: {
  items: RatingComponentOption[];
}) => {
  const [randomString] = useState(nanoid(4));
  const [selected, setSelected] = useState(0);

  return (
    <form className="flex gap-5 w-full">
      {items.map((type, i) => (
        <Fragment key={i}>
          <input
            readOnly
            type="radio"
            className="hidden"
            id={`${randomString}+${i}`}
            checked={selected === i}
          />
          <label
            className="text-center p-4 border-2 border-gray-400 cursor-pointer w-64"
            htmlFor={`${randomString}+${i}`}
            onClick={() => setSelected(i)}
          >
            <RatingComponentSwitcher type={type} />
          </label>
        </Fragment>
      ))}
    </form>
  );
};

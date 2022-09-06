import { nanoid } from "nanoid";
import { useState } from "react";

export type RatingComponentOption = "heart" | "star" | "star2";

type RatingComponentSwitcherProps = {
  type: RatingComponentOption;
};

export const RatingComponentSwitcher = ({
  type,
}: RatingComponentSwitcherProps) => {
  if (type === "heart") {
    return <HeartRating />;
  } else if (type === "star") {
    return <StarRating />;
  } else if (type === "star2") {
    return <StarRating2 />;
  } else {
    return null;
  }
};

const HeartRating = () => {
  const [randomString] = useState(nanoid(4));
  return (
    <div className="rating">
      <input type="radio" name={randomString} className="mask mask-heart" />
      <input type="radio" name={randomString} className="mask mask-heart" />
      <input type="radio" name={randomString} className="mask mask-heart" />
      <input type="radio" name={randomString} className="mask mask-heart" />
      <input type="radio" name={randomString} className="mask mask-heart" />
    </div>
  );
};

const StarRating = () => {
  const [randomString] = useState(nanoid(4));
  return (
    <div className="rating">
      <input type="radio" name={randomString} className="mask mask-star" />
      <input type="radio" name={randomString} className="mask mask-star" />
      <input type="radio" name={randomString} className="mask mask-star" />
      <input type="radio" name={randomString} className="mask mask-star" />
      <input type="radio" name={randomString} className="mask mask-star" />
    </div>
  );
};

const StarRating2 = () => {
  const [randomString] = useState(nanoid(4));
  return (
    <div className="rating">
      <input type="radio" name={randomString} className="mask mask-star-2" />
      <input type="radio" name={randomString} className="mask mask-star-2" />
      <input type="radio" name={randomString} className="mask mask-star-2" />
      <input type="radio" name={randomString} className="mask mask-star-2" />
      <input type="radio" name={randomString} className="mask mask-star-2" />
    </div>
  );
};

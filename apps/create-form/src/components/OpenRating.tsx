import { createComponent } from "@lit-labs/react";
import React from "react";

import { OpenRatingElement } from "open-rating-elements";

export const OpenRating = createComponent(
  // @ts-ignore
  React,
  "open-rating",
  OpenRatingElement
);

import { createComponent } from "@lit-labs/react";
import React from "react";

import { ORStar } from "open-rating-element";

export const OpenRating = createComponent(
  // @ts-ignore
  React,
  "or-star",
  ORStar
);

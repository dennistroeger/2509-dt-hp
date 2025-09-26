import { type SchemaTypeDefinition } from "sanity";

import { ebook } from "./ebook";
import { ebookPage } from "./ebookPage";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Add your schema types here
  ebook,
  ebookPage,
];

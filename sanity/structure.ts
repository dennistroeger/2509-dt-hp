import {StructureBuilder} from 'sanity/structure'
// test
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items(
      S.documentTypeListItems().filter(
        (listItem) => !['ebookPage', 'chapter'].includes(listItem.getId()!),
      ), 
    )

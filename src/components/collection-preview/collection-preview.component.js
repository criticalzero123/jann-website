import React from "react";

import { withRouter } from "react-router-dom";

import {
  CollectionTitle,
  CollectionPreviewContainer,
  PreviewContainer,
} from "./collection-preview.styles";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionTitle
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title}
      </CollectionTitle>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);

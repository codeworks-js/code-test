/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategories
// ====================================================

export interface GetCategories_categories_technologies {
  __typename: "Technology";
  id: string;
  image: string;
  label: string;
}

export interface GetCategories_categories {
  __typename: "Category";
  id: string;
  label: string;
  technologies: GetCategories_categories_technologies[];
}

export interface GetCategories {
  categories: GetCategories_categories[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================

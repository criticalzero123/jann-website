import React from "react";
import { HomePageContainer } from "./homepage.styles";

import Directory from "../../components/directory/directory.components";

const HomePage = ({ history }) => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};
export default HomePage;

import React, { useContext } from "react";
import styled from "styled-components";
import LastComp from "../TheComp/LastComp";
import MixChange from "../TheComp/MixChange";
import TopBody from "../TheComp/TopBody";
import TopPart from "../TheComp/TopPart";
import img1 from "./img/a1.png";
import img2 from "./img/a2.png";
import img3 from "./img/a3.png";

import img4 from "./img/a4.svg";
import img5 from "./img/a5.svg";
import img6 from "./img/a6.svg";

const HomeScreen = () => {
  return (
    <Container>
      <TopBody />
      <MixChange
        text="Attribute commits with collaborators easily"
        sub="Quickly add co-authors to your commit. Great for pairing and excellent for sending a little love/credit to that special someone who helped fix that gnarly bug of yours. See the attribution on the history page, undo an accidental attribution, and see the co-authors on github.com"
        img={img1}
        chg
      />
      <MixChange
        text="Checkout branches with pull requests and view CI statuses"
        sub="See all open pull requests for your repositories and check them out as if they were a local branch, even if they're from upstream branches or forks. See which pull requests pass commit status checks, too!"
        img={img2}
      />
      <MixChange
        text="Syntax highlighted diffs"
        sub="The new GitHub Desktop supports syntax highlighting when viewing diffs for a variety of different languages."
        img={img3}
        chg
      />

      <Holder>
        <LastComp
          text="Expanded image diff support"
          sub="asily compare changed images. See the before and after, swipe or fade between the two, or look at just the changed parts."
          img={img4}
        />
        <LastComp
          text="Extensive editor & shell integrations"
          sub="Open your favorite editor or shell from the app, or jump back to GitHub Desktop from your shell. GitHub Desktop is your springboard for work."
          img={img5}
        />
        <LastComp
          text="Community supported"
          sub="aGitHub Desktop is open source now! Check out our roadmap, contribute, and help us make collaboration even easier."
          img={img6}
        />
      </Holder>
    </Container>
  );
};

export default HomeScreen;

const Holder = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 40px;

  background-color: rgb(24, 24, 24);
`;
const Container = styled.div`
  background-color: rgb(24, 24, 24);
  width: 100%;
  height: 100vh;
`;

// <div
// style={{
//   width: "100%",
//   height: "100vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   fontSize: "40px",
//   fontWeight: "bold",
// }}
// >
// <div>Welcome back</div>
// </div>

import { Header } from "antd/lib/layout/layout";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { app } from "../base";

const HeaderView = () => {
  const signOut = async () => {
    await app.auth().signOut();
  };
  return (
    <div>
      <HeaderContainer>
        <Place to="/">Home</Place>
        <Place to="/sign">Sign</Place>
        <Avatar>
          <Image />
          <Name></Name>
        </Avatar>
      </HeaderContainer>
    </div>
  );
};

export default HeaderView;

const Avatar = styled.div`
  margin-right: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid white;
  object-fit: cover;
  margin: 0;
  padding: 0;
`;

const Name = styled.div`
  margin: 0;
  padding: 0;
  height: 2px;
  margin-bottom: 10px;
  color: white;
`;

const HeaderContainer = styled(Header)`
  display: flex;
  width: 100%;
`;

const Place = styled(Link)`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 10px;
  width: 60px;
`;

import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { sessionState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const UPLOAD_FILE = gql`
  mutation uploadFile($userid: ID!, $token: String!, $upload: Upload!) {
    uploadFile(userid: $userid, token: $token, upload: $upload) {
      url
    }
  }
`;

export default () => {
  const [session] = useRecoilState(sessionState);
  const [uploadFileMutation, { loading, error, data }] = useMutation(
    UPLOAD_FILE,
    {
      onError(error) {
        console.log(error);
      },
    },
  );

  const uploadFile = ({
    target: {
      validity,
      files: [file],
    },
  }) => {
    if (validity.valid) {
      uploadFileMutation({
        variables: {
          userid: session.userid,
          token: session.token,
          upload: file,
        },
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) {
    if (error.message.includes("Cast to ObjectId")) {
      return <Error>El usuario no ha iniciado sesión correctamente</Error>;
    } else {
      return <Error>
        Ha ocurrido un error inesperado, vuelve a intentarlo más tarde
      </Error>;
    }
  }

  if (data) {
    const url = `http://192.168.0.101/${data.uploadFile.url}`;
    return (<UploadFile>
      <OK>Archivo subido correctamente</OK>
      <Image src={url} />
    </UploadFile>);
  }

  return (
    <UploadFile>
      <Title>Subir Archivo</Title>

      <Input
        type="file"
        name="file"
        id="file"
        required
        onChange={uploadFile}
      />
      <Label for="file">Escoge un archivo</Label>
    </UploadFile>
  );
};

const UploadFile = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 200px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #000055;
`;

const Input = styled.input`
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

const Label = styled.label`
  font-size: 1em;
  width: 200px;
  padding: 5px;
  border: black solid 1px;
  color: black;
  background-color: aquamarine;
  display: inline-block;
  &:hover{
    background-color: #aaaaaa;
    cursor: pointer
  }
`;

const Error = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
  font-size: 1.5em;
  color: #ff1111;
`;

const OK = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
  font-size: 1.5em;
  color: #11aa11;
`;

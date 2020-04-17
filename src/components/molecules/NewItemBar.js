import React from 'react';
import styled from "styled-components";
import { Formik } from "formik";

const StyledWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  border-left: 1px solid grey;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.25s ease-in-out;
  background-color: white;
`;


const StyledForm = styled.div``;
const StyledInput = styled.input``;
const StyledTextArea = styled.textarea``;
const Button = styled.button``;


const NewItemBar = ({ isVisible, handleClose, pageContext }) => (
  <StyledWrapper isVisible={isVisible}>
    <h1>NewItemBar{pageContext}</h1> 
    <Formik
      initialValues={{
        title: "",
        content: "",
        articleUrl: "",
        twitterName: "",
        created: "",
      }}
      onSubmit={(values) => {
        // addItem(pageContext, values);
        handleClose();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <StyledInput
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {pageContext === "twitters" && (
            <StyledInput
              placeholder="twitter name eg. hello_roman"
              type="text"
              name="twitterName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
            />
          )}
          {pageContext === "articles" && (
            <StyledInput
              placeholder="link"
              type="text"
              name="articleUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledTextArea
            name="content"
            as="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button type="submit" >
            Add Note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

export default NewItemBar;
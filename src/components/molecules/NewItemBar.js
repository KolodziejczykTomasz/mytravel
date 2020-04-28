import React from 'react';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import MainTemplates from 'templates/MainTemplates';

const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  border-left: 1px solid grey;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
  background-color: rgba(255, 255, 255, 1);
  z-index: 9999;
`;

const StyledTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 500;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled.input`
  display: block;
  height: 50px;
  margin: 15px auto;
  width: 500px;
  padding-right: 20px;
  background-color: rgba(0, 0, 0, 0.2);
`;
const StyledTextArea = styled.textarea`
  display: block;
  height: 100px;
  margin: 15px auto;
  width: 500px;
  padding-right: 20px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 70px;
  height: 70px;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  border-radius: 100px;
  margin-bottom: 20px;
`;

const NewItemBar = ({ isVisible, handleClose, pageContext, addItem }) => (
  <MainTemplates>
    <StyledWrapper isVisible={isVisible}>
      <StyledButtonWrapper>
        <button className="delete is-medium" onClick={handleClose}></button>
      </StyledButtonWrapper>

      <StyledTitle>Nowy obiekt {pageContext}</StyledTitle>
      <Formik
        initialValues={{
          name: '',
          cordinatesN: '',
          cordinatesE: '',
          woj: '',
          powiat: '',
          gmina: '',
          miejscowosc: '',
          description: '',
        }}
        onSubmit={(values) => {
          addItem(pageContext, values);
          handleClose();
        }}
      >
        {({ values, handleChange, handleBlur, resetForm }) => (
          <StyledForm>
            <StyledInput
              type="text"
              name="name"
              placeholder="Nazwa"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />

            <StyledInput
              type="text"
              name="cordinatesN"
              placeholder="N"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cordinatesN}
            />

            <StyledInput
              type="text"
              name="cordinatesE"
              placeholder="E"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cordinatesE}
            />

            <StyledInput
              type="text"
              name="woj"
              placeholder="Wojewódzctwo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.woj}
            />

            <StyledInput
              type="text"
              name="powiat"
              placeholder="Powiat"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.powiat}
            />

            <StyledInput
              type="text"
              name="gmina"
              placeholder="Gmina"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.gmina}
            />

            <StyledInput
              type="text"
              name="miejscowosc"
              placeholder="Miejscowość"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.miejscowosc}
            />

            <StyledTextArea
              name="description"
              as="textarea"
              placeholder="Opis"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <StyledButtonWrapper>
              <StyledButton
                onClick={() =>
                  resetForm({
                    name: '',
                    cordinatesN: '',
                    cordinatesE: '',
                    woj: '',
                    powiat: '',
                    gmina: '',
                    miejscowosc: '',
                    description: '',
                  })
                }
                type="submit"
              >
                DODAJ
              </StyledButton>
            </StyledButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  </MainTemplates>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));

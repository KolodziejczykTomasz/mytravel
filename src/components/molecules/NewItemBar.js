import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import MainTemplates from 'templates/MainTemplates';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

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

const StyledSpan = styled.span`
  color: blue;
  font-weight: 600;
`;

const StyledMessageError = styled.div`
  color: red;
`;

class NewItemBar extends Component {
  render() {
    const { isVisible, handleClose, pageContext, addItem } = this.props;
    return (
      <MainTemplates>
        <StyledWrapper isVisible={isVisible}>
          <StyledButtonWrapper>
            <button className="delete is-medium" onClick={handleClose}></button>
          </StyledButtonWrapper>

          <StyledTitle>
            Nowy{' '}
            <StyledSpan>
              {pageContext === 'castles' ? 'zamek lub pałac' : 'obiekt zapomniany'}
              <hr style={{ margin: '.5rem 0' }} />
            </StyledSpan>
          </StyledTitle>
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
            validationSchema={Yup.object({
              name: Yup.string()
                .min(2, 'Nazwa jest zbyt krótka!')
                .max(50, 'Zbyt długa nazwa!')
                .required('Pole obowiązkowe'),
              cordinatesE: Yup.number(),
              cordinatesN: Yup.number(),
            })}
            onSubmit={(values, { resetForm }) => {
              addItem(pageContext, values);
              handleClose();
              resetForm({ values: '' });
            }}
          >
            {({ values, handleChange, handleBlur, touched, errors }) => (
              <StyledForm>
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="Nazwa"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name ? (
                  <StyledMessageError>{errors.name}</StyledMessageError>
                ) : null}

                <StyledInput
                  type="text"
                  name="cordinatesN"
                  placeholder="N"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cordinatesN}
                />
                {errors.cordinatesN && touched.cordinatesN ? (
                  <StyledMessageError>Użyj lidzb aby uzupełnić pole</StyledMessageError>
                ) : null}
                <StyledInput
                  type="text"
                  name="cordinatesE"
                  placeholder="E"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cordinatesE}
                />
                {errors.cordinatesE && touched.cordinatesE ? (
                  <StyledMessageError>Użyj lidzb aby uzupełnić pole</StyledMessageError>
                ) : null}
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
                  <button type="submit" className="button is-info is-rounded">
                    DODAJ
                  </button>
                </StyledButtonWrapper>
              </StyledForm>
            )}
          </Formik>
        </StyledWrapper>
      </MainTemplates>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['castles', 'forgotens']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));

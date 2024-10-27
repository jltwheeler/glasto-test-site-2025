import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "./components/LoadingSpinner";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
`;

const Header = styled.h1`
  color: #000;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subheader = styled.h2`
  color: #666;
  font-size: 18px;
  margin-bottom: 5px;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const SectionTitle = styled.h3`
  color: #000;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Instructions = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
`;

const InstructionHighlight = styled.p`
  color: #000;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 20px;
`;

const FieldsetTitle = styled.h4`
  color: #000;
  font-size: 16px;
  margin-bottom: 10px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #666;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const ClearButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #c82333;
  }
`;

const ShowWebsiteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  padding: 30px 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  margin: 50px auto;
  display: block;
  width: 80%;
  max-width: 400px;
  text-transform: uppercase;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #cc0000;
    transform: scale(1.05);
  }
`;

const SpinnerContainer = styled.div`
  margin-bottom: 20px;
`;

const App = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [postcode, setPostcode] = useState("");
  const [showWebsite, setShowWebsite] = useState(false);

  const additionalTickets = [
    { regNumber: "", postcode: "" },
    { regNumber: "", postcode: "" },
    { regNumber: "", postcode: "" },
    { regNumber: "", postcode: "" },
    { regNumber: "", postcode: "" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  useEffect(() => {
    Math.random() > 0.995 && setShowWebsite(true);
  }, []);

  if (!showWebsite) {
    return (
      <Container>
        <SpinnerContainer>
          <LoadingSpinner />
          <div style={{ textAlign: "center" }}>
            Hold tight you're in the queue...
          </div>
        </SpinnerContainer>
        <ShowWebsiteButton onClick={() => setShowWebsite(true)}>
          Show Website
        </ShowWebsiteButton>
      </Container>
    );
  }

  return (
    <Container>
      <Header>GLATONBURY 2025 DEPOSITS</Header>
      <Subheader>
        Worthy Farm, Pilton, Somerset, 25th - 29th June 2025
      </Subheader>

      <Form onSubmit={handleSubmit}>
        <SectionTitle>REGISTRATION</SectionTitle>
        <Instructions>
          Please enter the registration number and postcode for each person
          (aged 13 or over) for whom you are placing a deposit. You may enter up
          to 6 people's registration details, but can only purchase 1 ticket per
          registration.
        </Instructions>
        <div>
          <strong>Your Responsibility</strong>
        </div>
        <Instructions>
          You are booking a general admission ticket deposit. This means that
          you will pay just £75.00 per admission ticket now.
        </Instructions>
        <Instructions>
          All ticket balances will be payable in the first week of April 2025
          from 09:00 BST Tuesday 1st April - 23:59 BST Monday 7th April 2025
          when it should be possible to add car parking passes and cancellation
          protection to your booking.
        </Instructions>
        <Instructions>
          If you have not paid your balance by the end of the balance payment
          window, or you decide to cancel your deposit, you will be charged an
          administration fee of £25.00 per ticket and refunded £50.00 per
          ticket. You will be sent a reminder email when the deadline is
          approaching. However, ultimately, you are responsible for paying your
          ticket balance.
        </Instructions>
        <InstructionHighlight>
          Please enter your Glastonbury registration details below.
        </InstructionHighlight>

        <FieldsetTitle>YOUR DETAILS</FieldsetTitle>
        <InputGroup>
          <Label>Registration Number:</Label>
          <Input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Postcode:</Label>
          <Input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </InputGroup>

        <FieldsetTitle>ADD UP TO 5 ADDITIONAL TICKETS</FieldsetTitle>
        {additionalTickets.map((ticket, index) => (
          <div key={index}>
            <InputGroup>
              <Label>Registration Number:</Label>
              <Input
                type="text"
                value={ticket.regNumber}
                onChange={(e) => {
                  const newTickets = [...additionalTickets];
                  newTickets[index].regNumber = e.target.value;
                }}
              />
            </InputGroup>
            <InputGroup>
              <Label>Postcode:</Label>
              <Input
                type="text"
                value={ticket.postcode}
                onChange={(e) => {
                  const newTickets = [...additionalTickets];
                  newTickets[index].postcode = e.target.value;
                }}
              />
            </InputGroup>
          </div>
        ))}

        <SubmitButton type="submit">Proceed</SubmitButton>
        <ClearButton
          type="button"
          onClick={() => {
            setRegistrationNumber("");
            setPostcode("");
          }}
        >
          Clear registration form
        </ClearButton>
      </Form>
    </Container>
  );
};

export default App;

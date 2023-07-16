import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const TextProperties = styled.p`
    color: #fff;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;
  const FlexProperties = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const MainBox = styled(FlexProperties)`
    height: 100vh;
  `;
  const Flex = styled.div`
    display: flex;
    align-items: center;
  `;
  const LeftBox = styled.div`
    flex-direction: column;
  `;

  const Skip = styled(TextProperties)`
    display: inline-block;
    padding: 14px 24px;
    margin: 0;
    border: 4px solid white;
    font-size: 32px;
    font-style: italic;
    font-weight: 600;
  `;

  const Header = styled(TextProperties)`
    margin: 0;
    font-size: 96px;
    font-weight: 600;
  `;
  const DashedLine = styled.div`
    position: relative;
    width: 540px;
    height: 1px;
    background-image: linear-gradient(to right, transparent 50%, #0f0f0f 50%);
    background-position: 0 0;
    background-size: 30px 1px;
    background-repeat: repeat-x;
    background-clip: content-box;
    background-color: #4d4d4d;
  `;
  const Card = styled.div`
    display: inline-flex;
    padding: 97px 40px 47px 40px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 20px;

    background: var(
      --glass-1-fill-carey,
      linear-gradient(
        294deg,
        rgba(191, 191, 191, 0.06) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      rgba(0, 0, 0, 0.14)
    );
    box-shadow: -8px 4px 5px 0px rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(26.5px);
  `;
  const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const BoxForgotPassword = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 372px;
  `;
  const UpperSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  `;
  const LoginText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;
  const ForgotPasswordText = styled.p`
    margin: 0;
    color: #fff;
    font-family: Noto Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `;
  const EnterEmail = styled.p`
    color: #fff;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;
  const InputBtnBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  `;
  const Input = styled.input`
    display: flex;
    width: 367px;
    padding: 14px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid #fff;
    background: transparent;
    color: #fff;
    font-family: Noto Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;
  const ResetBox = styled.div`
    margin: 12px 0;
    display: flex;
    width: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const ResetBtn = styled.button`
    display: flex;
    width: 400px;
    padding: 14px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    background: linear-gradient(
      119deg,
      #e948c5 0%,
      #cd407b 53.13%,
      #75042d 100%
    );
    color: #fff;
    font-family: Noto Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;
  const HelpBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `;
  const Remember = styled(TextProperties)``;
  const CustoperCare = styled.div`
    display: flex;
    width: 400px;
    padding: 4px 6px;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    background: linear-gradient(
      180deg,
      rgba(98, 98, 98, 0) 0%,
      rgba(98, 98, 98, 0.25) 100%
    );
  `;
  const TextOr = styled(TextProperties)`
    color: #4d4d4d;
  `;
  const SecondBoxHelp = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
  `;
  const Elipse = styled.div`
    position: absolute;
    top: 5%;
    right: 34%;
    width: 302px;
    height: 302px;
    flex-shrink: 0;
    border-radius: 302px;

    background: linear-gradient(180deg, #61003a 0%, #2d0a30 100%);
  `;
  const SecondElipse = styled.div`
    position: absolute;
    top: 76%;
    right: 15%;
    width: 220px;
    height: 220px;
    flex-shrink: 0;
    border-radius: 302px;
    background: linear-gradient(180deg, #61004b 0%, #220a30 100%);
  `;
  const Underline = {
    textDecoration: "none",
  };
  return (
    <>
      <Elipse />
      <SecondElipse />
      <MainBox>
        <LeftBox>
          <Header>No Worries.!!</Header>
          <Flex>
            <Skip>Take me back.!</Skip>
            <DashedLine />
          </Flex>
        </LeftBox>
        <Card>
          <Frame>
            <BoxForgotPassword>
              <UpperSection>
                <LoginText>
                  <ForgotPasswordText>ForgotPassword ?</ForgotPasswordText>
                  <EnterEmail>Please enter you're email</EnterEmail>
                </LoginText>
                <InputBtnBox>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                      type="email"
                      placeholder="Example@email.com"
                      {...register("Example@email.com", {})}
                    />

                    <ResetBox type="submit">
                      <ResetBtn>Reset Password</ResetBtn>
                    </ResetBox>
                  </form>
                </InputBtnBox>
              </UpperSection>
              <HelpBox>
                <Link to={"/SingupPage"} style={Underline}>
                  <Remember>Don't have an account ? Signup</Remember>
                </Link>
                <CustoperCare>
                  <SecondBoxHelp>
                    <TextOr>Terms & Conditions</TextOr>
                  </SecondBoxHelp>
                  <SecondBoxHelp>
                    <TextOr>Support</TextOr>
                  </SecondBoxHelp>
                  <SecondBoxHelp>
                    <TextOr>Customer Care</TextOr>
                  </SecondBoxHelp>
                </CustoperCare>
              </HelpBox>
            </BoxForgotPassword>
          </Frame>
        </Card>
      </MainBox>
    </>
  );
}

export default ForgotPassword;

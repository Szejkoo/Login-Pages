import { React } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import BoxHelp from "./BoxHelp";
import { GithubLogo } from "../Icons/LogoGit";
import { LogoGog } from "../Icons/LogoGog";
import { LogoFace } from "../Icons/LogoFace";

function SignupPage() {
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
    gap: 101px;
  `;
  const BoxLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;
  const HeaderLogin = styled(TextProperties)`
    margin: 0;
    font-size: 36px;
    font-weight: 600;
  `;
  const TextLogin = styled(TextProperties)`
    margin-bottom: 10px;
  `;
  const BoxForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  `;
  const Form = styled.input`
    color: #fff;
    font-size: 20px;
    display: flex;
    width: 367px;
    padding: 14px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid #fff;
    background-color: transparent;
  `;

  const Remember = styled(TextProperties)``;

  const BoxLoginButton = styled(FlexProperties)`
    flex-direction: column;
    gap: 12px;
  `;
  const TextBtn = styled(TextProperties)`
    font-size: 20px;
    font-weight: 600;
  `;
  const Btn = styled.button`
    display: flex;
    width: 400px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;
    border-radius: 12px;
    background: linear-gradient(
      119deg,
      #2e4cee 0%,
      #221ebf 53.13%,
      #040f75 100%
    );
  `;
  const Other = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  `;
  const Or = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `;
  const Line = styled.div`
    width: 170px;
    height: 2px;
    background: #4d4d4d;
  `;
  const TextOr = styled(TextProperties)`
    color: #4d4d4d;
  `;
  const BoxIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
  `;

  const Elipse = styled.div`
    position: absolute;
    top: 12%;
    right: 34%;
    width: 302px;
    height: 302px;
    flex-shrink: 0;
    border-radius: 302px;
    background: linear-gradient(180deg, #190061 0%, #0a1b30 100%);
  `;
  const SecondElipse = styled.div`
    position: absolute;
    top: 72%;
    right: 10%;
    width: 220px;
    height: 220px;
    flex-shrink: 0;
    border-radius: 302px;
    background: linear-gradient(180deg, #000f61 0%, #0a1730 100%);
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
          <Header>Roll the Carpet.!</Header>
          <Flex>
            <Skip>Skip the lag ?</Skip>
            <DashedLine />
          </Flex>
        </LeftBox>
        <Card>
          <Frame>
            <BoxLogin>
              <HeaderLogin>Signup</HeaderLogin>
              <TextLogin>Just some details to get you in.!</TextLogin>

              <BoxForm>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px",
                  }}
                >
                  <Form
                    type="text"
                    placeholder="Username"
                    {...register("Username", {})}
                  />
                  <Form
                    type="email"
                    placeholder="Email / Phone"
                    {...register("Email / Phone", {})}
                  />
                  <Form
                    type="password"
                    placeholder="Password"
                    {...register("Password", {
                      maxLength: 8,
                    })}
                  />
                  <Form
                    type="password"
                    placeholder="Confirm Password"
                    {...register("Confirm Password", {
                      maxLength: 8,
                    })}
                  />

                  <BoxLoginButton>
                    <Btn>
                      <Btn type="submit">
                        <TextBtn>Signup</TextBtn>
                      </Btn>
                    </Btn>
                  </BoxLoginButton>
                </form>
                <Other>
                  <Or>
                    <Line />
                    <TextOr>Or</TextOr>
                    <Line></Line>
                  </Or>
                  <BoxIcons>
                    <LogoGog />
                    <LogoFace />
                    <GithubLogo />
                  </BoxIcons>
                  <Link to={"/"} style={Underline}>
                    <Remember>Already Registered? Login</Remember>
                  </Link>
                  <BoxHelp />
                </Other>
              </BoxForm>
            </BoxLogin>
          </Frame>
        </Card>
      </MainBox>
    </>
  );
}

export default SignupPage;

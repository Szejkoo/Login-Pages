import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { GithubLogo } from "../Icons/LogoGit";

function LoginPage() {
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

  const BoxInput = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
  `;
  const Remember = styled(TextProperties)``;

  const Input = styled.input.attrs({ type: "checkbox" })`
    width: 18px;
    height: 18px;
  `;
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
    border-radius: 12px;
    border: none;
    cursor: pointer;
    background: linear-gradient(
      119deg,
      #628eff 0%,
      #8740cd 53.13%,
      #580475 100%
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
  const BoxFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const BoxHelp = styled.div`
    display: flex;
    width: 400px;
    padding: 4px 6px;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    background: linear-gradient(
      180deg,
      rgba(98, 98, 98, 0) 0%,
      rgba(98, 98, 98, 0.07) 100%
    );
  `;
  const SecondBoxHelp = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
  `;
  const Elipse = styled.div`
    position: absolute;
    top: 12%;
    right: 34%;
    width: 302px;
    height: 302px;
    flex-shrink: 0;
    border-radius: 302px;
    background: linear-gradient(180deg, #530061 0%, #0d0a30 100%);
  `;
  const SecondElipse = styled.div`
    position: absolute;
    top: 72%;
    right: 10%;
    width: 220px;
    height: 220px;
    flex-shrink: 0;
    border-radius: 302px;
    background: linear-gradient(180deg, #530061 0%, #0d0a30 100%);
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
          <Header>Welcome Back .!</Header>
          <Flex>
            <Skip>Skip the lag ?</Skip>
            <DashedLine />
          </Flex>
        </LeftBox>
        <Card>
          <Frame>
            <BoxLogin>
              <HeaderLogin>Login</HeaderLogin>
              <TextLogin>Glad you're back .!</TextLogin>
              <BoxForm>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px",
                  }}
                >
                  <Form type="text" placeholder="Username" {...register} />
                  <Form
                    type="password"
                    placeholder="Password"
                    {...register("Password", {})}
                  />
                </form>
                <BoxInput>
                  <Input />
                  <Remember>Remember me</Remember>
                </BoxInput>
                <BoxLoginButton>
                  <Btn>
                    <TextBtn>Login</TextBtn>
                  </Btn>
                  <Link to="ForgotPassword" style={Underline}>
                    <TextLogin>Forgot password ?</TextLogin>
                  </Link>
                </BoxLoginButton>
                <Other>
                  <Or>
                    <Line />
                    <TextOr>Or</TextOr>
                    <Line></Line>
                  </Or>
                  <BoxIcons>
                    {/* Grafika svg do poprawy, musi byc importowana z osobnego pliku */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_97)">
                        <path
                          d="M14.6311 1.3814C10.4346 2.83719 6.81562 5.60032 4.30562 9.26494C1.79562 12.9296 0.526938 17.3025 0.685917 21.7414C0.844897 26.1804 2.42316 30.4514 5.18889 33.927C7.95462 37.4027 11.762 39.8999 16.0519 41.0517C19.5297 41.9491 23.1735 41.9885 26.67 41.1666C29.8374 40.4551 32.7658 38.9332 35.1684 36.75C37.669 34.4083 39.4841 31.4294 40.4184 28.1334C41.4337 24.5492 41.6144 20.78 40.9467 17.115H21.4167V25.2164H32.7272C32.5011 26.5085 32.0167 27.7417 31.303 28.8423C30.5892 29.9428 29.6607 30.8881 28.5731 31.6214C27.1922 32.5353 25.6352 33.1501 24.0023 33.4261C22.3648 33.7306 20.6852 33.7306 19.0477 33.4261C17.3878 33.0833 15.8177 32.3983 14.4375 31.4147C12.2199 29.8449 10.5547 27.6147 9.67968 25.0425C8.7901 22.422 8.7901 19.5812 9.67968 16.9608C10.3026 15.124 11.3322 13.4516 12.6919 12.0684C14.2478 10.4565 16.2177 9.3043 18.3854 8.73821C20.553 8.17213 22.8347 8.21405 24.9802 8.85937C26.6562 9.37362 28.1889 10.2725 29.4558 11.4844C30.7311 10.2156 32.0042 8.94359 33.2752 7.66827C33.9314 6.98249 34.6467 6.32952 35.2931 5.62734C33.3589 3.82763 31.0887 2.42715 28.6125 1.50609C24.1031 -0.13129 19.169 -0.175292 14.6311 1.3814Z"
                          fill="white"
                        />
                        <path
                          d="M14.6311 1.38141C19.1686 -0.176343 24.1027 -0.133498 28.6125 1.50281C31.0892 2.43013 33.3584 3.83736 35.2899 5.64375C34.6336 6.34594 33.9413 7.00219 33.2719 7.68469C31.9988 8.95563 30.7267 10.2222 29.4558 11.4844C28.1889 10.2725 26.6562 9.37362 24.9802 8.85938C22.8355 8.21179 20.5538 8.16745 18.3856 8.73122C16.2173 9.29499 14.2463 10.4451 12.6886 12.0553C11.329 13.4385 10.2993 15.1109 9.67642 16.9477L2.87439 11.6812C5.3091 6.85309 9.52466 3.15992 14.6311 1.38141Z"
                          fill="#E33629"
                        />
                        <path
                          d="M1.06971 16.8984C1.43504 15.0864 2.04203 13.3317 2.87439 11.6812L9.67643 16.9608C8.78684 19.5812 8.78684 22.422 9.67643 25.0425C7.41018 26.7925 5.14283 28.5512 2.87439 30.3187C0.791296 26.1723 0.155986 21.4479 1.06971 16.8984Z"
                          fill="#F8BD00"
                        />
                        <path
                          d="M21.4167 17.1117H40.9467C41.6144 20.7767 41.4337 24.5459 40.4185 28.1302C39.4841 31.4261 37.669 34.4051 35.1685 36.7467C32.9733 35.0339 30.7683 33.3342 28.5731 31.6214C29.6615 30.8873 30.5904 29.9411 31.3042 28.8393C32.018 27.7376 32.502 26.5031 32.7272 25.2099H21.4167C21.4135 22.5127 21.4167 19.8122 21.4167 17.1117Z"
                          fill="#587DBD"
                        />
                        <path
                          d="M2.87109 30.3187C5.13953 28.5687 7.40687 26.81 9.67312 25.0425C10.5499 27.6156 12.2174 29.8459 14.4375 31.4147C15.822 32.3937 17.3955 33.0732 19.0575 33.4097C20.695 33.7142 22.3747 33.7142 24.0122 33.4097C25.645 33.1337 27.202 32.5189 28.583 31.605C30.7781 33.3178 32.9831 35.0175 35.1783 36.7303C32.776 38.9147 29.8476 40.4377 26.6798 41.1502C23.1834 41.9721 19.5396 41.9327 16.0617 41.0353C13.3111 40.3009 10.7417 39.0062 8.51484 37.2323C6.15801 35.3608 4.23293 33.0025 2.87109 30.3187Z"
                          fill="#319F43"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_97">
                          <rect width="42" height="42" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_103)">
                        <path
                          d="M42 21C42 9.40209 32.5979 0 21 0C9.40209 0 0 9.40193 0 21C0 31.4816 7.67944 40.1696 17.7188 41.7449V27.0703H12.3867V21H17.7188V16.3734C17.7188 11.1103 20.854 8.20312 25.6507 8.20312C27.9484 8.20312 30.3516 8.61328 30.3516 8.61328V13.7812H27.7036C25.0947 13.7812 24.2812 15.4001 24.2812 17.0609V21H30.1055L29.1744 27.0703H24.2812V41.7449C34.3206 40.1696 42 31.4818 42 21Z"
                          fill="#1877F2"
                        />
                        <path
                          d="M29.1744 27.0703L30.1055 21H24.2812V17.0609C24.2812 15.3999 25.0948 13.7812 27.7036 13.7812H30.3516V8.61328C30.3516 8.61328 27.9484 8.20312 25.6507 8.20312C20.854 8.20312 17.7188 11.1103 17.7188 16.3734V21H12.3867V27.0703H17.7188V41.7449C18.8042 41.915 19.9013 42.0003 21 42C22.0987 42.0003 23.1958 41.915 24.2812 41.7449V27.0703H29.1744Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_103">
                          <rect width="42" height="42" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <GithubLogo />
                  </BoxIcons>
                  <BoxFooter>
                    <Link to={"SignupPage"} style={Underline}>
                      <Remember>Don't have an account ? Signup</Remember>
                    </Link>

                    <BoxHelp>
                      <SecondBoxHelp>
                        <TextOr>Terms & Conditions</TextOr>
                      </SecondBoxHelp>
                      <SecondBoxHelp>
                        <TextOr>Support</TextOr>
                      </SecondBoxHelp>
                      <SecondBoxHelp>
                        <TextOr>Customer Care</TextOr>
                      </SecondBoxHelp>
                    </BoxHelp>
                  </BoxFooter>
                </Other>
              </BoxForm>
            </BoxLogin>
          </Frame>
        </Card>
      </MainBox>
    </>
  );
}

export default LoginPage;

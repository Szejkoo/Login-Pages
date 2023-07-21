import React from "react";
import { styled } from "styled-components";

function BoxHelp() {
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
      rgba(98, 98, 98, 0.25) 100%
    );
  `;
  const TextOr = styled.div`
    color: #4d4d4d;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;
  const SecondBoxHelp = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
  `;
  return (
    <>
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
    </>
  );
}

export default BoxHelp;

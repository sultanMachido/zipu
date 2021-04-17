import styled from 'styled-components';

export const TripPackageCards = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    transition: all .2s ease-out;
    text-align: left;
    left: ${({ position }) => position}rem
  `;
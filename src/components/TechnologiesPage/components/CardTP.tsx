import styled from "styled-components";

const StyledCardTP = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  transition: color 0.2s;
  @media (max-width: 800px) {
    padding: 20px;
  }
  @media (max-width: 700px) {
    gap: 10px;
  }
  @media (max-width: 500px) {
    padding: 15px;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export default function CardTP({ children }: { children: React.ReactNode }) {
  return <StyledCardTP className="card">{children}</StyledCardTP>;
}

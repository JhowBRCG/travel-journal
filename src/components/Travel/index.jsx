import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";

const Travel = ({item}) => {
  return (
    <Article>
      <Img src={item.imageUrl} />
      <div>
        <Location>
          <FaLocationDot />
          <p>{item.location}</p>
          <a href={item.googleMapsUrl}>View on Google Maps</a>
        </Location>
        <Title>{item.title}</Title>
        <Date>{item.startDate} - {item.endDate}</Date>
        <Description>
          {item.description}
        </Description>
      </div>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  border: 1px solid #0000002f;
  background: #fff;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Img = styled.img`
  max-width: 20%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 425px) {
    max-width: 100%;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  svg {
    color: #f34f50;
  }

  p {
    text-transform: uppercase;
    margin-left: 5px;
    letter-spacing: 2px;
  }

  a {
    font-size: 14px;
    margin-left: 10px;
    color: #f34f4fbe;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  margin-top: 10px;
`;

const Date = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin-top: 25px;
`;

const Description = styled.p`
  margin-top: 10px;
`;

export default Travel;

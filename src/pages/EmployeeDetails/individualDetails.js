import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Link, useLocation, useHistory } from "react-router-dom";
import { getEmployeesById } from "../../hooks";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import Card from "../../components/Card";
import { employeeManager } from "../../routes";
import Avatar, { AvatarRoot } from "../../components/Avatar";
import { getRandomColor } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  ${AvatarRoot} {
    margin-right: 40px;
  }
`;

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 50%;
  margin: 15px 0;
  font-size: 20px;
  .icon {
    margin-right: 10px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    > span {
      display: block;
      width: 100%;
      font-size: 16px;
      font-weight: 500;
    }
  }
  > span {
    font-size: 15px;
    margin-left: 24px;
    margin-top: 4px;
  }
`;

const Name = styled.h4`
  font-size: 30px;
  font-weight: 700;
  margin: 0px;
`;

const Email = styled.p`
  font-size: 16px;
  margin: 5px 0px 0px 0px;
  color: var(--primary-fill);
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 128px;
  padding-top: 30px;
`;

const BackButton = styled.button`
  height: 40px;
  width: 40px;
  padding: 5px;
  border-radius: 100%;
  border: none;
  background: rgb(232 240 255);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease;
  transition-property: background, box-shadow;
  .icon {
    color: var(--primary-fill);
  }
  :hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    background: rgb(212 223 242);
  }
`;

const Title = ({ icon, title, value }) => {
  return (
    <TitleText>
      <div className="wrapper">
        <FontAwesomeIcon icon={icon} size="xs" className="icon" />
        <span>{title}</span>
      </div>
      <span>{value}</span>
    </TitleText>
  );
};

const IndividualDetails = () => {
  const history = useHistory();
  const path = useLocation().pathname.split("/");
  const userId = path[path.length - 1];

  const { data, isLoading, isError } = getEmployeesById(userId);
  const userDetails = data?.data;

  const handleBackClick = () => {
    history.push(employeeManager);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <Card width="900px" centered transparent>
        <Link onClick={handleBackClick}>
          <BackButton>
            <FontAwesomeIcon icon="angle-left" size="lg" className="icon" />
          </BackButton>
        </Link>
      </Card>
      <Card width="900px" centered>
        <Wrapper>
          <Header>
            <Avatar color={getRandomColor()} size="lg">
              {userDetails.first_name.split("")[0]}
              {userDetails.last_name.split("")[0]}
            </Avatar>
            <div>
              <Name>
                {userDetails.first_name} {userDetails.last_name}
              </Name>
              <Email>@{userDetails.username}</Email>
            </div>
          </Header>
          <Content>
            <Title
              icon="user"
              title="Employee Id"
              value={
                userDetails.employee_id <= 9
                  ? `0${userDetails.employee_id}`
                  : userDetails.employee_id
              }
            />
            <Title
              icon="location-arrow"
              title="Address"
              value={userDetails.address}
            />
            <Title
              icon="birthday-cake"
              title="Birthday"
              value={moment(userDetails.birthday).format("DD MMM YY")}
            />
            <Title
              icon="calendar"
              title="Joined date"
              value={moment(userDetails.joined_date).format("DD MMM YY")}
            />
            <Title icon="inbox" title="Email" value={userDetails.email} />
            <Title
              icon="award"
              title="Department"
              value={userDetails.department}
            />
            <Title icon="phone-alt" title="Phone" value={userDetails.phone} />
          </Content>
        </Wrapper>
      </Card>
    </>
  );
};

export default IndividualDetails;

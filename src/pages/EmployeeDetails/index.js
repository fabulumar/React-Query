import React from "react";
import moment from "moment";
import styled from "styled-components";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import Avatar from "../../components/Avatar";
import { getAllEmployees } from "../../hooks/index";
import Card from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { individualDetails } from "../../routes";
import { getRandomColor } from "../../utils";

const StyledTable = styled.table`
  box-sizing: border-box;
  border: none;
  border-collapse: collapse;
  width: 100%;
`;

const StyledTHead = styled.thead`
  tr {
    th {
      text-align: left;
      padding: 5px 15px;
      font-size: 14px;
      color: rgb(45 45 45);
    }
  }
`;

const StyledTBody = styled.tbody`
  tr {
    cursor: pointer;
    &:hover {
      td {
        color: var(--primary-fill);
      }
    }

    td {
      text-align: left;
      padding: 15px 15px;
      font-size: 13px;
      font-weight: 500;
      &:first-child {
        max-width: 35px;
        min-width: 35px;
      }
    }
    &:not(:last-child) {
      border-bottom: 1px solid rgb(240 240 240);
    }
  }
`;

const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(167 170 174 / 10%);
  border-radius: 4px;
  border: none;
  margin-left: auto;
  padding: 6px 6px;
  height: 25px;
  width: 25px;
  line-height: 1;
  transition: 0.2s ease background;
  cursor: pointer;
  .editIcon {
    color: rgb(142 142 143);
  }
  &:hover {
    background: rgb(167 170 174 / 30%);
  }
`;

const UserFullName = styled.span`
  display: block;
`;

const UserName = styled.span`
  font-size: 12px;
  color: grey;
`;

const EmployeeDetails = () => {
  const { data, status } = getAllEmployees();
  const employeeList = data?.data;
  const history = useHistory();

  const handleListClick = (event) => {
    const url = individualDetails.replace(":userId", event.currentTarget.id);
    history.push(url);
  };

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : status === "success" ? (
        <Card width="900px" centered>
          <StyledTable>
            <StyledTHead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Date Joined</th>
                <th>Birthday</th>
                <th></th>
              </tr>
            </StyledTHead>
            <StyledTBody>
              {employeeList.length &&
                employeeList.map((row) => (
                  <tr key={row._id} id={row._id} onClick={handleListClick}>
                    <td>
                      <Avatar color={getRandomColor()}>
                        {row.first_name.split("")[0]}
                        {row.last_name.split("")[0]}
                      </Avatar>
                    </td>
                    <td>
                      <UserFullName>{`${row.first_name} ${row.last_name}`}</UserFullName>
                      <UserName>@{row.username}</UserName>
                    </td>
                    <td>{row.email}</td>
                    <td>{row.department}</td>
                    <td>{moment(row.joined_date).format("DD MMM YY")}</td>
                    <td>{moment(row.birthday).format("DD MMM YY")}</td>
                    <td>
                      <EditButton>
                        <FontAwesomeIcon icon="pen" className="editIcon" />
                      </EditButton>
                    </td>
                  </tr>
                ))}
            </StyledTBody>
          </StyledTable>
        </Card>
      ) : (
        <ErrorMessage />
      )}
    </>
  );
};

export default EmployeeDetails;

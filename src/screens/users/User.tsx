import { Outlet, useParams } from "react-router";
import { Link } from "react-router-dom";
import { users } from "../../db";

const User = () => {
  const params = useParams();
  return (
    <>
      <h1>
        User ID : {params.userId}, User Name :
        {users[Number(params.userId) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>See Followers</Link>
      <Outlet
        context={{
          nameOfMyUser: users[Number(params.userId) - 1].name,
        }}
      ></Outlet>
    </>
  );
};

export default User;

import { useOutletContext } from "react-router";

type FollowersContext = {
  nameOfMyUser: string;
};

const Followers = () => {
  const contextData: FollowersContext = useOutletContext();

  return <h1>Here is {contextData.nameOfMyUser} Followers</h1>;
};

export default Followers;

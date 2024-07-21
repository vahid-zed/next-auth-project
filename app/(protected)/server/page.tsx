import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ServerComponentPage = async () => {
  const user = await currentUser();

  return <UserInfo label="💻 Server component" user={user} />;
};

export default ServerComponentPage;

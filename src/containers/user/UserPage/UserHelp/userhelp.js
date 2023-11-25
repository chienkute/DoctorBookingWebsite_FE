import UserTab from "containers/user/UserTab/userTab";
import { LoadingContext } from "context/LoadingContext";
import { memo, useContext } from "react";

const UserHelp = () => {
  const { loading, setLoading } = useContext(LoadingContext);
  return (
    <div className="UserPageContainer">
      <div className="UserPageContent">
        <UserTab></UserTab>
        {loading ? (
          <div className="lds lds-user">
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="help"></div>
        )}
      </div>
    </div>
  );
};
export default memo(UserHelp);

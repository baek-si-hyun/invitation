import { ReactComponent as ArrowSvg } from "../assets/svg/arrow.svg";
import { ReactComponent as CopySvg } from "../assets/svg/copy.svg";
import { AccountItem, ActiveDataItem } from "../interface/interface";

function AccountActiveItem({
  list,
  isActive,
  onClick,
}: {
  list: ActiveDataItem;
  isActive: boolean;
  onClick: any;
}) {
  // 복사 기능 함수
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("복사되었습니다.");
      })
      .catch(() => {
        alert("복사에 실패했습니다.");
      });
  };

  return (
    <div className={`account_active_item ${isActive ? "active" : ""}`}>
      <div className="account_default">
        <span className="account_default_title">{list.title}</span>
        <button className="account_default_btn" onClick={onClick}>
          <ArrowSvg className={`${isActive ? "active" : ""}`} />
        </button>
      </div>
      <div className="account_hidden_box">
        {list.data.map((item: AccountItem) => (
          <div className="account_hidden_item" key={item.content}>
            <button className="account_hidden_content_box">
              <div className="account_hidden_content_inner">
                <span className="account_hidden_content">{item.type}</span>
                <span className="account_hidden_content">|</span>
                <span className="account_hidden_content">{item.content}</span>
              </div>
              <div
                className="account_hidden_copy_btn"
                onClick={() => handleCopy(item.content)}
              >
                <span>
                  <CopySvg />
                </span>
                <span>복사</span>
              </div>
            </button>
            <div className="account_hidden_name_box">
              <span className="account_hidden_content">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountActiveItem;

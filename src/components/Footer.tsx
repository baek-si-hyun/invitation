import "../scss/footer.scss";

declare global {
  interface Window {
    Kakao: any; // 카카오 SDK를 전역으로 사용하기 위해 선언
  }
}

function Footer() {
  const handleKakaoShare = () => {
    if (!window.Kakao) {
      alert("Kakao SDK 로드 실패");
      return;
    }

    window.Kakao.cleanup();
    window.Kakao.init("f3e039d436f4f3bd921cdc7758b5dc2e");

    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "카카오톡 공유하기 예시 타이틀",
        description: "공유할 간단한 내용",
        imageUrl: "https://yourimageurl.com/example.jpg",
        link: {
          mobileWebUrl: "https://baek-si-hyun.github.io/invitation",
          webUrl: "https://baek-si-hyun.github.io/invitation",
        },
      },
      buttons: [
        {
          title: "사이트 바로가기",
          link: {
            mobileWebUrl: "https://baek-si-hyun.github.io/invitation",
            webUrl: "https://baek-si-hyun.github.io/invitation",
          },
        },
      ],
    });
  };

  const handleFacebookShare = () => {
    const currentUrl = window.location.href;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=https://baek-si-hyun.github.io/invitation`;
    // 새 창으로 열기
    window.open(facebookShareUrl, "_blank");
  };

  const handleLinkCopy = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("링크가 복사되었습니다.");
      })
      .catch(() => {
        alert("링크 복사에 실패했습니다. 다시 시도해주세요.");
      });
  };

  return (
    <footer>
      <div className="footer_section">
        {/* 카카오톡 공유하기 */}
        <span className="footer_share" onClick={handleKakaoShare}>
          카카오톡 공유하기
        </span>
        {/* 페이스북 공유하기 */}
        <span className="footer_share" onClick={handleFacebookShare}>
          페이스북 공유하기
        </span>
        {/* 링크 복사하기 */}
        <span className="footer_share" onClick={handleLinkCopy}>
          링크 복사하기
        </span>
      </div>
      <div className="footer_section">
        <span className="footer_copyright">
          Copyright © 2024 Seungmin and Seunghwa. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;

import "../scss/Main/main.scss";
import { ReactComponent as CallSvg } from "../assets/svg/call.svg";
import { ReactComponent as SmsSvg } from "../assets/svg/sms.svg";
import NaverMap from "../components/NaverMap";
function Main() {
  return (
    <div className="container">
      <section>
        <div className="landing_title_box">
          <span className="landing_title">SAVE THE DATE</span>
        </div>
        <div className="landing_title_date_box">
          <span className="landing_title_date">05</span>
          <span className="landing_title_date">17</span>
        </div>
        <div className="landing_sub_title_box">
          <span className="landing_sub_title">FOR THE WEDDING OF</span>
        </div>
        <div className="landing_member_box">
          <span className="landing_member_item">신승민</span>
          <span className="landing_member_item">&</span>
          <span className="landing_member_item">김승화</span>
        </div>
        <div className="main_img_box">
          <img
            src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/2fb70e88-9a0c-42dc-c4e7-f6bbab271500/invitation"
            alt="main_img"
            className="main_img"
          />
        </div>
        <div className="landing_description_box">
          <span className="landing_description_item">
            2025.05.17 / 토요일 / PM 12:00
          </span>
          <span className="landing_description_item">누아주가든</span>
        </div>
      </section>
      <section>
        <div className="content_title_box">
          <span className="content_title">INVITATION</span>
        </div>
        <div className="intro_content_box">
          <div className="intro_content">
            <span>여덟 번의 사계절을 지나</span>
            <span>아홉 번째 맞이하는 봄 하늘 아래</span>
            <span>이제는 부부로서 연을 이어나가고자 합니다.</span>
            <span>함께 자리하여 축복해 주시면</span>
            <span>더없는 기쁨이겠습니다.</span>
          </div>
          <span className="border_line" />
          <div className="family_list_box">
            <div className="family_item_box">
              <div className="parents_box">
                <span className="parents">신창인 · 신정난</span>
                <span className="word">의</span>
              </div>
              <span className="word">아들</span>
              <span className="concerned_party">승민</span>
            </div>
            <div className="family_item_box">
              <div className="parents_box">
                <span className="parents">김순용 · 강민아</span>
                <span className="word">의</span>
              </div>
              <span className="word">딸</span>
              <span className="concerned_party">승화</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="content_title_box">
          <span className="content_title">CONTACT</span>
        </div>
        <div className="contact_content_box">
          <div className="bride_groom_box">
            <div className="bride_groom_item">
              <span className="bride_groom_title">신랑에게 연락하기</span>
              <button className="bride_groom_call_btn">
                <CallSvg />
              </button>
              <button className="bride_groom_sms_btn">
                <SmsSvg />
              </button>
            </div>
            <div className="bride_groom_item">
              <span className="bride_groom_title">신부에게 연락하기</span>
              <button className="bride_groom_call_btn">
                <CallSvg />
              </button>
              <button className="bride_groom_sms_btn">
                <SmsSvg />
              </button>
            </div>
          </div>
          <div className="content_title_box">
            <span className="content_title">혼주에게 연락하기</span>
          </div>
          <div className="host_box">
            <div className="host_item_box">
              <span className="host_title">신랑 측 혼주</span>
              <div className="host_item">
                <div className="host_info">
                  <span>아버지</span>
                  <span className="host_info_bold">신창인</span>
                </div>
                <div className="host_action_box">
                  <button className="host_action">
                    <CallSvg />
                  </button>
                  <button className="host_action">
                    <SmsSvg />
                  </button>
                </div>
              </div>
              <div className="host_item">
                <div className="host_info">
                  <span>아버지</span>
                  <span className="host_info_bold">신정난</span>
                </div>
                <div className="host_action_box">
                  <button className="host_action">
                    <CallSvg />
                  </button>
                  <button className="host_action">
                    <SmsSvg />
                  </button>
                </div>
              </div>
            </div>
            <div className="host_item_box">
              <span className="host_title">신부 측 혼주</span>
              <div className="host_item">
                <div className="host_info">
                  <span>아버지</span>
                  <span className="host_info_bold">김순용</span>
                </div>
                <div className="host_action_box">
                  <button className="host_action">
                    <CallSvg />
                  </button>
                  <button className="host_action">
                    <SmsSvg />
                  </button>
                </div>
              </div>
              <div className="host_item">
                <div className="host_info">
                  <span>어머니</span>
                  <span className="host_info_bold">강민아</span>
                </div>
                <div className="host_action_box">
                  <button className="host_action">
                    <CallSvg />
                  </button>
                  <button className="host_action">
                    <SmsSvg />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="content_title_box">
          <span className="content_title">GALLERY</span>
        </div>
        <div className="gallery_box">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="gallery_item">
              <button className="gallery_btn">
                <img
                  src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/88750fba-f82b-460a-2200-0264f1b78d00/GALLERY"
                  alt="gallery_img"
                  className="gallery_img"
                />
              </button>
            </div>
          ))}
        </div>
        <div className="gallery_guide_box">
          <span className="gallery_guide">
            이미지를 클릭하시면 확대보기가 가능합니다.
          </span>
        </div>
      </section>
      <section>
        <div className="content_title_box">
          <span className="content_title">INVITATION</span>
        </div>
        <div className="location_content">
          <span className="location_content_title">누아주가든</span>
          <span className="location_content_item">
            경기도 하남시 미사동로40번길 229
          </span>
          <span className="location_content_item">070-4610-2480</span>
          <span className="location_content_item">
            본 예식은 야외에서 진행됩니다.
          </span>
        </div>
        <div className="">
          <NaverMap />
        </div>
      </section>
    </div>
  );
}

export default Main;

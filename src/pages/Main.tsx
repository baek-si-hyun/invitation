import "../scss/main.scss";
import { ReactComponent as CallSvg } from "../assets/svg/call.svg";
import { ReactComponent as SmsSvg } from "../assets/svg/sms.svg";
import NaverMap from "../components/NaverMap";
import Footer from "../components/Footer";
import { useState } from "react";
import AccountActiveItem from "../components/AccountActiveItem";
import Modal from "../components/Modal";
import { activeData, images } from "../data/staticData";
import weddingImg10 from "../assets/images/3.jpg"


function Main() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleToggle = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleImageClick = (index: number) => {
    setSelectedIndex(index); // 클릭된 이미지 인덱스 저장
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {" "}
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
              // src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/2fb70e88-9a0c-42dc-c4e7-f6bbab271500/invitation"
              src={weddingImg10}
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
                  <span className="parents">신창인 · 신문범</span>
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
                <a href="tel:+16479981784" className="bride_groom_call_btn">
                  <CallSvg />
                </a>
                <a href="sms:+16479981784" className="bride_groom_sms_btn">
                  <SmsSvg />
                </a>
              </div>
              <div className="bride_groom_item">
                <span className="bride_groom_title">신부에게 연락하기</span>
                <a href="tel:+16475679273" className="bride_groom_call_btn">
                  <CallSvg />
                </a>
                <a href="sms:+16475679273" className="bride_groom_sms_btn">
                  <SmsSvg />
                </a>
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
                    <a href="tel:+821085221783" className="host_action">
                      <CallSvg />
                    </a>
                    <a href="sms:+821085221783" className="host_action">
                      <SmsSvg />
                    </a>
                  </div>
                </div>
                <div className="host_item">
                  <div className="host_info">
                    <span>어머니</span>
                    <span className="host_info_bold">신문범</span>
                  </div>
                  <div className="host_action_box">
                    <a href="tel:+821022111783" className="host_action">
                      <CallSvg />
                    </a>
                    <a href="sms:+821022111783" className="host_action">
                      <SmsSvg />
                    </a>
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
                    <a href="tel:+821041446787" className="host_action">
                      <CallSvg />
                    </a>
                    <a href="sms:+821041446787" className="host_action">
                      <SmsSvg />
                    </a>
                  </div>
                </div>
                <div className="host_item">
                  <div className="host_info">
                    <span>어머니</span>
                    <span className="host_info_bold">강민아</span>
                  </div>
                  <div className="host_action_box">
                    <a href="tel:+821073500432" className="host_action">
                      <CallSvg />
                    </a>
                    <a href="sms:+821073500432" className="host_action">
                      <SmsSvg />
                    </a>
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
            {images.map((item, index) => (
              <div key={index} className="gallery_item">
                <button
                  className="gallery_btn"
                  onClick={() => handleImageClick(index)}
                >
                  <img src={item} alt="gallery_img" className="gallery_img" loading="lazy" />
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
          <div className="content_title_box_43">
            <span className="content_title">LOCATION</span>
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
          <div className="location_map_box">
            <NaverMap />
          </div>
          <div className="location_descript">
            <div className="location_descript_section">
              <span className="location_descript_title">주차</span>
              <span className="location_descript_content">
                누아주가든 입구 발렛 서비스 (무료)
              </span>
            </div>
            <div className="location_descript_section">
              <span className="location_descript_title">대중교통</span>
              <span className="location_descript_content">
                5호선 미사역 하차 4번 출구 - 택시 약 7분 소요 (4,300원 정도)
              </span>
            </div>
            <div className="location_descript_section">
              <span className="location_descript_title">셔틀버스</span>
              <span className="location_descript_content">
                5호선 미사역 하차 4번 출구 앞 (현수막이 있습니다)
              </span>
              <span className="location_descript_content">
                누아주가든 셔틀버스 20분 간격
              </span>
              <span className="location_descript_content">
                · 첫차 (누아주가든 방향) 오전 10시 40분
              </span>
              <span className="location_descript_content">
                · 막차 (미사역 방향) 오후 2시 40분
              </span>
            </div>
          </div>
        </section>
        <section>
          <div className="content_title_box_48">
            <span className="content_title">ACCOUNT</span>
          </div>
          <div className="account_box">
            <div className="account_item">
              <span className="account_content">
                식장 사정상 화환은 정중히 사양하겠습니다.
              </span>
              <span className="account_content">
                좋은 마음만 감사히 받겠습니다.
              </span>
            </div>
            <div className="account_item">
              <span className="account_content">
                신랑 & 신부에게 마음 전하기
              </span>
            </div>
            <div className="account_item">
              <span className="account_content">
                축복의 의미로 축의금을 전달해보세요.
              </span>
            </div>
          </div>
          <div className="account_active_box">
            {activeData.map((item, index) => (
              <AccountActiveItem
                list={item}
                isActive={activeIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </section>
        <Footer />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={images}
        initialIndex={selectedIndex}
      />
    </>
  );
}

export default Main;

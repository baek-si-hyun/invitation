import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ModalProps } from "../interface/interface";

// SVG 아이콘들 (직접 만든 컴포넌트 예시)
import { ReactComponent as CancelSvg } from "../assets/svg/cancel.svg";
import { ReactComponent as LeftSvg } from "../assets/svg/left.svg";
import { ReactComponent as RightSvg } from "../assets/svg/right.svg";

// 모달 & 슬라이더 스타일
import "../scss/modal.scss";

function Modal({ isOpen, onClose, images, initialIndex = 0 }: ModalProps) {
  // 현재 활성 슬라이드 인덱스 (0부터 시작)
  const [currentSlide, setCurrentSlide] = useState(initialIndex);

  // 모달 열림/닫힘 시 body 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // 모달이 열릴 때마다 초기 슬라이드 인덱스 설정
  useEffect(() => {
    setCurrentSlide(initialIndex);
  }, [initialIndex]);

  // 모달이 닫혀있다면 렌더링하지 않음
  if (!isOpen) return null;

  const totalSlides = images.length;

  return (
    <div className="modal_overlay">
      <div className="modal_content">
        {/* 상단 헤더 (현재 슬라이드 / 전체 슬라이드, 닫기 버튼) */}
        <div className="modal_header">
          <span>
            {currentSlide + 1}/{totalSlides}
          </span>
          <button className="modal_close" onClick={onClose}>
            <CancelSvg />
          </button>
        </div>

        {/* Swiper & 커스텀 내비게이션 버튼 */}
        <div className="swiper_container">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            // 커스텀 버튼 셀렉터 지정
            navigation={{
              nextEl: ".swiper_button_next",
              prevEl: ".swiper_button_prev",
            }}
            // 클릭된 이미지 인덱스부터 시작
            initialSlide={initialIndex}
            slidesPerView={1}
            speed={500}
            // 슬라이드 변경 시 현재 인덱스 갱신
            onSwiper={(swiper: SwiperCore) => {
              setCurrentSlide(swiper.realIndex);
            }}
            onSlideChange={(swiper: SwiperCore) => {
              setCurrentSlide(swiper.realIndex);
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`slide_${index}`}
                  className="swiper_image"
                  //이미지가 뷰포트(사용자가 보고 있는 화면 영역) 근처에 들어오기 전까지는 로드(다운로드)를 미룬다
                  // loading="lazy" 
                  //브라우저가 이미지를 비동기적으로 디코딩하게 지시한다
                  // decoding="async"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 커스텀 이전/다음 버튼 */}
          <button className="swiper_button_prev">
            <LeftSvg />
          </button>
          <button className="swiper_button_next">
            <RightSvg />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

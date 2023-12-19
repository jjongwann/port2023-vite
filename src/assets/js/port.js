import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port() {
    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".port__item"); //  port__item인 모든 요소를 배열로 수집

    gsap.to(horSection, { //gsap.to()를 사용하여 요소들을 수평으로 이동
        xPercent: -120 * (horSection.length - 1), //요소들을 수평으로 이동시키는데, 각 요소의 이동 거리 계산
        ease: "none", //이징은 요소의 움직임을 부드럽게 만들거나, 가속 또는 감속 효과를 주어 자연스러운 애니메이션 효과를 제공
        scrollTrigger: {
            trigger: "#port",
            start: "top 56px",
            end: "+=3000",
            pin: true, //요소를 스크롤 중에 고정
            scrub: 1, //스크롤 속도에 따라 요소가 부드럽게 따라 움직이도록 설정
            markers: false,  //디버깅을 위한 마커를 표시하지 않도록 설정
            invalidateOnRefresh: true,//스크롤이 새로고침될 때 ScrollTrigger를 재설정
            anticipatePin: 1, // 고정된 요소의 움직임을 예측
        },
    });
}
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn");

  // 로그인 모달 동적 로드
  fetch("./login_modal.html")
    .then((response) => response.text()) // fetch(비동기 함수)가 돌아가면 끝난 후 .then으로 이어갈 수 있도록 연결함
    .then((data) => {
      document.body.insertAdjacentHTML("beforeend", data); // 로그인 모달 HTML을 body에 추가
      initializeModal();
    })
    .catch((error) => console.error("로그인 모달 로딩 실패:", error)); //fetch와 같은 비동기작업에서 오류가 발생하면 catch가 실행됨

  // 로그인 모달을 로드하는 코드가 늦게 돌아가기 때문에, initializeModal 함수를 뒤에 선언해도 실제로는 먼저 동작함 (호이스팅이 아님)
  const initializeModal = () => {
    const modal = document.getElementById("loginModal");
    const closeBtn = document.querySelector(".close-modal");

    // 로그인 모달 열기
    loginBtn.addEventListener("click", () => {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    // 모달 닫기 처리
    const closeModal = () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    };

    closeBtn.addEventListener("click", closeModal);

    // 모달 배경 클릭 시 닫기
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  };

  // 모바일 메뉴 관련
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const mobileMenu = document.querySelector(".mobile-menu-container");
  const closeMenuBtn = document.querySelector(".close-menu-btn");
  const menuOverlay = document.querySelector(".menu-overlay");

  // 메뉴 오픈
  const openMenu = () => {
    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  // 메뉴 닫기
  const closeMenu = () => {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  hamburgerBtn.addEventListener("click", () => {
    openMenu();
  });

  closeMenuBtn.addEventListener("click", closeMenu);
  menuOverlay.addEventListener("click", closeMenu);

  // 검색창 토글 기능
  const searchToggleBtn = document.querySelector(".search-toggle-btn");
  const searchBar = document.querySelector(".search-bar");

  searchToggleBtn.addEventListener("click", () => {
    searchBar.classList.toggle("active");

    if (searchBar.classList.contains("active")) {
      const input = searchBar.querySelector("input");
      if (input) input.focus();
    }
  });

  // 외부 클릭 시 검색창 닫기
  document.addEventListener("click", (e) => {
    if (!searchBar.contains(e.target) && !searchToggleBtn.contains(e.target)) {
      searchBar.classList.remove("active");
    }
  });

  // 이모티콘 데이터 로드 & 렌더링
  const grid = document.getElementById("emoticonGrid");
  let allEmoticons = [];
  let currentCategory = "all";
  let searchTerm = "";

  // 데이터 가져오기 (비동기 처리) async->비동기 작업이 있음을 알림 / await->fetch로 데이터를 가져오면 뒤 코드가 이어서 실행됨
  const fetchEmoticons = async () => {
    try {
      // JSON 파일 요청
      const response = await fetch("./data/emoticons.json");

      if (!response.ok) {
        throw new Error("네트워크 응답에 문제가 있습니다.");
      }

      // JSON 변환
      allEmoticons = await response.json();

      // 초기 렌더링
      filterEmoticons();
    } catch (error) {
      console.error("이모티콘 로딩 실패:", error);
      if (grid) {
        grid.innerHTML = "<p>이모티콘을 불러오는데 실패했습니다.</p>";
      }
    }
  };

  // 필터링 로직 (카테고리)
  const filterEmoticons = () => {
    let filtered = allEmoticons;

    // 카테고리별 필터
    if (currentCategory !== "all") {
      filtered = filtered.filter((item) => item.category === currentCategory);
    }

    renderEmoticons(filtered);
  };

  // 화면 렌더링 함수
  const renderEmoticons = (emoticons) => {
    if (!grid) return;

    grid.innerHTML = ""; // 초기화

    if (emoticons.length === 0) {
      grid.innerHTML = "<p>검색 결과가 없습니다.</p>";
      return;
    }

    // 카드 생성 및 추가
    emoticons.forEach((item) => {
      const card = document.createElement("a");

      // 상세 페이지 링크 설정
      card.href = `./detail.html?id=${item.id}`;
      card.className = "emoticon-card";
      card.style.textDecoration = "none";

      card.innerHTML = `
          <div class="emoticon-img">${item.icon}</div>
          <div class="emoticon-info">
              <h3 class="emoticon-title">${item.title}</h3>
              <p class="emoticon-author">${item.author}</p>
              <p class="emoticon-price">${item.price}</p>
          </div>
      `;

      grid.appendChild(card);
    });
  };

  fetchEmoticons();

  // 카테고리 버튼 이벤트
  const categoryBtns = document.querySelectorAll(".category-btn");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 활성화 스타일 토글
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // 필터링 적용
      currentCategory = btn.dataset.category || "all";
      filterEmoticons();
    });
  });

  // 상세 페이지
  const detailContainer = document.getElementById("detailContainer");

  if (detailContainer) {
    const urlParams = new URLSearchParams(window.location.search); // URL에서 쿼리스트링을 가져옴
    const id = parseInt(urlParams.get("id")); // 쿼리스트링에서 id를 가져옴

    const fetchDetail = async () => {
      try {
        const response = await fetch("./data/emoticons.json"); // JSON 파일 요청
        if (!response.ok) throw new Error("네트워크 응답 오류"); // 응답이 정상적이지 않으면 에러를 던짐
        const emoticons = await response.json(); // JSON 파일을 JavaScript 객체로 변환
        const item = emoticons.find((e) => e.id === id); // id와 일치하는 이모티콘 찾음

        if (item) {
          renderDetail(item); // 상세 페이지 렌더링
        } else {
          detailContainer.innerHTML = "<p>상품을 찾을 수 없습니다.</p>";
        }
      } catch (error) {
        console.error("상세 정보 로딩 실패:", error); // 오류를 콘솔에 출력
        detailContainer.innerHTML =
          "<p>정보를 불러오는 중 오류가 발생했습니다.</p>";
      }
    };

    const renderDetail = (item) => {
      detailContainer.innerHTML = `
        <div class="detail-image">
            ${item.icon}
        </div>
        <div class="detail-info">
            <h1 class="detail-title">${item.title}</h1>
            <p class="detail-author">${item.author}</p>
            <p class="detail-price">${item.price}</p>
            <div class="detail-description">${item.details}</div>
            <div class="detail-buttons">
                <button class="btn-primary">구매하기</button>
                <button class="btn-secondary">선물하기</button>
            </div>
        </div>
      `;
    };

    fetchDetail();
  }
});

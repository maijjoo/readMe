var addPrjkt = window.document.getElementById("addProject");
addPrjkt.onclick = function() {
  window.document.getElementById("projectContainer").insertAdjacentHTML('afterbegin',
    `<div class="projectArea">
              <a href="#">
                <h1>프로젝트명</h1>
                <p>프로젝트 설명</p>
              </a>
            </div>`
  );
}
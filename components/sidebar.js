export function loadSidebar() {
  document.getElementById("sidebar").innerHTML = `
    <ul class="nav flex-column">
            <li class="nav-item">
              <a
                class="nav-link sidebar-link d-flex align-items-center"
                data-bs-toggle="collapse"
                href="#menu2"
                role="button"
                aria-expanded="false"
                aria-controls="menu2"
              >
                <i class="bi bi-graph-up me-2"></i>機台資料庫
                <i class="bi bi-chevron-right ms-auto"></i>
              </a>
              <div class="collapse" id="menu2">
                <ul class="list-unstyled">
                  <li class="nav-item">
                    <a
                      class="nav-link sidebar-link"
                      href="MachineManagement.html"
                      >機台管理</a
                    >
                  </li>

                </ul>
              </div>
            </li>
          </ul>
          <hr />
  `;
}

{/* <li class="nav-item">
<a
  class="nav-link sidebar-link"
  href="FrequencyResponseFunction.html"
  >頻率響應函數</a
>
</li> */}

export function loadHeader() {
  document.getElementById("header").innerHTML = `
    <nav id="top-nav" class="navbar navbar-expand-lg mb-3 web-header">
      <div class="container-fluid">
        <a
          class="web-logo"
          href="MachineManagement.html"
          title="ITRI 工業技術研究院"
        >
          <img src="./assets/images/logo-invert.svg" alt="工業技術研究院 識別標誌"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link text-white"
              >
                <i class="bi bi-person"></i> D100
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="login.html"
                ><i class="bi bi-lock"></i> 登出
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

{/* <li class="nav-item dropdown">
<a
  class="nav-link dropdown-toggle text-white"
  href="#"
  id="navbarDropdown"
  role="button"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  <i class="bi bi-person"></i> Admin
</a>
<ul
  class="dropdown-menu dropdown-menu-end"
  aria-labelledby="navbarDropdown"
>
  <li><a class="dropdown-item" href="#">My Profile</a></li>
</ul>
</li> 

<li class="nav-item">
<a class="nav-link text-white" href="login.html"
  ><i class="bi bi-lock"></i> Logout
</a>
</li>
*/}
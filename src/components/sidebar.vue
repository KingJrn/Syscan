<template>
  <div class="deznav">
    <div class="deznav-scroll">
      <ul class="metismenu" id="menu">
        <li>
          <RouterLink to="report" class="ai-icon" aria-expanded="false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill=""
              class="bi bi-graph-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
              />
            </svg>
            <span class="nav-text">Reporting</span>
          </RouterLink>
        </li>

        <li>
          <RouterLink to="scan" class="ai-icon" aria-expanded="false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill=""
              class="bi bi-upc-scan"
              viewBox="0 0 16 16"
            >
              <path
                d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z"
              />
            </svg>
            <span class="nav-text">Scan</span>
          </RouterLink>
        </li>

        <li>
          <RouterLink to="remediation" class="ai-icon" aria-expanded="false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill=""
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
              />
            </svg>
            <span class="nav-text">Remediation</span>
          </RouterLink>
        </li>

        <li>
          <RouterLink to="inventory" class="ai-icon" aria-expanded="false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill=""
              class="bi bi-file-earmark-bar-graph"
              viewBox="0 0 16 16"
            >
              <path
                d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z"
              />
              <path
                d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
              />
            </svg>
            <span class="nav-text">Inventory</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
  
</template>
<script>

export default {
  name: "Sidebar"
}
</script>
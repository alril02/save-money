<template>
  <q-layout>
  <div class="frame" role="application" aria-label="CoachPro dashboard">

  <!---SideBar-->
  <side-bar />
  <!---content-->
  <div class="flex-1">
  <header class="header">
        <div class="title">
          <div class="sub">Welcome back, Andrea 👋</div>
          <h1>Dashboard</h1>
        </div>

        <div class="header-right">
          <div class="search" role="search" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="opacity:0.7"><path d="M21 21l-4.35-4.35" stroke="#3f7b7b" stroke-width="2" stroke-linecap="round"/></svg>
            <input aria-label="Search input" placeholder="Search" style="border:none;background:transparent;outline:none;font-size:14px;width:160px"/>
          </div>
          <div title="Notifications" class="small-pill">🔔</div>
          <div class="avatar" title="Andrea Pirlo"></div>
        </div>
      </header>

  <q-page-container>
    <router-view />
  </q-page-container>
  </div>
  </div>
  </q-layout>
</template>
<script setup>
import SideBar from 'src/components/SideBar.vue'
</script>
<style>
    :root {
      --bg1: #d6eef0;
      --bg2: #e6e6f3;
      --accent: #0e9aa7;
      --muted: #6f8b8b;
      --card: rgba(255, 255, 255, 0.85);
      --glass-border: rgba(255, 255, 255, 0.6);
      --shadow: 0 8px 20px rgba(9, 30, 40, 0.08);
      --round: 14px;
    }

    * {
      box-sizing: border-box
    }

    html,
    body {
      height: 100%
    }

    body {
      margin: 0;
      font-family: 'Inter', system-ui, Segoe UI, Roboto, 'Helvetica Neue', Arial;
      background: linear-gradient(135deg, #cfeff0 0%, #e6e6f3 55%, #e9e7ff 100%);
      color: #0b2a2a;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* container */
    .frame {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.75));
      padding: 20px;
      display: flex;
      gap: 20px;
      backdrop-filter: blur(6px) saturate(120%);
    }

    /* sidebar */
    .sidebar {
      width: 220px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.12));
      border-radius: 16px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 18px;
      box-shadow: var(--shadow);
      border: 1px solid var(--glass-border);
      flex-shrink: 0;
    }

    .brand {
      font-weight: 700;
      font-size: 18px;
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .brand .logo {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      background: linear-gradient(135deg, #0e9aa7, #6bd3d8);
      display: inline-block;
      box-shadow: 0 4px 10px rgba(14, 154, 167, 0.22);
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 6px
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px;
      border-radius: 10px;
      color: var(--accent);
      font-weight: 600;
      background: transparent;
      cursor: pointer;
    }

    .nav-item.inactive {
      color: #406a6a;
      font-weight: 500;
      opacity: 0.9
    }

    .nav-item .icon {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      background: rgba(14, 154, 167, 0.08);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: var(--accent)
    }

    .sidebar .small {
      font-size: 12px;
      color: var(--muted);
      margin-top: auto;
      padding-top: 6px;
      border-top: 1px dashed rgba(0, 0, 0, 0.03)
    }

    /* main content */
    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;
      min-width: 0;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .title {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .title h1 {
      margin: 0;
      font-size: 36px;
      font-weight: 700;
      color: #073E3E;
      letter-spacing: -0.02em;
    }

    .title .sub {
      font-size: 14px;
      color: var(--muted)
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 12px
    }

    .search {
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(255, 255, 255, 0.7);
      padding: 8px 10px;
      border-radius: 12px;
      border: 1px solid rgba(0, 0, 0, 0.03)
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #e07fb2, #7ec8d3);
      display: inline-block
    }

    /* layout grid for cards */
    .grid {
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 16px;
      align-items: start;
    }

    /* left column stack */
    .left-col {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .card {
      background: var(--card);
      border-radius: var(--round);
      padding: 18px;
      box-shadow: var(--shadow);
      border: 1px solid rgba(255, 255, 255, 0.6);
    }

    /* next game card */
    .next-game {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px
    }

    .match {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .team {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 12px 18px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.5);
      min-width: 110px;
      text-align: center;
    }

    .team .logo {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: #333
    }

    .vs {
      font-weight: 700;
      color: #ff748c;
      padding: 6px 10px;
      border-radius: 10px;
      background: rgba(255, 116, 140, 0.08)
    }

    /* standings table */
    .standings table {
      width: 100%;
      border-collapse: collapse
    }

    .standings th,
    .standings td {
      padding: 10px 8px;
      text-align: left;
      font-size: 13px;
      color: #114141
    }

    .standings tr {
      background: transparent;
      border-bottom: 1px solid rgba(0, 0, 0, 0.04)
    }

    .standings tr td.rank {
      width: 30px;
      font-weight: 700;
      color: var(--accent)
    }

    .standings tr td.teamname {
      display: flex;
      align-items: center;
      gap: 10px
    }

    /* right column widgets */
    .right-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 6px;
    }

    .stat {
      padding: 16px;
      border-radius: 12px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.65));
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: flex-start;
    }

    .stat .label {
      font-size: 12px;
      color: var(--muted)
    }

    .stat .value {
      font-weight: 700;
      font-size: 20px
    }

    .progress {
      width: 100%;
      background: rgba(0, 0, 0, 0.06);
      height: 10px;
      border-radius: 999px;
      overflow: hidden;
    }

    .progress>i {
      display: block;
      height: 100%;
      border-radius: 999px;
      background: linear-gradient(90deg, #077b7f, #c9417f)
    }

    .games-stat {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* training promo */
    .promo {
      height: 120px;
      background: linear-gradient(90deg, #0e9aa7, #6bd3d8);
      color: white;
      border-radius: 12px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
    }

    .promo .cta {
      background: rgba(255, 255, 255, 0.14);
      padding: 8px 14px;
      border-radius: 10px;
      font-weight: 700;
      display: inline-block;
      width: max-content
    }

    /* small helper */
    .muted {
      color: var(--muted);
      font-size: 13px
    }

    .centered {
      display: flex;
      align-items: center;
      justify-content: center
    }

    .flex {
      display: flex;
      gap: 12px;
      align-items: center
    }

    .small-pill {
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.03);
      font-weight: 600
    }

    /* responsive */
    @media (max-width:1100px) {
      .frame {
        height: auto;
        flex-direction: column;
        padding: 16px
      }

      .grid {
        grid-template-columns: 1fr
      }

      .sidebar {
        width: 100%;
        flex-direction: row;
        overflow: auto;
        padding: 12px;
        border-radius: 12px
      }

      .main {
        width: 100%
      }
    }
  </style>
<template>
   <main class="main"> 
      <section class="grid" aria-hidden="false">
        <div class="left-col">
          <div class="card next-game" role="region" aria-label="Next game">
            <div>
              <div class="muted">Next game · Serie A · 21:00, 11 November, 2020</div>
              <div style="height:12px"></div>
              <div class="match">
                <div class="team">
                  <div class="logo">J</div>
                  <div style="font-weight:700">Juventus</div>
                </div>

                <div class="vs">vs</div>

                <div class="team">
                  <div class="logo" style="background:#dff3ea;color:#0b6b4b">S</div>
                  <div style="font-weight:700">Sassuolo</div>
                </div>
              </div>
            </div>
            <div style="min-width:170px;display:flex;flex-direction:column;align-items:flex-end;gap:10px">
              <button style="background:transparent;border:1px dashed rgba(0,0,0,0.06);padding:8px 12px;border-radius:10px;">View calendar</button>
              <div class="card" style="background:transparent;padding:6px 8px;border-radius:8px;border:1px solid rgba(0,0,0,0.04);box-shadow:none">
                <div class="muted">PL 8</div>
                <div style="display:flex;gap:8px;align-items:center">
                  <div style="font-weight:700;font-size:14px">6</div><div class="muted">Victories</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card standings" role="region" aria-label="Standings">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
              <div style="font-weight:700">Standings</div>
              <div class="muted">View all</div>
            </div>

            <table aria-hidden="false">
              <thead>
                <tr><th style="width:40px"></th><th>Team</th><th style="width:48px">MP</th><th style="width:48px">W</th><th style="width:48px">D</th><th style="width:48px">L</th><th style="width:64px;text-align:right">PTS</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td class="rank">1</td>
                  <td class="teamname"><div style="width:28px;height:28px;border-radius:6px;background:white;display:inline-flex;align-items:center;justify-content:center;margin-right:8px">J</div>Juventus</td>
                  <td>8</td><td>6</td><td>1</td><td>1</td><td style="text-align:right">19</td>
                </tr>
                <tr>
                  <td class="rank">2</td>
                  <td class="teamname"><div style="width:28px;height:28px;border-radius:6px;background:white;display:inline-flex;align-items:center;justify-content:center;margin-right:8px">A</div>Atalanta</td>
                  <td>8</td><td>5</td><td>1</td><td>2</td><td style="text-align:right">16</td>
                </tr>
                <tr>
                  <td class="rank">3</td>
                  <td class="teamname"><div style="width:28px;height:28px;border-radius:6px;background:white;display:inline-flex;align-items:center;justify-content:center;margin-right:8px">I</div>Inter</td>
                  <td>8</td><td>5</td><td>0</td><td>3</td><td style="text-align:right">15</td>
                </tr>
                <tr>
                  <td class="rank">4</td>
                  <td class="teamname"><div style="width:28px;height:28px;border-radius:6px;background:white;display:inline-flex;align-items:center;justify-content:center;margin-right:8px">N</div>Napoli</td>
                  <td>8</td><td>4</td><td>1</td><td>3</td><td style="text-align:right">13</td>
                </tr>
                <tr>
                  <td class="rank">5</td>
                  <td class="teamname"><div style="width:28px;height:28px;border-radius:6px;background:white;display:inline-flex;align-items:center;justify-content:center;margin-right:8px">M</div>Milan</td>
                  <td>8</td><td>4</td><td>1</td><td>3</td><td style="text-align:right">13</td>
                </tr>
                <tr>
                  <td class="rank">6</td>
                  <td class="teamname"><div style="width:28px;height:28px;border-radius:6px;background:white;display:inline-flex;align-items:center;justify-content:center;margin-right:8px">R</div>Roma</td>
                  <td>8</td><td>4</td><td>0</td><td>4</td><td style="text-align:right">12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <aside>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div class="card games-stat" style="padding:16px 16px 14px 16px">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <div style="font-weight:700">Games statistic</div>
                <div class="muted">View all statistic</div>
              </div>
              <div style="height:12px"></div>
              <div class="progress" aria-hidden="true" title="Victories/draws/lost">
                <i style="width:78%"></i>
              </div>
              <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:13px">
                <div class="muted">PL 8</div>
                <div style="display:flex;gap:8px">
                  <div class="muted">Victories <strong style="color:#0e9aa7;margin-left:6px">6</strong></div>
                  <div class="muted">Draws <strong style="margin-left:6px">1</strong></div>
                  <div class="muted">Lost <strong style="margin-left:6px">1</strong></div>
                </div>
              </div>
            </div>

            <div class="right-grid">
              <div class="stat">
                <div class="label">Possession</div>
                <div class="value">65%</div>
                <div class="muted">Average this season</div>
              </div>
              <div class="stat">
                <div class="label">Overall price</div>
                <div class="value">$690.2m</div>
                <div class="muted">Market value</div>
              </div>
              <div class="stat">
                <div class="label">Transfer budget</div>
                <div class="value">$240.6m</div>
                <div class="muted">Available funds</div>
              </div>
              <div class="stat">
                <div class="label">Average score</div>
                <div class="value">7.2</div>
                <div class="muted">Per match</div>
              </div>
            </div>

            <div class="promo card">
              <div style="font-size:14px;font-weight:600">Don't forget</div>
              <div style="font-size:20px;font-weight:800">Setup training for next week</div>
              <div class="cta">Go to training center</div>
            </div>
          </div>
        </aside>
      </section>
    </main>
</template>
<script setup></script>
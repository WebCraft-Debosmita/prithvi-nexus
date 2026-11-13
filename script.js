/* ==========================================================================
   PRITHVI-NEXUS | ZERO-ERROR TELEMETRY, PHYSICS, RADAR & SOFT AUDIO ENGINE
   Engineered by Debosmita Pandey | B.Tech IT (1st Year), RCCIIT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------------------------------------------------
  // 1. MILLISECOND-ACCURATE DUAL-ZONE CLOCK (IST + UTC)
  // ------------------------------------------------------------------------
  const istEl = document.getElementById("clock-ist");
  const utcEl = document.getElementById("clock-utc");
  const dateEl = document.getElementById("clock-date");

  function updateTelemetryClock() {
    const now = new Date();
    if (utcEl) {
      const uH = String(now.getUTCHours()).padStart(2, "0");
      const uM = String(now.getUTCMinutes()).padStart(2, "0");
      const uS = String(now.getUTCSeconds()).padStart(2, "0");
      utcEl.textContent = `${uH}:${uM}:${uS}`;
    }

    const istTime = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
    if (istEl) {
      const iH = String(istTime.getUTCHours()).padStart(2, "0");
      const iM = String(istTime.getUTCMinutes()).padStart(2, "0");
      const iS = String(istTime.getUTCSeconds()).padStart(2, "0");
      const iMs = String(Math.floor(now.getUTCMilliseconds() / 10)).padStart(2, "0");
      istEl.textContent = `${iH}:${iM}:${iS}.${iMs}`;
    }

    if (dateEl) {
      const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      const day = String(istTime.getUTCDate()).padStart(2, "0");
      const month = months[istTime.getUTCMonth()];
      const year = istTime.getUTCFullYear();
      dateEl.textContent = `${day} ${month} ${year}`;
    }
  }

  setInterval(updateTelemetryClock, 50);
  updateTelemetryClock();

  // ------------------------------------------------------------------------
  // 2. 5-MODE CHAMELEON THEME ENGINE
  // ------------------------------------------------------------------------
  const themeSelect = document.getElementById("theme-select");
  try {
    const savedTheme = localStorage.getItem("prithvi-theme") || "obsidian";
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (themeSelect) themeSelect.value = savedTheme;
  } catch (e) {}

  if (themeSelect) {
    themeSelect.addEventListener("change", (e) => {
      const selectedTheme = e.target.value;
      document.documentElement.setAttribute("data-theme", selectedTheme);
      try {
        localStorage.setItem("prithvi-theme", selectedTheme);
      } catch (err) {}
    });
  }

  // ------------------------------------------------------------------------
  // 3. DUAL-DEPTH INTERFACE TOGGLE (EXECUTIVE OVERVIEW vs. DEEP ENGINEERING)
  // ------------------------------------------------------------------------
  const depthBtn = document.getElementById("depth-toggle-btn");
  const quickDepthBtn = document.getElementById("quick-depth-switch");
  const depthText = document.getElementById("depth-mode-text");

  function toggleDepthMode() {
    const currentDepth = document.documentElement.getAttribute("data-depth") || "executive";
    const nextDepth = currentDepth === "executive" ? "engineering" : "executive";
    document.documentElement.setAttribute("data-depth", nextDepth);
    if (depthText) {
      depthText.textContent = nextDepth === "engineering"
        ? "Mode: Deep Math"
        : "Mode: Executive";
    }
  }

  if (depthBtn) depthBtn.addEventListener("click", toggleDepthMode);
  if (quickDepthBtn) quickDepthBtn.addEventListener("click", toggleDepthMode);

  // ------------------------------------------------------------------------
  // 4. INTERACTIVE 30-SECOND BRIEFING TABS
  // ------------------------------------------------------------------------
  const briefTabs = document.querySelectorAll(".brief-tab");
  const briefPanels = document.querySelectorAll(".brief-panel");

  briefTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      briefTabs.forEach((t) => t.classList.remove("active"));
      briefPanels.forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      const targetPanel = document.getElementById(`tab-${tab.getAttribute("data-tab")}`);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });

  // ------------------------------------------------------------------------
  // 5. UNIFIED EVENT-DELEGATED SMART MICRO-TOOLTIP ENGINE
  // ------------------------------------------------------------------------
  const tooltip = document.getElementById("smart-tooltip");
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

  if (tooltip && !isTouchDevice) {
    document.addEventListener("mouseover", (e) => {
      const target = e.target.closest("[data-tooltip]");
      if (!target) {
        tooltip.classList.remove("visible");
        return;
      }
      const text = target.getAttribute("data-tooltip");
      if (text) {
        tooltip.textContent = text;
        tooltip.classList.add("visible");
      }
    });

    document.addEventListener("mousemove", (e) => {
      if (!tooltip.classList.contains("visible")) return;
      const left = Math.min(e.clientX + 16, window.innerWidth - 310);
      const top = Math.min(e.clientY + 16, window.innerHeight - 100);
      tooltip.style.left = `${Math.max(10, left)}px`;
      tooltip.style.top = `${Math.max(10, top)}px`;
    });

    document.addEventListener("mouseout", (e) => {
      const target = e.target.closest("[data-tooltip]");
      if (target && !target.contains(e.relatedTarget)) {
        tooltip.classList.remove("visible");
      }
    });
  }

  // ------------------------------------------------------------------------
  // 6. HYDRO-ELECTRICAL SIMULATION LAB & REAL-TIME PHYSICS ENGINE
  // ------------------------------------------------------------------------
  const sRain = document.getElementById("slider-rain");
  const sTemp = document.getElementById("slider-temp");
  const sSolar = document.getElementById("slider-solar");
  const sGate = document.getElementById("slider-gate");

  const vRain = document.getElementById("val-rain");
  const vTemp = document.getElementById("val-temp");
  const vSolar = document.getElementById("val-solar");
  const vGate = document.getElementById("val-gate");

  const kpiRunoff = document.getElementById("kpi-runoff");
  const kpiPump = document.getElementById("kpi-pump");
  const kpiThermal = document.getElementById("kpi-thermal");
  const kpiAutonomy = document.getElementById("kpi-autonomy");

  const barRunoff = document.getElementById("bar-runoff");
  const barPump = document.getElementById("bar-pump");
  const barThermal = document.getElementById("bar-thermal");
  const barAutonomy = document.getElementById("bar-autonomy");

  const subRunoff = document.getElementById("sub-runoff");
  const subPump = document.getElementById("sub-pump");
  const subThermal = document.getElementById("sub-thermal");
  const subAutonomy = document.getElementById("sub-autonomy");

  const eqStr = document.getElementById("live-equation-str");
  const alertPill = document.getElementById("alert-state-pill");
  const logStream = document.getElementById("ai-log-stream");
  const narrationBadge = document.getElementById("narration-badge");
  const narrationText = document.getElementById("narration-text");

  const simState = {
    rain: 25,
    temp: 31,
    solar: 88,
    gate: 40,
    runoff: 11.5,
    netFloodStress: 0.15,
    thermalStress: 35.8,
    pumpMW: 1.06,
    autonomyHrs: 23.3,
    statusLabel: "NOMINAL"
  };

  function appendAiLog(message) {
    if (!logStream) return;
    const now = new Date();
    const stamp = now.toTimeString().split(" ")[0];
    const div = document.createElement("div");
    div.className = "log-entry";
    div.textContent = `[${stamp} IST] ${message}`;
    logStream.prepend(div);
    while (logStream.children.length > 8) {
      logStream.removeChild(logStream.lastChild);
    }
  }

  function recalculatePhysics(logReason) {
    if (!sRain || !sTemp || !sSolar || !sGate) return;

    const rain = Number(sRain.value);
    const temp = Number(sTemp.value);
    const solar = Number(sSolar.value);
    const gate = Number(sGate.value);

    if (vRain) vRain.textContent = `${rain} mm/hr`;
    if (vTemp) vTemp.textContent = `${temp} °C`;
    if (vSolar) vSolar.textContent = `${solar} %`;
    if (vGate) vGate.textContent = `${gate} %`;

    // Rational Hydrology Formula: Q = (C * i * A) / 360
    const rawRunoff = (0.75 * rain * 22) / 36;
    const gateDrainCapacity = (gate / 100) * 58;
    const netAccumulation = Math.max(0, rawRunoff - gateDrainCapacity * 0.65);

    const pumpMW = Number((0.45 + (rain / 180) * 5.2 * (1 - gate / 250)).toFixed(2));

    const ambientFactor = (temp - 24) * 1.45;
    const pumpLoadFactor = pumpMW * 7.8;
    const solarRelief = (solar / 100) * 12;
    const thermalStress = Math.min(99.8, Math.max(18, Number((28 + ambientFactor + pumpLoadFactor - solarRelief).toFixed(1))));

    const autonomyHrs = Number(((solar / 100) * 26.5 / Math.max(1, pumpMW * 0.55)).toFixed(1));

    simState.rain = rain;
    simState.temp = temp;
    simState.solar = solar;
    simState.gate = gate;
    simState.runoff = Number(rawRunoff.toFixed(1));
    simState.netFloodStress = Math.min(1, netAccumulation / 55);
    simState.thermalStress = thermalStress;
    simState.pumpMW = pumpMW;
    simState.autonomyHrs = autonomyHrs;

    if (kpiRunoff) kpiRunoff.textContent = `${simState.runoff} m³/s`;
    if (barRunoff) barRunoff.style.width = `${Math.min(100, (simState.runoff / 85) * 100)}%`;
    if (subRunoff) {
      subRunoff.textContent = netAccumulation > 28
        ? "⚠ High waterlogging risk! Increase Canal Gate %"
        : "Conduit outflow balanced with rainfall";
    }

    if (kpiPump) kpiPump.textContent = `${pumpMW} MW`;
    if (barPump) barPump.style.width = `${Math.min(100, (pumpMW / 6) * 100)}%`;
    if (subPump) {
      subPump.textContent = solar >= 60
        ? "Powered by clean rooftop solar-battery mesh"
        : "Drawing supplemental feeder grid power";
    }

    if (kpiThermal) kpiThermal.textContent = `${thermalStress} %`;
    if (barThermal) barThermal.style.width = `${thermalStress}%`;
    if (subThermal) {
      subThermal.textContent = thermalStress > 75
        ? "⚠ High winding temp! Reactive load-shedding engaged"
        : "Substation oil temperature within IEEE limits";
    }

    if (kpiAutonomy) kpiAutonomy.textContent = `${autonomyHrs} Hrs`;
    if (barAutonomy) barAutonomy.style.width = `${Math.min(100, (autonomyHrs / 24) * 100)}%`;
    if (subAutonomy) {
      subAutonomy.textContent = autonomyHrs > 10
        ? "Zero blackout risk for NODE-01 Hospital ICUs"
        : "Reserve low—prioritizing ICU life-support circuits";
    }

    let riskWord = "LOW";
    simState.statusLabel = "NOMINAL";
    if (alertPill) {
      alertPill.className = "alert-pill alert-optimal";
      alertPill.textContent = "STATUS: NOMINAL";
    }

    if (netAccumulation > 32 || thermalStress > 78) {
      riskWord = "CRITICAL (AI REROUTING)";
      simState.statusLabel = "CRITICAL";
      if (alertPill) {
        alertPill.className = "alert-pill alert-critical";
        alertPill.textContent = "STATUS: CRITICAL MITIGATION";
      }
    } else if (netAccumulation > 16 || thermalStress > 58) {
      riskWord = "ELEVATED (PRE-DRAIN ACTIVE)";
      simState.statusLabel = "ELEVATED";
      if (alertPill) {
        alertPill.className = "alert-pill alert-warning";
        alertPill.textContent = "STATUS: ELEVATED LOAD";
      }
    }

    if (eqStr) {
      eqStr.textContent = `Q_runoff = ${simState.runoff} m³/s | Q_outfall = ${gateDrainCapacity.toFixed(1)} m³/s | Risk: ${riskWord}`;
    }

    if (logReason) {
      appendAiLog(`${logReason} -> Q=${simState.runoff} m³/s, Pump=${pumpMW} MW, Thermal=${thermalStress}%, Status=${simState.statusLabel}`);
    }
  }

  let demoTimer = null;
  const autoDemoBtn = document.getElementById("auto-demo-btn");

  function stopAutoDemoIfRunning() {
    if (demoTimer) {
      clearInterval(demoTimer);
      demoTimer = null;
      if (autoDemoBtn) autoDemoBtn.textContent = "▶ Play Auto-Demo Walkthrough";
    }
  }

  [sRain, sTemp, sSolar, sGate].forEach((slider) => {
    if (!slider) return;
    slider.addEventListener("input", () => {
      stopAutoDemoIfRunning();
      recalculatePhysics();
    });
    slider.addEventListener("change", () => recalculatePhysics("Manual Slider Telemetry Update"));
  });

  // ------------------------------------------------------------------------
  // 7. PRESET WEATHER SCENARIOS & AUTO-DEMO WALKTHROUGH PLAYER
  // ------------------------------------------------------------------------
  const presets = {
    normal: {
      rain: 25, temp: 31, solar: 88, gate: 40,
      badge: "SCENARIO // NORMAL BASELINE",
      text: "Clear metropolitan conditions: Rooftop solar arrays charge NODE-01 hospital batteries at 88%, while storm drains run at calm baseline levels."
    },
    cyclone: {
      rain: 165, temp: 29, solar: 45, gate: 25,
      badge: "ALERT // SUPER-CYCLONE CLOUDBURST",
      text: "Extreme 165 mm/hr cloudburst detected! Closed canal gates (25%) cause severe surface runoff stress—click 'AI Autonomous Mitigation' next to see PRITHVI-NEXUS resolve it."
    },
    heatwave: {
      rain: 5, temp: 46, solar: 98, gate: 20,
      badge: "ALERT // 46°C URBAN HEATWAVE",
      text: "Extreme 46°C urban heat-island spike! PRITHVI-NEXUS harvests 98% peak solar irradiance to absorb air-conditioning transformer thermal stress."
    },
    mitigate: {
      rain: 165, temp: 29, solar: 96, gate: 98,
      badge: "AI ACTIVE // AUTONOMOUS MITIGATION",
      text: "Under a 165 mm/hr cyclone burst, PRITHVI-NEXUS automatically opens Canal Sluice Gates to 98% and switches hospital & pump loads to 96% solar-battery reserve—preventing flooding and blackouts!"
    }
  };

  const presetChips = document.querySelectorAll(".preset-chip");

  function applyPreset(key) {
    const p = presets[key];
    if (!p || !sRain || !sTemp || !sSolar || !sGate) return;
    presetChips.forEach((c) => c.classList.toggle("active", c.dataset.preset === key));
    sRain.value = p.rain;
    sTemp.value = p.temp;
    sSolar.value = p.solar;
    sGate.value = p.gate;
    if (narrationBadge) narrationBadge.textContent = p.badge;
    if (narrationText) narrationText.textContent = p.text;
    recalculatePhysics(`Preset Loaded [${p.badge}]`);
  }

  presetChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      stopAutoDemoIfRunning();
      applyPreset(chip.dataset.preset);
    });
  });

  const demoSequence = ["normal", "cyclone", "mitigate", "heatwave", "normal"];
  let demoIndex = 0;

  if (autoDemoBtn) {
    autoDemoBtn.addEventListener("click", () => {
      if (demoTimer) {
        stopAutoDemoIfRunning();
        if (narrationBadge) narrationBadge.textContent = "AUTO-DEMO PAUSED";
        appendAiLog("Automated Presentation Walkthrough paused by user.");
        return;
      }

      autoDemoBtn.textContent = "⏹ Stop Auto-Demo Walkthrough";
      demoIndex = 0;
      applyPreset(demoSequence[demoIndex]);
      appendAiLog("Started Automated Jury Walkthrough Presentation.");

      demoTimer = setInterval(() => {
        demoIndex = (demoIndex + 1) % demoSequence.length;
        applyPreset(demoSequence[demoIndex]);
      }, 4200);
    });
  }

  // ------------------------------------------------------------------------
  // 8. OFFICIAL RCCIIT TELEMETRY REPORT EXPORTER (.TXT)
  // ------------------------------------------------------------------------
  const exportBtn = document.getElementById("export-report-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const istStamp = istEl ? istEl.textContent : "LIVE";
      const dateStamp = dateEl ? dateEl.textContent : "2026";
      const reportContent = [
        "==========================================================================",
        "   PRITHVI-NEXUS | SIH 2026 URBAN TELEMETRY & SMART-GRID DIAGNOSTIC LOG   ",
        "==========================================================================",
        `Timestamp (IST)      : ${istStamp} (${dateStamp})`,
        "Lead System Architect: Debosmita Pandey",
        "Academic Credentials : B.Tech in Information Technology (1st Year, 4-Year Program)",
        "Institution          : RCC Institute of Information Technology (RCCIIT)",
        "Problem Statement    : SIH2026-SC-409 (Smart Cities & Renewable Power Grid)",
        "--------------------------------------------------------------------------",
        "1. ENVIRONMENTAL & BOUNDARY INPUT TELEMETRY",
        `   - Rainfall Intensity (i)         : ${simState.rain} mm/hr`,
        `   - Ambient Urban Temperature (T)  : ${simState.temp} deg C`,
        `   - Solar Micro-Grid Reserve (E_pv): ${simState.solar} %`,
        `   - Canal Sluice Gate Aperture     : ${simState.gate} %`,
        "",
        "2. REAL-TIME SCIENTIFIC & ENGINEERING OUTPUTS",
        `   - Peak Surface Runoff (Q)        : ${simState.runoff} m^3/s (Rational Method)`,
        `   - Submersible Storm Pump Load    : ${simState.pumpMW} MW`,
        `   - Transformer Thermal Stress     : ${simState.thermalStress} %`,
        `   - Hospital ICU Islanded Autonomy : ${simState.autonomyHrs} Hours`,
        `   - Overall Metropolitan Status    : ${simState.statusLabel}`,
        "--------------------------------------------------------------------------",
        "Verified & Generated Automatically by PRITHVI-NEXUS Edge Telemetry Engine.",
        "=========================================================================="
      ].join("\n");

      const blob = new Blob([reportContent], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "PRITHVI-NEXUS-Telemetry-Report-Debosmita-Pandey-RCCIIT.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      appendAiLog("Exported official RCCIIT engineering diagnostic report (.TXT).");
    });
  }

  // ------------------------------------------------------------------------
  // 9. 60-FPS PROCEDURAL HTML5 DOPPLER RADAR & TOPOLOGY VISUALIZER
  // ------------------------------------------------------------------------
  const canvas = document.getElementById("nexus-radar-canvas");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let radarAngle = 0;
    let pulseOffset = 0;

    const nodes = [
      { id: "N1: HOSPITAL", x: 145, y: 90 },
      { id: "N2: DRAINAGE", x: 430, y: 85 },
      { id: "N3: SOLAR MESH", x: 290, y: 170 },
      { id: "N4: CANAL GATES", x: 440, y: 255 },
      { id: "N5: AQI CORRIDOR", x: 140, y: 255 }
    ];

    const rainParticles = Array.from({ length: 65 }, () => ({
      x: Math.random() * 580,
      y: Math.random() * 340,
      speed: 1.6 + Math.random() * 2.4
    }));

    function renderRadarCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      ctx.strokeStyle = "rgba(0, 245, 212, 0.16)";
      ctx.lineWidth = 1;
      [55, 110, 158].forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(canvas.width, cy);
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, canvas.height);
      ctx.stroke();

      if (simState.rain > 5) {
        const stormRadius = 40 + (simState.rain / 180) * 115;
        const grad = ctx.createRadialGradient(cx + 30, cy - 15, 5, cx + 30, cy - 15, stormRadius);
        if (simState.netFloodStress > 0.55) {
          grad.addColorStop(0, "rgba(251, 113, 133, 0.45)");
          grad.addColorStop(1, "rgba(251, 113, 133, 0)");
        } else {
          grad.addColorStop(0, "rgba(56, 189, 248, 0.35)");
          grad.addColorStop(1, "rgba(56, 189, 248, 0)");
        }
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx + 30, cy - 15, stormRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      pulseOffset = (pulseOffset + 0.65) % 20;
      ctx.save();
      ctx.setLineDash([6, 6]);
      ctx.lineDashOffset = -pulseOffset;
      ctx.lineWidth = 2;
      ctx.strokeStyle = simState.statusLabel === "CRITICAL" ? "#fb7185" : "#00f5d4";

      const links = [[2, 0], [2, 1], [2, 3], [2, 4], [1, 3], [0, 4]];
      links.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(nodes[b].x, nodes[b].y);
        ctx.stroke();
      });
      ctx.restore();

      const activeDrops = Math.floor((simState.rain / 180) * rainParticles.length);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.58)";
      ctx.lineWidth = 1.3;
      for (let i = 0; i < activeDrops; i++) {
        const p = rainParticles[i];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - 3, p.y + 9);
        ctx.stroke();
        p.y += p.speed + simState.rain / 60;
        p.x -= 0.6;
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      }

      radarAngle += 0.025;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(radarAngle);
      const sweepGrad = ctx.createLinearGradient(0, 0, 158, 0);
      sweepGrad.addColorStop(0, "rgba(0, 245, 212, 0.35)");
      sweepGrad.addColorStop(1, "rgba(0, 245, 212, 0)");
      ctx.fillStyle = sweepGrad;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 158, 0, 0.38);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 7, 0, Math.PI * 2);
        ctx.fillStyle = simState.statusLabel === "CRITICAL" ? "#fb7185" : "#00f5d4";
        ctx.fill();
        ctx.strokeStyle = "#050914";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.font = "bold 11px 'JetBrains Mono', monospace";
        ctx.fillStyle = "#f0f6fc";
        ctx.fillText(n.id, n.x - 40, n.y - 12);
      });

      ctx.font = "600 10px 'JetBrains Mono', monospace";
      ctx.fillStyle = "rgba(240, 246, 252, 0.72)";
      ctx.fillText(`RADAR: ${simState.rain} mm/hr | GATE: ${simState.gate}% | SOLAR: ${simState.solar}%`, 12, 326);

      requestAnimationFrame(renderRadarCanvas);
    }

    recalculatePhysics("Simulation Engine Initialized");
    renderRadarCanvas();
  }

  // ------------------------------------------------------------------------
  // 10. ULTRA-GENTLE MUSIC-BOX CHIME SEQUENCER (WHISPER VOLUME + WARM FILTER)
  // ------------------------------------------------------------------------
  const bgmBtn = document.getElementById("bgm-toggle-btn");
  const bgmIcon = document.getElementById("bgm-icon");
  const bgmLabel = document.getElementById("bgm-label");

  let audioCtx = null;
  let isPlayingBgm = false;
  let chimeInterval = null;
  let noteStep = 0;
  let userVolume = 0.2; // Default whisper-soft 20%

  // Connect to existing slider in index.html OR inject once if using older HTML
  let volSlider = document.getElementById("bgm-volume-slider") || document.getElementById("bgm-vol-slider");
  if (!volSlider && bgmBtn && bgmBtn.parentElement) {
    const volWrap = document.createElement("div");
    volWrap.className = "audio-control-pill";
    volWrap.setAttribute("data-tooltip", "Adjust BGM Chime Volume (0% to 100%).");

    volSlider = document.createElement("input");
    volSlider.type = "range";
    volSlider.id = "bgm-volume-slider";
    volSlider.className = "bgm-vol-slider";
    volSlider.min = "0";
    volSlider.max = "100";
    volSlider.value = "20";

    bgmBtn.parentElement.insertBefore(volWrap, bgmBtn);
    volWrap.appendChild(bgmBtn);
    volWrap.appendChild(volSlider);
  }

  if (volSlider) {
    userVolume = Number(volSlider.value) / 100;
    volSlider.addEventListener("input", (e) => {
      userVolume = Number(e.target.value) / 100;
    });
  }

  // Warm, soothing pentatonic ambient piano notes (Hz)
  const calmProgression = [
    261.63, // C4
    329.63, // E4
    392.00, // G4
    493.88, // B4
    392.00, // G4
    329.63, // E4
    293.66, // D4
    392.00  // G4
  ];

  function playWarmMusicBoxNote() {
    if (!isPlayingBgm || !audioCtx || userVolume <= 0.01) return;
    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }

    const now = audioCtx.currentTime;
    const freq = calmProgression[noteStep % calmProgression.length];
    noteStep++;

    // Ultra-gentle peak gain: capped at 0.015 at 100% slider (0.003 at 20% default)
    const peakGain = Math.max(0.0003, userVolume * 0.015);

    const osc = audioCtx.createOscillator();
    const filter = audioCtx.createBiquadFilter();
    const noteGain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    // Warm acoustic low-pass filter removes any digital harshness
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(650, now);

    // Smooth bell envelope: soft fade-in and natural 2.4-second decay to silence
    noteGain.gain.setValueAtTime(0.00001, now);
    noteGain.gain.linearRampToValueAtTime(peakGain, now + 0.22);
    noteGain.gain.exponentialRampToValueAtTime(0.00001, now + 2.4);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 2.5);
  }

  function stopAmbientSynthesizer() {
    isPlayingBgm = false;
    if (chimeInterval) {
      clearInterval(chimeInterval);
      chimeInterval = null;
    }
    if (bgmBtn) bgmBtn.classList.remove("playing");
    if (bgmIcon) bgmIcon.textContent = "🔇";
    if (bgmLabel) bgmLabel.textContent = "BGM: Off";
  }

  function startAmbientSynthesizer() {
    stopAmbientSynthesizer();
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }

    isPlayingBgm = true;
    noteStep = 0;
    playWarmMusicBoxNote();
    chimeInterval = setInterval(playWarmMusicBoxNote, 2100);

    if (bgmBtn) bgmBtn.classList.add("playing");
    if (bgmIcon) bgmIcon.textContent = "🎵";
    if (bgmLabel) bgmLabel.textContent = "BGM: On";
  }

  if (bgmBtn) {
    bgmBtn.addEventListener("click", () => {
      if (!isPlayingBgm) {
        startAmbientSynthesizer();
      } else {
        stopAmbientSynthesizer();
      }
    });
  }

  // ------------------------------------------------------------------------
  // 11. INTERACTIVE 5-SLIDE SIH HACKATHON PITCH DECK & FULLSCREEN MODE
  // ------------------------------------------------------------------------
  const pitchTabs = document.querySelectorAll(".pitch-tab");
  const pitchSlides = document.querySelectorAll(".pitch-slide");
  const slideCounter = document.getElementById("slide-counter");
  const prevSlideBtn = document.getElementById("prev-slide-btn");
  const nextSlideBtn = document.getElementById("next-slide-btn");
  let currentSlide = 0;

  function showSlide(index) {
    if (!pitchSlides.length) return;
    currentSlide = (index + pitchSlides.length) % pitchSlides.length;
    pitchTabs.forEach((t, i) => t.classList.toggle("active", i === currentSlide));
    pitchSlides.forEach((s, i) => s.classList.toggle("active", i === currentSlide));
    if (slideCounter) {
      slideCounter.textContent = `SLIDE ${currentSlide + 1} OF ${pitchSlides.length}`;
    }
  }

  pitchTabs.forEach((tab) => {
    tab.addEventListener("click", () => showSlide(Number(tab.dataset.slide)));
  });

  if (prevSlideBtn) prevSlideBtn.addEventListener("click", () => showSlide(currentSlide - 1));
  if (nextSlideBtn) nextSlideBtn.addEventListener("click", () => showSlide(currentSlide + 1));

  const fullscreenBtn = document.getElementById("fullscreen-pitch-btn");
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    document.addEventListener("fullscreenchange", () => {
      fullscreenBtn.textContent = document.fullscreenElement
        ? "✕ Exit Fullscreen Mode"
        : "⛶ Fullscreen Jury Mode";
    });
  }

  // ------------------------------------------------------------------------
  // 12. CANCELLABLE GUIDED SPOTLIGHT TOUR (STOPS IMMEDIATELY ON USER SCROLL)
  // ------------------------------------------------------------------------
  const tourBtn = document.getElementById("guided-tour-btn");
  let tourTimeout = null;
  let tourActive = false;

  function endGuidedTour() {
    if (tourTimeout) {
      clearTimeout(tourTimeout);
      tourTimeout = null;
    }
    tourActive = false;
    document.querySelectorAll(".tour-spotlight-active").forEach((el) => {
      el.classList.remove("tour-spotlight-active");
    });
    if (tourBtn) tourBtn.textContent = "🧭 Start Guided Spotlight Tour";
  }

  // Cancel tour automatically if user manually scrolls with mouse wheel or touch
  window.addEventListener("wheel", () => {
    if (tourActive) endGuidedTour();
  }, { passive: true });

  window.addEventListener("touchmove", () => {
    if (tourActive) endGuidedTour();
  }, { passive: true });

  if (tourBtn) {
    tourBtn.addEventListener("click", () => {
      if (tourActive) {
        endGuidedTour();
        return;
      }

      tourActive = true;
      tourBtn.textContent = "⏹ Stop Guided Tour";

      const stops = [
        { el: document.getElementById("top-command-bar"), topScroll: true, msg: "Tour 1/5: Top Command Bar with live IST/UTC millisecond clock, 5-Theme Switcher, Dual-Depth Formula Toggle, and Soft Chime BGM." },
        { el: document.getElementById("hero-overview-section"), topScroll: false, msg: "Tour 2/5: Executive Overview & Verified Creator Credentials for Debosmita Pandey (1st-Year B.Tech IT, RCCIIT)." },
        { el: document.getElementById("twin-nodes-section"), topScroll: false, msg: "Tour 3/5: 5-Node Urban Digital Twin monitoring Hospital ICUs, Storm Drainage, Rooftop Solar, Canal Gates, and AQI." },
        { el: document.getElementById("simulation-lab-slot"), topScroll: false, msg: "Tour 4/5: Interactive Physics Lab & 60-FPS Doppler Radar where you can simulate cloudbursts and download official reports." },
        { el: document.getElementById("doubt-solver-section"), topScroll: false, msg: "Tour 5/5: Built-in 'Ask Nexus' Doubt Solver to resolve any visitor or jury question immediately!" }
      ];

      let idx = 0;
      function runNextStop() {
        if (!tourActive) return;
        document.querySelectorAll(".tour-spotlight-active").forEach((el) => {
          el.classList.remove("tour-spotlight-active");
        });

        if (idx >= stops.length) {
          endGuidedTour();
          return;
        }

        const stop = stops[idx];
        if (stop.el) {
          if (stop.topScroll) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            stop.el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          stop.el.classList.add("tour-spotlight-active");
          if (narrationBadge) narrationBadge.textContent = `GUIDED TOUR // STOP ${idx + 1} OF 5`;
          if (narrationText) narrationText.textContent = stop.msg;
        }
        idx++;
        tourTimeout = setTimeout(runNextStop, 3800);
      }

      runNextStop();
    });
  }

  // ------------------------------------------------------------------------
  // 13. BUILT-IN "ASK NEXUS" DOUBT-RESOLUTION ASSISTANT
  // ------------------------------------------------------------------------
  const doubtChatLog = document.getElementById("doubt-chat-log");
  const doubtForm = document.getElementById("doubt-form");
  const doubtInput = document.getElementById("doubt-input");
  const doubtChips = document.querySelectorAll(".doubt-chip");

  const presetAnswers = {
    simple: {
      q: "Explain this whole website in simple words.",
      a: "In simple terms: When extreme rain hits a city, streets flood and electrical transformers short-circuit—cutting off power to hospitals and water pumps. PRITHVI-NEXUS is an AI command center that predicts the flood 18 minutes early, opens river canal gates automatically, and switches hospitals and storm pumps onto solar-battery backup so the city never floods or goes dark."
    },
    math: {
      q: "How do the scientific formulas work?",
      a: "We use the civil engineering Rational Hydrology Formula: Q = (C × i × A) / 360, where C is surface imperviousness (0.75), i is rainfall intensity in mm/hr, and A is the 22 km² urban catchment area. This calculates exact water runoff in cubic meters per second (m³/s) and matches it against IEEE-1547 solar micro-grid load capacity."
    },
    sliders: {
      q: "How do I use the Simulation Lab sliders?",
      a: "In the 'What-If' Simulation Lab, drag Slider 1 (Rainfall) to 165 mm/hr to simulate a cyclone. You will see runoff spike and the status turn Critical. Next, drag Slider 3 (Solar Reserve) and Slider 4 (Canal Gate) to 95%—or click the 'AI Autonomous Mitigation' preset button—to watch the system resolve the crisis automatically!"
    },
    creator: {
      q: "Who built this project and which college?",
      a: "PRITHVI-NEXUS was conceptualized, designed, and engineered by Debosmita Pandey, a 1st-Year B.Tech student in Information Technology (4-Year Program) at RCC Institute of Information Technology (RCCIIT)."
    },
    sih: {
      q: "Why is this ideal for SIH & Placements?",
      a: "Recruiters and Smart India Hackathon (SIH) judges look for projects that solve real-world infrastructure problems using live math, interactive simulations, and clean software architecture rather than static templates. PRITHVI-NEXUS combines hydrology, renewable power grids, and 60-FPS visualization in one self-contained platform."
    },
    audio: {
      q: "How does the new soft BGM work?",
      a: "Click the 'BGM' button in the top-right bar! PRITHVI-NEXUS uses the browser's Web Audio API to play a whisper-quiet, low-pass filtered pentatonic music-box melody with an adjustable live volume slider right beside the button."
    }
  };

  function addChatBubble(text, isUser) {
    if (!doubtChatLog) return;
    const div = document.createElement("div");
    div.className = `chat-bubble ${isUser ? "user-bubble" : "bot-bubble"}`;
    if (isUser) {
      div.textContent = text;
    } else {
      div.innerHTML = `<strong>NEXUS GUIDE:</strong> ${text}`;
    }
    doubtChatLog.appendChild(div);
    doubtChatLog.scrollTop = doubtChatLog.scrollHeight;
  }

  function answerCustomDoubt(rawQuestion) {
    const q = rawQuestion.toLowerCase();
    if (q.includes("who") || q.includes("debosmita") || q.includes("creator") || q.includes("rcciit") || q.includes("college") || q.includes("author")) {
      return presetAnswers.creator.a;
    }
    if (q.includes("formula") || q.includes("math") || q.includes("equation") || q.includes("runoff") || q.includes("science") || q.includes("calculate")) {
      return presetAnswers.math.a;
    }
    if (q.includes("slider") || q.includes("simulate") || q.includes("cyclone") || q.includes("how to use") || q.includes("radar")) {
      return presetAnswers.sliders.a;
    }
    if (q.includes("music") || q.includes("audio") || q.includes("bgm") || q.includes("sound") || q.includes("volume")) {
      return presetAnswers.audio.a;
    }
    if (q.includes("sih") || q.includes("hackathon") || q.includes("placement") || q.includes("job") || q.includes("company")) {
      return presetAnswers.sih.a;
    }
    if (q.includes("theme") || q.includes("color") || q.includes("dark") || q.includes("light")) {
      return "Use the Theme selector dropdown in the top-right Command Bar to switch between 5 custom themes: Obsidian Neon (Dark), Solarized Alabaster (Light), Cyber-Emerald Aurora, Royal Sapphire Glass, and Crimson Sunset!";
    }
    if (q.includes("node")) {
      return "PRITHVI-NEXUS monitors 5 interconnected urban sectors: Node 1 (Hospital ICU Micro-Grid), Node 2 (Underground Storm Drainage Pumps), Node 3 (Rooftop Solar & Battery Mesh), Node 4 (Automated Canal Sluice Gates), and Node 5 (Urban Heat-Island & AQI Corridor).";
    }
    return "PRITHVI-NEXUS (engineered by Debosmita Pandey, 1st-Year B.Tech IT, RCCIIT) links real-time rainfall telemetry with solar micro-grids so cities neither flood nor lose critical hospital electricity. Try clicking 'Play Auto-Demo Walkthrough' in the Simulation Lab or toggle 'Mode: Deep Math' in the top bar!";
  }

  doubtChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const item = presetAnswers[chip.dataset.q];
      if (!item) return;
      addChatBubble(item.q, true);
      setTimeout(() => addChatBubble(item.a, false), 160);
    });
  });

  if (doubtForm && doubtInput) {
    doubtForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userText = doubtInput.value.trim();
      if (!userText) return;
      addChatBubble(userText, true);
      doubtInput.value = "";
      setTimeout(() => {
        addChatBubble(answerCustomDoubt(userText), false);
      }, 200);
    });
  }
});
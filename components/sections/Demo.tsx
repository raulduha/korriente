'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Demo.module.css';
import { Icon } from '@/components/ui/Icon';
import { useFadeIn } from '@/lib/useFadeIn';

/* ——— Shared sub-components ——— */

function PanelLabel({ live = true, children }: { live?: boolean; children: React.ReactNode }) {
  return (
    <div className={styles.panelLabel}>
      {live && <span className={styles.liveDot} />}
      {children}
    </div>
  );
}

function MetricRow({
  label,
  val,
  delta,
  pct,
  animate = false,
}: {
  label: string;
  val: string;
  delta: string;
  pct: number;
  animate?: boolean;
}) {
  return (
    <div className={styles.metricRow}>
      <div style={{ flex: 1 }}>
        <div className={styles.metricLabel}>{label}</div>
        <div className={styles.barWrap}>
          <div
            className={styles.barFill}
            style={{ width: animate ? `${pct}%` : `${pct}%`, transition: animate ? 'width 0.8s ease' : undefined }}
          />
        </div>
      </div>
      <div className={styles.metricRight}>
        <div className={styles.metricVal}>{val}</div>
        <div className={styles.metricDelta}>{delta}</div>
      </div>
    </div>
  );
}

function ImpactBox({
  label,
  cyan = false,
  children,
}: {
  label: string;
  cyan?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.impactBox} ${cyan ? styles.impactCyan : ''}`}>
      <div className={styles.impactLabel}>{label}</div>
      <div className={styles.impactVal}>{children}</div>
    </div>
  );
}

/* ——— Tab 1: Agentes conversacionales (looping chat) ——— */

const chatMsgs = [
  { type: 'bot', text: 'Hola, soy el asistente de Ferretería Norte. ¿En qué te puedo ayudar?' },
  { type: 'user', text: '¿Tienen tornillos M6 en stock?' },
  { type: 'bot', text: 'Sí, tenemos zincado (450 uds), inoxidable (120 uds) y galvanizado (280 uds). ¿Cuál necesitas?' },
  { type: 'user', text: 'Zincado, necesito 200 unidades' },
  { type: 'bot', text: '¡Perfecto! 200 tornillos M6 zincados · $38 c/u · Total $7.600. ¿Agrego al pedido?' },
];

function DemoChat() {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    function advance(current: number) {
      if (current >= chatMsgs.length) {
        timeout = setTimeout(() => {
          setVisible(0);
          setTyping(false);
          timeout = setTimeout(() => advance(0), 400);
        }, 3500);
        return;
      }
      setTyping(true);
      timeout = setTimeout(() => {
        setTyping(false);
        setVisible(current + 1);
        timeout = setTimeout(() => advance(current + 1), chatMsgs[current].type === 'bot' ? 1800 : 1200);
      }, chatMsgs[current].type === 'bot' ? 900 : 500);
    }

    timeout = setTimeout(() => advance(0), 600);
    return () => clearTimeout(timeout);
  }, []);

  const chatMetrics = [
    { label: 'Consultas resueltas', val: '847', delta: '+23%', pct: 84 },
    { label: 'Tiempo de respuesta', val: '1.2s', delta: '−91%', pct: 9 },
    { label: 'Escaladas a humano', val: '13%', delta: '−18%', pct: 13 },
    { label: 'Satisfacción del cliente', val: '4.8/5', delta: '+0.6', pct: 96 },
  ];

  return (
    <div className={styles.panelInner}>
      <div className={styles.panelLeft}>
        <PanelLabel>Conversación en vivo · WhatsApp</PanelLabel>
        {chatMsgs.slice(0, visible).map((m, i) => (
          <div
            key={i}
            className={`${styles.chatMsg} ${m.type === 'bot' ? styles.bot : styles.userMsg}`}
            style={{ opacity: i < visible - 1 ? 0.65 : 1 }}
          >
            <div className={`${styles.chatAvatar} ${m.type === 'bot' ? styles.botAv : styles.userAv}`}>
              {m.type === 'bot' ? 'K' : 'U'}
            </div>
            <div>
              <div className={styles.chatBubble}>{m.text}</div>
              <div className={styles.chatTime}>
                {m.type === 'bot' ? 'Korriente Bot' : 'Cliente'} · ahora
              </div>
            </div>
          </div>
        ))}
        {typing && (
          <div className={styles.typingDots}>
            {[0, 1, 2].map((d) => (
              <span key={d} className={styles.typingDot} style={{ animationDelay: `${d * 0.18}s` }} />
            ))}
          </div>
        )}
      </div>
      <div className={styles.panelRight}>
        <PanelLabel live={false}>Métricas del piloto · Semana 3</PanelLabel>
        {chatMetrics.map((m, i) => (
          <MetricRow key={i} {...m} animate />
        ))}
        <ImpactBox label="IMPACTO ESTIMADO / MES">
          320h <span>ahorradas en atención</span>
        </ImpactBox>
      </div>
    </div>
  );
}

/* ——— Tab 2: Procesamiento de documentos ——— */

const docFields = [
  { label: 'PROVEEDOR', val: 'Distribuidora Central SpA', conf: 99 },
  { label: 'RUT', val: '76.432.891-2', conf: 100 },
  { label: 'FECHA', val: '15/04/2025', conf: 98 },
  { label: 'N° FACTURA', val: '001847', conf: 100 },
  { label: 'TOTAL NETO', val: '$9.916', conf: 97 },
  { label: 'IVA (19%)', val: '$1.884', conf: 100 },
];

function DemoDocumentos() {
  const [phase, setPhase] = useState<'idle' | 'scanning' | 'extracting' | 'done'>('idle');
  const [visibleFields, setVisibleFields] = useState(0);
  const [barsLive, setBarsLive] = useState(false);
  const [registered, setRegistered] = useState(false);

  function reset() {
    setPhase('idle');
    setVisibleFields(0);
    setBarsLive(false);
    setRegistered(false);
  }

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    function run() {
      reset();
      timers.push(setTimeout(() => setPhase('scanning'), 400));
      timers.push(setTimeout(() => setPhase('extracting'), 1400));
      docFields.forEach((_, i) => {
        timers.push(
          setTimeout(() => setVisibleFields(i + 1), 1800 + i * 550)
        );
      });
      const allDone = 1800 + docFields.length * 550;
      timers.push(setTimeout(() => setBarsLive(true), allDone + 100));
      timers.push(setTimeout(() => { setPhase('done'); setRegistered(true); }, allDone + 700));
      timers.push(setTimeout(() => { reset(); timers.push(setTimeout(run, 300)); }, allDone + 4000));
    }

    const start = setTimeout(run, 300);
    timers.push(start);
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.panelInner}>
      <div className={styles.panelLeft}>
        <PanelLabel>
          {phase === 'scanning' ? 'Analizando PDF…' : phase === 'extracting' ? 'Extrayendo campos…' : phase === 'done' ? 'Procesamiento completo' : 'Esperando documento'}
        </PanelLabel>
        <div className={`${styles.docMock} ${phase === 'scanning' ? styles.docScanning : ''}`}>
          <div className={styles.docMockFilename}>
            FACTURA_2024_001847.pdf
            {phase === 'scanning' && <span className={styles.scanBadge}>analizando…</span>}
          </div>
          <div>Proveedor: <span className={styles.docHl}>Distribuidora Central SpA</span></div>
          <div>RUT: <span className={styles.docHl}>76.432.891-2</span></div>
          <div>Fecha: <span className={styles.docHl}>15/04/2025</span></div>
          <div>N° Factura: <span className={styles.docHl}>001847</span></div>
          <div className={styles.docSep}>Ítem 1 — Tornillos M6 x200 ·· <span className={styles.docHl}>$7.600</span></div>
          <div>Ítem 2 — Tuercas M6 x200 ···· <span className={styles.docHl}>$4.200</span></div>
          <div className={styles.docTotal}>
            <strong>TOTAL NETO:</strong> <span className={styles.docHl}>$9.916</span> &nbsp;|&nbsp;{' '}
            <strong>IVA:</strong> <span className={styles.docHl}>$1.884</span>
          </div>
        </div>
      </div>
      <div className={styles.panelRight}>
        <PanelLabel live={false}>Campos extraídos · Confianza del modelo</PanelLabel>
        {docFields.slice(0, visibleFields).map((f, i) => (
          <div key={i} className={`${styles.docField} ${styles.docFieldAnimate}`}>
            <div className={styles.docFieldLabel}>{f.label}</div>
            <div className={styles.docFieldContent}>
              <div className={styles.docFieldVal}>{f.val}</div>
              <div className={styles.docConfRow}>
                <div className={`${styles.barWrap} ${styles.barFlex}`}>
                  <div
                    className={styles.barFill}
                    style={{ width: barsLive ? `${f.conf}%` : '0%', transition: 'width 0.6s ease' }}
                  />
                </div>
                <span className={styles.docConfPct}>{f.conf}%</span>
              </div>
            </div>
            <span className={styles.docOk}>✓</span>
          </div>
        ))}
        {registered && (
          <div className={`${styles.docNote} ${styles.docNoteAnimate}`}>
            → Registrado en <span>SAP Business One</span> automáticamente ✓
          </div>
        )}
      </div>
    </div>
  );
}

/* ——— Tab 3: Inteligencia predictiva ——— */

const chartMeses = ['Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
const chartVals: (number | null)[] = [62, 71, 88, 54, 60, 78, 85, null, null];
const chartPred: (number | null)[] = [null, null, null, null, null, null, null, 91, 97];
const maxV = 110;

const allLeads = [
  { name: 'Empresa ABC', score: 94, deal: '$4.2M' },
  { name: 'Constructora Sur', score: 81, deal: '$2.8M' },
  { name: 'Retail Zona Norte', score: 73, deal: '$1.1M' },
  { name: 'Importadora XYZ', score: 58, deal: '$890K' },
  { name: 'Logística Andina', score: 42, deal: '$430K' },
];

function DemoPredict() {
  const [chartReady, setChartReady] = useState(false);
  const [visibleLeads, setVisibleLeads] = useState(0);
  const [showPred, setShowPred] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setChartReady(true), 300));
    allLeads.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLeads(i + 1), 600 + i * 350));
    });
    timers.push(setTimeout(() => setShowPred(true), 600 + allLeads.length * 350 + 300));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.panelInner}>
      <div className={styles.panelLeft}>
        <PanelLabel>Forecast de demanda · Unidades/semana</PanelLabel>
        <div className={styles.chartWrap}>
          {chartMeses.map((m, i) => (
            <div key={i} className={styles.chartBarCol}>
              {chartVals[i] !== null ? (
                <div
                  className={styles.chartBar}
                  style={{
                    height: chartReady ? `${((chartVals[i] as number) / maxV) * 100}%` : '4px',
                    transition: `height ${0.5 + i * 0.05}s ease`,
                  }}
                />
              ) : (
                <div
                  className={styles.chartBarPred}
                  style={{
                    height: chartReady ? `${((chartPred[i] as number) / maxV) * 100}%` : '4px',
                    transition: `height ${0.5 + i * 0.05}s ease`,
                  }}
                />
              )}
              <div className={styles.chartLabel}>{m}</div>
            </div>
          ))}
        </div>
        <div className={styles.chartLegend}>
          <span><span className={styles.legendReal} />Real</span>
          <span><span className={styles.legendPred} />Predicción</span>
        </div>
        {showPred && (
          <div className={`${styles.predBox} ${styles.fadeUp}`}>
            <div className={styles.impactLabel}>PREDICCIÓN MAY–JUN</div>
            <div className={styles.predVal}>+14% demanda <span>vs. mismo período 2024</span></div>
          </div>
        )}
      </div>
      <div className={styles.panelRight}>
        <PanelLabel live={false}>Scoring de leads · Pipeline activo</PanelLabel>
        {allLeads.slice(0, visibleLeads).map((l, i) => (
          <div key={i} className={`${styles.metricRow} ${styles.fadeUp}`}>
            <div style={{ flex: 1 }}>
              <div className={styles.leadName}>{l.name}</div>
              <div className={styles.barWrap} style={{ marginTop: 5 }}>
                <div
                  className={styles.barFill}
                  style={{ width: chartReady ? `${l.score}%` : '0%', transition: `width ${0.5 + i * 0.1}s ease` }}
                />
              </div>
            </div>
            <div className={styles.metricRight}>
              <div className={styles.leadScore}>{l.score}<span>/100</span></div>
              <div className={styles.leadDeal}>{l.deal}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ——— Tab 4: Copiloto RAG ——— */

const ragSources = [
  { icon: '📁', name: 'Drive corporativo', meta: '1.847 documentos · sync hace 3 min' },
  { icon: '📋', name: 'Confluence (Wiki)', meta: '432 páginas · 12 espacios' },
  { icon: '💬', name: 'Slack #general', meta: '90 días de historial indexado' },
  { icon: '📊', name: 'Notion (Proyectos)', meta: '68 bases de datos · 940 entradas' },
];
const fullQuery = '¿Cuál es el proceso de aprobación de facturas de proveedores nuevos?';
const fullAnswer =
  'Para proveedores nuevos, el proceso tiene 3 etapas: (1) registro en el módulo de proveedores por Finanzas, con RUT, cuenta bancaria y condiciones de pago; (2) aprobación del Jefe de Compras para montos hasta UF 500, o del Gerente de Operaciones para montos superiores; (3) primera factura requiere OC asociada y revisión de calidad en SAP.';

function DemoRAG() {
  const [visibleSources, setVisibleSources] = useState(0);
  const [queryText, setQueryText] = useState('');
  const [generating, setGenerating] = useState(false);
  const [answerText, setAnswerText] = useState('');
  const [showCite, setShowCite] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    ragSources.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleSources(i + 1), 300 + i * 450));
    });

    const queryStart = 300 + ragSources.length * 450 + 400;
    let qIdx = 0;
    timers.push(
      setTimeout(() => {
        const typeInterval = setInterval(() => {
          qIdx++;
          setQueryText(fullQuery.slice(0, qIdx));
          if (qIdx >= fullQuery.length) {
            clearInterval(typeInterval);
            setTimeout(() => {
              setGenerating(true);
              setTimeout(() => {
                setGenerating(false);
                let aIdx = 0;
                const answerInterval = setInterval(() => {
                  aIdx += 3;
                  setAnswerText(fullAnswer.slice(0, aIdx));
                  if (aIdx >= fullAnswer.length) {
                    clearInterval(answerInterval);
                    setAnswerText(fullAnswer);
                    setShowCite(true);
                  }
                }, 18);
              }, 1200);
            }, 400);
          }
        }, 28);
      }, queryStart)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.panelInner}>
      <div className={styles.panelLeft}>
        <PanelLabel>Fuentes conectadas · Base de conocimiento</PanelLabel>
        {ragSources.map((s, i) => (
          <div
            key={i}
            className={`${styles.ragSource} ${i < visibleSources ? styles.fadeUp : styles.hidden}`}
          >
            <div className={styles.ragSourceIcon}>{s.icon}</div>
            <div>
              <div className={styles.ragSourceName}>{s.name}</div>
              <div className={styles.ragSourceMeta}>{s.meta}</div>
            </div>
            {i < visibleSources && (
              <span className={`${styles.docOk} ${styles.ragOk}`}>activo</span>
            )}
          </div>
        ))}
      </div>
      <div className={styles.panelRight}>
        <PanelLabel live={false}>Consulta al copiloto interno</PanelLabel>
        {queryText && (
          <div className={styles.ragQuery}>
            "{queryText}
            <span className={styles.cursor}>|</span>"
          </div>
        )}
        {generating && (
          <div className={styles.generatingRow}>
            <span className={styles.typingDot} style={{ animationDelay: '0s' }} />
            <span className={styles.typingDot} style={{ animationDelay: '0.18s' }} />
            <span className={styles.typingDot} style={{ animationDelay: '0.36s' }} />
            <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)', marginLeft: 6 }}>
              generando respuesta…
            </span>
          </div>
        )}
        {answerText && (
          <div className={styles.ragAnswer}>
            {answerText}
            {showCite && (
              <div className={styles.ragCite}>
                📄 Fuentes: Manual de Compras v3.2 · Política Financiera 2024 · Confluence/Finanzas
              </div>
            )}
          </div>
        )}
        {showCite && (
          <div className={styles.ragMeta}>
            Respuesta generada en <span>1.4s</span> · 3 fuentes consultadas
          </div>
        )}
      </div>
    </div>
  );
}

/* ——— Tab 5: Integración de sistemas ——— */

const flowNodes = [
  { icon: '🛒', name: 'WooCommerce', sub: 'Pedido nuevo recibido', special: true },
  { icon: '📦', name: 'ERP (SAP)', sub: 'Verifica disponibilidad' },
  { icon: '🧾', name: 'SII Chile', sub: 'Genera DTE automáticamente' },
  { icon: '📧', name: 'Email / WA', sub: 'Notifica al cliente' },
];

function makeLogEntry(offset: number) {
  const hour = 14;
  const min = 32 + Math.floor(offset / 60);
  const sec = offset % 60;
  const ts = `${hour}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  const id = 8822 + offset;
  const ok = Math.random() > 0.15;
  return {
    ts,
    msg: ok
      ? `Pedido #${id} → stock OK → DTE emitido → ${Math.random() > 0.5 ? 'email' : 'WA'} enviado`
      : `Pedido #${id} → sin stock → alerta a bodega → cliente notificado`,
    ok,
  };
}

function DemoIntegracion() {
  const [visibleNodes, setVisibleNodes] = useState(0);
  const [logEntries, setLogEntries] = useState<{ ts: string; msg: string; ok: boolean }[]>([]);
  const [counter, setCounter] = useState(214);
  const offsetRef = useRef(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    flowNodes.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleNodes(i + 1), 300 + i * 500));
    });

    const logStart = 300 + flowNodes.length * 500 + 300;
    function addEntry() {
      const entry = makeLogEntry(offsetRef.current++);
      setLogEntries((prev) => [entry, ...prev].slice(0, 5));
      setCounter((c) => c + 1);
      timers.push(setTimeout(addEntry, 1400));
    }
    timers.push(setTimeout(addEntry, logStart));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.panelInner}>
      <div className={styles.panelLeft}>
        <PanelLabel>Flujo activo · n8n Workflow</PanelLabel>
        {flowNodes.map((n, i) => (
          <div key={i}>
            {i > 0 && i <= visibleNodes && (
              <div className={`${styles.flowArrow} ${styles.fadeUp}`}>
                <div className={styles.flowArrowLine} />
                <span className={styles.flowArrowLabel}>
                  {i === 1 ? '→ valida stock' : i === 2 ? '→ emite DTE' : '→ notifica'}
                </span>
                <div className={styles.flowArrowLine} />
              </div>
            )}
            {i < visibleNodes && (
              <div
                className={`${styles.flowNode} ${styles.fadeUp}`}
                style={n.special ? { background: 'rgba(150,100,220,0.1)', borderColor: 'rgba(150,100,220,0.25)' } : undefined}
              >
                <div className={styles.flowNodeIcon}>{n.icon}</div>
                <div>
                  <div className={styles.flowNodeName}>{n.name}</div>
                  <div className={styles.flowNodeSub}>{n.sub}</div>
                </div>
                {n.special && <span className={`${styles.docOk} ${styles.ragOk}`}>trigger</span>}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.panelRight}>
        <PanelLabel>Log en tiempo real · Pedidos</PanelLabel>
        {logEntries.map((e, i) => (
          <div
            key={e.ts + e.msg}
            className={`${styles.flowEvent} ${styles.slideIn}`}
            style={{ borderLeftColor: e.ok ? 'var(--cyan)' : '#fbbf24', opacity: 1 - i * 0.15 }}
          >
            <span className={styles.flowTs}>{e.ts}</span>
            {e.msg}
          </div>
        ))}
        <ImpactBox label="HOY" cyan>
          {counter} pedidos <span>sin intervención humana</span>
        </ImpactBox>
      </div>
    </div>
  );
}

/* ——— Tab 6: Visión computacional ——— */

const visionItems = [
  { emoji: '📦', label: 'Correcto', cls: styles.visionOk },
  { emoji: '📦', label: 'Correcto', cls: styles.visionOk },
  { emoji: '⚠️', label: 'Defecto', cls: styles.visionWarn },
  { emoji: '📦', label: 'Correcto', cls: styles.visionOk },
  { emoji: '📦', label: 'Correcto', cls: styles.visionOk },
  { emoji: '❌', label: 'Rechazar', cls: styles.visionErr },
];

function DemoVision() {
  const [scanning, setScanning] = useState(-1);
  const [scanned, setScanned] = useState(0);
  const [inspected, setInspected] = useState(1847);
  const [approved, setApproved] = useState(94.2);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let idx = 0;

    function scanNext() {
      if (idx >= visionItems.length) {
        idx = 0;
        setScanned(0);
        timeout = setTimeout(scanNext, 1200);
        return;
      }
      setScanning(idx);
      timeout = setTimeout(() => {
        setScanned(idx + 1);
        setScanning(-1);
        setInspected((v) => v + Math.floor(Math.random() * 4) + 1);
        if (visionItems[idx].label === 'Correcto') {
          setApproved((v) => Math.min(99, +(v + 0.1).toFixed(1)));
        }
        idx++;
        timeout = setTimeout(scanNext, 700);
      }, 600);
    }

    timeout = setTimeout(scanNext, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.panelInner}>
      <div className={styles.panelLeft}>
        <PanelLabel>Control de calidad visual · Línea de producción</PanelLabel>
        <div className={styles.visionGrid}>
          {visionItems.map((it, i) => (
            <div
              key={i}
              className={`${styles.visionImg} ${scanning === i ? styles.visionScanning : ''}`}
            >
              <span className={styles.visionEmoji}>{it.emoji}</span>
              {scanning === i && <div className={styles.visionScanOverlay} />}
              {i < scanned && scanning !== i && (
                <div className={`${styles.visionLabel} ${it.cls}`}>{it.label}</div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.ragMeta} style={{ marginTop: 12 }}>
          Procesando <span>12 imágenes/seg</span> · cámara IP conectada
        </div>
      </div>
      <div className={styles.panelRight}>
        <PanelLabel live={false}>Resumen del turno · 08:00–14:00</PanelLabel>
        <MetricRow label="Unidades inspeccionadas" val={inspected.toLocaleString('es-CL')} delta="+12%" pct={100} animate />
        <MetricRow label="Aprobadas calidad A/B" val={`${approved.toFixed(1)}%`} delta="+2.1%" pct={approved} animate />
        <MetricRow label="Defectos detectados" val={`${(100 - approved).toFixed(1)}%`} delta="−1.9%" pct={100 - approved} animate />
        <MetricRow label="Tiempo de revisión" val="0.08s" delta="−99%" pct={1} animate />
        <ImpactBox label="AHORRO VS REVISIÓN MANUAL">
          6 operarios <span>liberados para otras tareas</span>
        </ImpactBox>
      </div>
    </div>
  );
}

/* ——— Tab 7: IA soberana on-premise ——— */

function DemoOnPremise() {
  const [visibleServers, setVisibleServers] = useState(0);
  const [loads, setLoads] = useState([87, 34, 12, 5, 0]);
  const [requests, setRequests] = useState(14832);
  const [latency, setLatency] = useState(380);

  const servers = [
    { name: 'LLM principal', detail: 'Llama 3.1 70B · GPU A100 80GB' },
    { name: 'Embedding model', detail: 'BGE-M3 · CPU cluster' },
    { name: 'Vector DB', detail: 'Qdrant · 2.4M vectores' },
    { name: 'API Gateway', detail: 'Nginx · TLS 1.3 · intranet only' },
    { name: 'Backup encriptado', detail: 'AES-256 · último backup 02:00' },
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    servers.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleServers(i + 1), 300 + i * 380));
    });

    const fluctuate = setInterval(() => {
      setLoads((prev) =>
        prev.map((l, i) => {
          if (i === 4) return 0;
          const delta = Math.floor(Math.random() * 7) - 3;
          return Math.max(2, Math.min(97, l + delta));
        })
      );
      setRequests((v) => v + Math.floor(Math.random() * 12) + 3);
      setLatency((v) => Math.max(320, Math.min(440, v + Math.floor(Math.random() * 20) - 10)));
    }, 1800);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(fluctuate);
    };
  }, []);

  return (
    <div className={styles.panelInner}>
      <div className={styles.panelLeft}>
        <PanelLabel>Infraestructura · Estado del sistema</PanelLabel>
        {servers.map((s, i) => (
          i < visibleServers && (
            <div key={i} className={`${styles.serverRow} ${styles.fadeUp}`}>
              <div className={`${styles.serverStatus} ${styles.srvOn}`} />
              <div className={styles.serverInfo}>
                <div className={styles.serverName}>{s.name}</div>
                <div className={styles.serverDetail}>{s.detail}</div>
              </div>
              {i < 4 && (
                <div className={styles.serverLoadBar}>
                  <div
                    className={styles.serverLoadFill}
                    style={{ width: `${loads[i]}%`, transition: 'width 1s ease' }}
                  />
                  <span className={styles.serverLoadPct}>{loads[i]}%</span>
                </div>
              )}
              <span className={styles.serverBadge}>OK</span>
            </div>
          )
        ))}
      </div>
      <div className={styles.panelRight}>
        <PanelLabel live={false}>Seguridad y cumplimiento</PanelLabel>
        <MetricRow label="Datos enviados a APIs externas" val="0 bytes" delta="100% local" pct={0} animate />
        <MetricRow label="Peticiones procesadas hoy" val={requests.toLocaleString('es-CL')} delta="+8%" pct={Math.min(99, (requests / 20000) * 100)} animate />
        <MetricRow label="Latencia promedio" val={`${latency}ms`} delta="−12%" pct={Math.max(10, 100 - latency / 5)} animate />
        <MetricRow label="Uptime (últimos 90 días)" val="99.97%" delta="SLA ✓" pct={100} animate />
        <ImpactBox label="CUMPLIMIENTO" cyan>
          <span className={styles.complianceText}>
            Auditado bajo <strong>Ley 21.719</strong> (datos personales Chile). Sin transferencia internacional.
          </span>
        </ImpactBox>
      </div>
    </div>
  );
}

/* ——— Main Demo component ——— */

const tabs = [
  { label: 'Agentes conversacionales', icon: 'messageCircle' as const, Component: DemoChat },
  { label: 'Procesamiento de documentos', icon: 'fileText' as const, Component: DemoDocumentos },
  { label: 'Inteligencia predictiva', icon: 'trendingUp' as const, Component: DemoPredict },
  { label: 'Copiloto RAG', icon: 'brain' as const, Component: DemoRAG },
  { label: 'Integración de sistemas', icon: 'git' as const, Component: DemoIntegracion },
  { label: 'Visión computacional', icon: 'eye' as const, Component: DemoVision },
  { label: 'IA soberana on-premise', icon: 'shield' as const, Component: DemoOnPremise },
];

export function Demo() {
  const headerRef = useFadeIn();
  const wrapRef = useFadeIn(0.05);
  const [active, setActive] = useState(0);
  const ActiveComp = tabs[active].Component;

  return (
    <section id="demo" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} fade-in`} ref={headerRef}>
          <div className={styles.tag}>El producto en acción</div>
          <h2 className={styles.title}>Así se ve Korriente trabajando.</h2>
          <p className={styles.sub}>
            Selecciona cualquier solución para ver cómo funciona con datos reales de una operación.
          </p>
        </div>

        <div className={`${styles.tabsContainer} fade-in`} ref={wrapRef}>
          <nav className={styles.tabNav} aria-label="Soluciones">
            {tabs.map((t, i) => (
              <button
                key={i}
                className={`${styles.tabBtn} ${active === i ? styles.active : ''}`}
                onClick={() => setActive(i)}
              >
                <div className={styles.tabIcon}>
                  <Icon name={t.icon} size={15} />
                </div>
                <span className={styles.tabLabel}>{t.label}</span>
              </button>
            ))}
          </nav>

          <div className={styles.panel}>
            <ActiveComp key={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

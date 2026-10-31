import React, { useState, useMemo } from 'react';
import { 
  Sliders, 
  Activity, 
  Cpu, 
  Workflow, 
  Sparkles, 
  RefreshCw, 
  Layers, 
  ArrowRight, 
  Play, 
  Zap 
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ZAxis,
  Cell
} from 'recharts';

export const DataPlayground: React.FC = () => {
  // Interactive Simulation Parameters
  const [decisionThreshold, setDecisionThreshold] = useState<number>(0.50);
  const [learningRate, setLearningRate] = useState<number>(0.03);
  const [noiseLevel, setNoiseLevel] = useState<number>(15);
  const [activeTab, setActiveTab] = useState<'metrics' | 'clusters' | 'pipeline'>('metrics');
  const [activeNeuronLayer, setActiveNeuronLayer] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // Compute dynamic metrics based on parameters
  const metrics = useMemo(() => {
    // Simulated realistic classification trade-off
    const basePrecision = 0.88;
    const baseRecall = 0.85;

    // As threshold increases: Precision goes up, Recall goes down
    const precision = Math.min(0.99, Math.max(0.60, basePrecision + (decisionThreshold - 0.5) * 0.35 - (noiseLevel / 200)));
    const recall = Math.min(0.99, Math.max(0.50, baseRecall - (decisionThreshold - 0.5) * 0.45 - (noiseLevel / 250)));
    const f1 = (2 * precision * recall) / (precision + recall);
    const loss = Math.max(0.04, (1 - f1) * 0.65 + (noiseLevel * 0.003));
    const accuracy = ((precision + recall) / 2) * 100;

    return {
      precision: (precision * 100).toFixed(1),
      recall: (recall * 100).toFixed(1),
      f1: f1.toFixed(3),
      loss: loss.toFixed(4),
      accuracy: accuracy.toFixed(1)
    };
  }, [decisionThreshold, noiseLevel]);

  // Generate dynamic training convergence curve
  const trainingCurveData = useMemo(() => {
    const points = [];
    let currentLoss = 0.85;
    const decayRate = learningRate * 35;

    for (let epoch = 1; epoch <= 20; epoch++) {
      const noise = (Math.random() - 0.5) * (noiseLevel / 100) * 0.15;
      currentLoss = Math.max(0.05, currentLoss * (1 - decayRate * 0.07) + noise);
      const trainLoss = Math.max(0.02, currentLoss);
      const valLoss = Math.max(0.04, currentLoss + 0.04 + noise * 0.8);
      
      points.push({
        epoch: `E${epoch}`,
        trainLoss: Number(trainLoss.toFixed(4)),
        valLoss: Number(valLoss.toFixed(4)),
      });
    }
    return points;
  }, [learningRate, noiseLevel]);

  // Generate interactive 2D classified scatter points
  const scatterPoints = useMemo(() => {
    const data = [];
    const seed = 42;
    // Generate two synthetic classes
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 2;
      // Class A: inner cluster
      const rA = 2 + (Math.sin(i + seed) * (noiseLevel / 30));
      const xA = Math.cos(angle) * rA;
      const yA = Math.sin(angle) * rA;
      const probA = 0.8 - (rA * 0.15);
      const predictedA = probA >= decisionThreshold;

      data.push({
        x: Number(xA.toFixed(2)),
        y: Number(yA.toFixed(2)),
        cls: predictedA ? 'Class A (Positive)' : 'Class B (Predicted Negative)',
        color: predictedA ? '#A855F7' : '#4C1D95'
      });

      // Class B: outer ring
      const rB = 5 + (Math.cos(i * 2) * (noiseLevel / 25));
      const xB = Math.cos(angle) * rB;
      const yB = Math.sin(angle) * rB;
      const probB = 0.2 + (rB * 0.05);
      const predictedB = probB >= decisionThreshold;

      data.push({
        x: Number(xB.toFixed(2)),
        y: Number(yB.toFixed(2)),
        cls: predictedB ? 'Class A (False Positive)' : 'Class B (True Negative)',
        color: predictedB ? '#D8B4FE' : '#312E81'
      });
    }
    return data;
  }, [decisionThreshold, noiseLevel]);

  // Simulate pulse trigger
  const triggerSimulation = () => {
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setActiveNeuronLayer((prev) => (prev % 3) + 1);
      if (step > 6) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 250);
  };

  return (
    <section id="playground" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-purple-300 border border-purple-500/20 mb-3">
          <Activity className="w-3.5 h-3.5 text-purple-400" />
          <span>04 // LIVE DATA PLAYGROUND</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
          THINK IN DATA. <span className="text-purple-400">BUILD WITH INTELLIGENCE.</span>
        </h2>
        <p className="text-purple-300/80 text-base max-w-2xl mt-2">
          Interactive machine learning workspace demonstrating dynamic decision boundaries, gradient convergence curves, and neural activation flow in real-time.
        </p>
      </div>

      {/* Main Interactive Container */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl relative overflow-hidden">
        
        {/* Playground Tab Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-purple-900/40">
          <div className="flex items-center gap-2 p-1 rounded-xl bg-theme-secondary/80 border border-purple-500/20">
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'metrics'
                  ? 'bg-purple-600 text-white font-semibold shadow-md'
                  : 'text-purple-300/70 hover:text-white'
              }`}
            >
              Loss &amp; ROC Dynamics
            </button>
            <button
              onClick={() => setActiveTab('clusters')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'clusters'
                  ? 'bg-purple-600 text-white font-semibold shadow-md'
                  : 'text-purple-300/70 hover:text-white'
              }`}
            >
              Decision Space (2D)
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-purple-600 text-white font-semibold shadow-md'
                  : 'text-purple-300/70 hover:text-white'
              }`}
            >
              ML Pipeline Architecture
            </button>
          </div>

          <button
            onClick={triggerSimulation}
            disabled={isSimulating}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-600 hover:to-violet-500 transition-all shadow-md shadow-purple-900/40 disabled:opacity-50"
          >
            {isSimulating ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current" />
            )}
            <span>{isSimulating ? 'Backpropagating...' : 'Simulate Epoch'}</span>
          </button>
        </div>

        {/* Live Metrics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8 p-4 rounded-2xl bg-theme-secondary/90 border border-purple-500/20">
          <div className="text-center">
            <p className="text-[11px] font-mono text-purple-400">Accuracy</p>
            <p className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">{metrics.accuracy}%</p>
          </div>
          <div className="text-center">
            <p className="text-[11px] font-mono text-purple-400">Precision</p>
            <p className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">{metrics.precision}%</p>
          </div>
          <div className="text-center">
            <p className="text-[11px] font-mono text-purple-400">Recall</p>
            <p className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">{metrics.recall}%</p>
          </div>
          <div className="text-center">
            <p className="text-[11px] font-mono text-purple-400">F1 Score</p>
            <p className="text-xl sm:text-2xl font-bold font-mono text-purple-200 mt-1">{metrics.f1}</p>
          </div>
          <div className="text-center col-span-2 sm:col-span-1">
            <p className="text-[11px] font-mono text-purple-400">Validation Loss</p>
            <p className="text-xl sm:text-2xl font-bold font-mono text-violet-300 mt-1">{metrics.loss}</p>
          </div>
        </div>

        {/* Sliders & Interactive Visualizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders Panel */}
          <div className="lg:col-span-4 flex flex-col gap-5 p-5 rounded-2xl bg-theme-secondary/60 border border-purple-500/20">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
              <Sliders className="w-4 h-4 text-purple-400" />
              <span>TUNABLE HYPERPARAMETERS</span>
            </div>

            {/* Slider 1: Decision Threshold */}
            <div>
              <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                <span className="text-purple-200">Classification Threshold</span>
                <span className="font-mono text-purple-400 font-bold">{decisionThreshold.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="0.9"
                step="0.02"
                value={decisionThreshold}
                onChange={(e) => setDecisionThreshold(parseFloat(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer bg-purple-950/60 rounded-lg h-1.5"
              />
              <div className="flex justify-between text-[10px] font-mono text-purple-400/60 mt-1">
                <span>High Recall (0.1)</span>
                <span>High Precision (0.9)</span>
              </div>
            </div>

            {/* Slider 2: Learning Rate */}
            <div>
              <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                <span className="text-purple-200">Learning Rate (α)</span>
                <span className="font-mono text-purple-400 font-bold">{learningRate.toFixed(3)}</span>
              </div>
              <input
                type="range"
                min="0.005"
                max="0.08"
                step="0.005"
                value={learningRate}
                onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer bg-purple-950/60 rounded-lg h-1.5"
              />
              <div className="flex justify-between text-[10px] font-mono text-purple-400/60 mt-1">
                <span>0.005 (Slow)</span>
                <span>0.080 (Aggressive)</span>
              </div>
            </div>

            {/* Slider 3: Noise Level */}
            <div>
              <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                <span className="text-purple-200">Dataset Noise</span>
                <span className="font-mono text-purple-400 font-bold">{noiseLevel}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                step="5"
                value={noiseLevel}
                onChange={(e) => setNoiseLevel(parseInt(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer bg-purple-950/60 rounded-lg h-1.5"
              />
              <div className="flex justify-between text-[10px] font-mono text-purple-400/60 mt-1">
                <span>0% (Clean)</span>
                <span>40% (Outliers)</span>
              </div>
            </div>

            {/* Micro Neural Activation Flow */}
            <div className="pt-4 border-t border-purple-900/40">
              <p className="text-[11px] font-mono text-purple-400 mb-2">NEURAL FORWARD PASS</p>
              <div className="flex items-center justify-between px-2 py-2.5 rounded-xl bg-theme-card border border-purple-500/20">
                <div className="flex flex-col items-center gap-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono transition-all ${
                    activeNeuronLayer === 1 ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50 scale-110' : 'bg-purple-950 text-purple-400'
                  }`}>
                    x₁
                  </div>
                  <span className="text-[9px] font-mono text-purple-400/70">Input</span>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-purple-600 animate-pulse" />

                <div className="flex flex-col items-center gap-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono transition-all ${
                    activeNeuronLayer === 2 ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/50 scale-110' : 'bg-purple-950 text-purple-400'
                  }`}>
                    h₂
                  </div>
                  <span className="text-[9px] font-mono text-purple-400/70">Dense</span>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-purple-600 animate-pulse" />

                <div className="flex flex-col items-center gap-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono transition-all ${
                    activeNeuronLayer === 3 ? 'bg-purple-400 text-purple-950 font-bold shadow-lg shadow-purple-400/50 scale-110' : 'bg-purple-950 text-purple-400'
                  }`}>
                    ŷ
                  </div>
                  <span className="text-[9px] font-mono text-purple-400/70">Output</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-purple-300/60 leading-tight">
              Adjusting sliders recalibrates decision boundaries and triggers parameter sensitivity simulation in real-time.
            </div>

          </div>

          {/* Visualizer Display Panel */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {activeTab === 'metrics' && (
              <div className="p-4 sm:p-5 rounded-2xl bg-theme-secondary/50 border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-purple-300 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-400" />
                    TRAINING CONVERGENCE (LOSS VS EPOCH)
                  </span>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-purple-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
                      Train Loss
                    </span>
                    <span className="flex items-center gap-1.5 text-violet-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-violet-400 inline-block" />
                      Val Loss
                    </span>
                  </div>
                </div>

                <div className="h-64 sm:h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trainingCurveData}>
                      <defs>
                        <linearGradient id="trainLossGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#7929DB" stopOpacity={0.45} />
                          <stop offset="95%" stopColor="#7929DB" stopOpacity={0.0} />
                        </linearGradient>
                        <linearGradient id="valLossGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#A855F7" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="#A855F7" stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="epoch" stroke="#6B7280" fontSize={11} tickLine={false} />
                      <YAxis stroke="#6B7280" fontSize={11} tickLine={false} domain={[0, 1]} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#171027', 
                          border: '1px solid rgba(168,85,247,0.3)',
                          borderRadius: '12px',
                          color: '#F5F3FF',
                          fontSize: '12px',
                          fontFamily: 'monospace'
                        }} 
                      />
                      <Area type="monotone" dataKey="trainLoss" stroke="#7929DB" strokeWidth={2} fillOpacity={1} fill="url(#trainLossGrad)" />
                      <Area type="monotone" dataKey="valLoss" stroke="#A855F7" strokeWidth={2} strokeDasharray="3 3" fillOpacity={1} fill="url(#valLossGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === 'clusters' && (
              <div className="p-4 sm:p-5 rounded-2xl bg-theme-secondary/50 border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-purple-300 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    2D FEATURE SPACE &amp; DECISION PARTITION
                  </span>
                  <span className="text-[10px] font-mono text-purple-400/80 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                    Threshold: {decisionThreshold}
                  </span>
                </div>

                <div className="h-64 sm:h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart>
                      <XAxis type="number" dataKey="x" name="Feature 1" stroke="#6B7280" fontSize={11} domain={[-7, 7]} />
                      <YAxis type="number" dataKey="y" name="Feature 2" stroke="#6B7280" fontSize={11} domain={[-7, 7]} />
                      <ZAxis range={[35, 35]} />
                      <Tooltip 
                        cursor={{ strokeDasharray: '3 3' }} 
                        contentStyle={{ 
                          backgroundColor: '#171027', 
                          border: '1px solid rgba(168,85,247,0.3)',
                          borderRadius: '12px',
                          color: '#F5F3FF',
                          fontSize: '12px',
                          fontFamily: 'monospace'
                        }} 
                      />
                      <Scatter data={scatterPoints}>
                        {scatterPoints.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Scatter>
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === 'pipeline' && (
              <div className="p-5 sm:p-6 rounded-2xl bg-theme-secondary/50 border border-purple-500/20 space-y-4">
                <span className="text-xs font-mono text-purple-300 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-purple-400" />
                  END-TO-END MACHINE LEARNING LIFECYCLE
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-theme-card border border-purple-500/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                      <span className="w-5 h-5 rounded-md bg-purple-900/60 text-purple-300 flex items-center justify-center font-mono text-[10px]">1</span>
                      Ingestion &amp; Schema Validation
                    </div>
                    <p className="text-[11px] text-purple-200/70">
                      Pandas &amp; SQL sanitization, missing value imputation, multi-source merging.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-theme-card border border-purple-500/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                      <span className="w-5 h-5 rounded-md bg-purple-900/60 text-purple-300 flex items-center justify-center font-mono text-[10px]">2</span>
                      Exploratory Analysis &amp; Features
                    </div>
                    <p className="text-[11px] text-purple-200/70">
                      Correlation heatmaps, TF-IDF vectorization, normalization, and outlier detection.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-theme-card border border-purple-500/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                      <span className="w-5 h-5 rounded-md bg-purple-900/60 text-purple-300 flex items-center justify-center font-mono text-[10px]">3</span>
                      Model Training &amp; Hyperparameter Tuning
                    </div>
                    <p className="text-[11px] text-purple-200/70">
                      PyTorch &amp; Scikit-learn architectures, cross-validation, loss function optimization.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-theme-card border border-purple-500/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                      <span className="w-5 h-5 rounded-md bg-purple-900/60 text-purple-300 flex items-center justify-center font-mono text-[10px]">4</span>
                      Deployment &amp; Monitoring
                    </div>
                    <p className="text-[11px] text-purple-200/70">
                      FastAPI microservices, Docker containerization, and interactive Power BI/React dashboards.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Explanatory Footer Callout */}
            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-800/30 text-[11px] font-mono text-purple-300/80 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
              <span>
                <strong>Methodology:</strong> Sample dataset is generated dynamically in-browser for illustrative demonstration of decision boundary sensitivity.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

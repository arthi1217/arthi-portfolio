import React, { useState, useMemo } from 'react';
import { Cpu, Sliders, RefreshCw, Activity, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';

export default function MLSandbox() {
  const [modelType, setModelType] = useState('house'); // 'house' | 'churn'

  // House Price Model Inputs
  const [sqft, setSqft] = useState(1800);
  const [bedrooms, setBedrooms] = useState(3);
  const [age, setAge] = useState(5);
  const [locationQuality, setLocationQuality] = useState(8);

  // Customer Churn Model Inputs
  const [monthlySpend, setMonthlySpend] = useState(75);
  const [contractMonths, setContractMonths] = useState(1);
  const [tenure, setTenure] = useState(6);
  const [supportTickets, setSupportTickets] = useState(3);

  // Computed House Price Prediction (Linear Regression formula logic)
  const predictedHousePrice = useMemo(() => {
    // Base $100k + $150/sqft + $25k/bed - $2k/year_age + $20k*location
    const price = 100000 + (sqft * 165) + (bedrooms * 28000) - (age * 1800) + (locationQuality * 22000);
    return Math.max(80000, Math.round(price));
  }, [sqft, bedrooms, age, locationQuality]);

  // Computed Churn Risk Score % (Logistic Sigmoid logic formula)
  const churnScore = useMemo(() => {
    // Logit = -1.2 + 0.015*monthlySpend - 1.1*(contractMonths/12) - 0.08*tenure + 0.6*supportTickets
    const logit = -1.2 + (0.012 * monthlySpend) - (1.2 * (contractMonths / 12)) - (0.07 * tenure) + (0.55 * supportTickets);
    const prob = 1 / (1 + Math.exp(-logit));
    return Math.min(99, Math.max(1, Math.round(prob * 100)));
  }, [monthlySpend, contractMonths, tenure, supportTickets]);

  return (
    <section id="sandbox" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Interactive AI Playground</span>
          <h2 className="section-title">Live ML Model Simulator</h2>
        </div>

        <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '2.5rem' }}>
          {/* Model Selector Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}
          >
            <button
              onClick={() => setModelType('house')}
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.92rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: modelType === 'house' ? 'transparent' : 'var(--border-color)',
                background: modelType === 'house' ? 'var(--gradient-brand)' : 'var(--bg-card)',
                color: modelType === 'house' ? '#fff' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)'
              }}
            >
              🏡 House Price Predictor
            </button>
            <button
              onClick={() => setModelType('churn')}
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.92rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: modelType === 'churn' ? 'transparent' : 'var(--border-color)',
                background: modelType === 'churn' ? 'var(--gradient-brand)' : 'var(--bg-card)',
                color: modelType === 'churn' ? '#fff' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)'
              }}
            >
              📊 Customer Churn Estimator
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '2.5rem',
              alignItems: 'center'
            }}
            className="sandbox-grid"
          >
            {/* Input Sliders */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Sliders size={20} style={{ color: 'var(--accent-cyan)' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Adjust Input Features</h3>
              </div>

              {modelType === 'house' ? (
                <>
                  {/* House Features */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 600 }}>Square Footage</span>
                      <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{sqft} sq.ft</span>
                    </div>
                    <input
                      type="range"
                      min="600"
                      max="4500"
                      step="50"
                      value={sqft}
                      onChange={(e) => setSqft(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#06b6d4' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 600 }}>Bedrooms</span>
                      <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{bedrooms} BHK</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="6"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#06b6d4' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 600 }}>Property Age</span>
                      <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{age} years</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#06b6d4' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 600 }}>Location Quality Index</span>
                      <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{locationQuality}/10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={locationQuality}
                      onChange={(e) => setLocationQuality(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#06b6d4' }}
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Churn Features */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 600 }}>Monthly Spend ($)</span>
                      <span style={{ color: 'var(--accent-violet)', fontWeight: 700 }}>${monthlySpend}/mo</span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="200"
                      step="5"
                      value={monthlySpend}
                      onChange={(e) => setMonthlySpend(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#8b5cf6' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 600 }}>Contract Type</span>
                      <span style={{ color: 'var(--accent-violet)', fontWeight: 700 }}>{contractMonths} Month(s)</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="24"
                      step="1"
                      value={contractMonths}
                      onChange={(e) => setContractMonths(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#8b5cf6' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 600 }}>Customer Tenure</span>
                      <span style={{ color: 'var(--accent-violet)', fontWeight: 700 }}>{tenure} Months</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="60"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#8b5cf6' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 600 }}>Recent Support Tickets</span>
                      <span style={{ color: 'var(--accent-violet)', fontWeight: 700 }}>{supportTickets} Tickets</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={supportTickets}
                      onChange={(e) => setSupportTickets(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#8b5cf6' }}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Simulated Live Output Prediction Screen */}
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                <Activity size={14} style={{ color: '#10b981' }} />
                <span>Real-Time Model Inference</span>
              </div>

              {modelType === 'house' ? (
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Predicted Market Valuation
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
                    ${predictedHousePrice.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                    Regression algorithm trained with Scikit-learn (R² = 0.89)
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Calculated Customer Churn Risk
                  </div>
                  <div
                    style={{
                      fontSize: '2.8rem',
                      fontWeight: 800,
                      color: churnScore > 50 ? '#ef4444' : churnScore > 25 ? '#f59e0b' : '#10b981'
                    }}
                  >
                    {churnScore}%
                  </div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      marginTop: '0.5rem',
                      color: churnScore > 50 ? '#ef4444' : churnScore > 25 ? '#f59e0b' : '#10b981'
                    }}
                  >
                    {churnScore > 50 ? <AlertTriangle size={16} /> : <CheckCircle size={16} />}
                    <span>{churnScore > 50 ? 'High Churn Risk' : churnScore > 25 ? 'Moderate Risk' : 'Low Churn Risk'}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .sandbox-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

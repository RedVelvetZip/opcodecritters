import './styles/main.scss'
import iconTwitter from './assets/icon-twitter.png'
import puzzle1 from './assets/mew07.png'
import puzzle2 from './assets/mew02.png'
import puzzle4 from './assets/wizard02.png'
import puzzle5 from './assets/mew03.png'

function App() {

  return (
    <div className="App">
      <nav className="navbar">
        <a href="#home" className="nav-brand">Opcode Critters</a>
        <ul className="navbar-nav">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#learn" className="nav-link">Learn</a></li>
          <li><a href="#play" className="nav-link">Play</a></li>
          <li><a href="#next" className="nav-link">What's Next</a></li>
        </ul>
        <div className="nav-social">
          <a href="https://twitter.com/redvelvetzip" target="_blank" rel="noreferrer">
            <img src={iconTwitter} alt="Twitter" />
          </a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Opcode<br/>Critters</h1>
          <p className="hero-subtitle">Learn about Bitcoin's OP_CAT opcode through an interactive adventure</p>
          <a href="#learn" className="hero-cta">Start Learning</a>
        </div>
        <div className="hero-critter">
          <img src={puzzle1} alt="critter" />
        </div>
      </section>

      <section id="learn" className="learn">
        <div className="section-inner">
          <div className="learn-content">
            <h2>Learn about OP_CAT</h2>
            <p className="learn-intro">
              OP_CAT was once a Bitcoin opcode, but then it was disabled.
              Should it be added back? Explore the resources below to decide for yourself.
            </p>
            <div className="link-grid">
              <a href="https://github.com/EthanHeilman/op_cat_draft/blob/main/cat.mediawiki" className="link-card" target="_blank" rel="noreferrer">
                <span className="link-label">BIP Draft</span>
                <span className="link-desc">The opcode specifications</span>
              </a>
              <a href="https://www.quantumcats.xyz/bip-land" className="link-card" target="_blank" rel="noreferrer">
                <span className="link-label">BIP-Land</span>
                <span className="link-desc">The journey of a BIP</span>
              </a>
              <a href="https://twitter.com/ercwl/status/1747349610715111453" className="link-card" target="_blank" rel="noreferrer">
                <span className="link-label">Community Takes</span>
                <span className="link-desc">What people are saying</span>
              </a>
              <a href="https://opcat.wtf/" className="link-card" target="_blank" rel="noreferrer">
                <span className="link-label">Setup Wizard</span>
                <span className="link-desc">OP_CAT setup guide</span>
              </a>
            </div>
          </div>
          <div className="learn-critter">
            <img src={puzzle2} alt="critter" />
          </div>
        </div>
      </section>

      <section id="play" className="play">
        <div className="section-inner">
          <div className="play-header">
            <div className="play-critter">
              <img src={puzzle4} alt="critter" />
            </div>
            <div className="play-text">
              <h2>Put Your Knowledge to the Test</h2>
              <p>
                If you truly understand OP_CAT, you'll be able to capture it.
                From there, it's up to you to decide whether OP_CAT should be activated or not.
              </p>
            </div>
          </div>
          <div className="game-container">
            <iframe
              src="https://redvelvetzip.github.io/pokemon-battle-system/"
              title="Opcode Critters Game"
              width="1000"
              height="900"
            ></iframe>
          </div>
        </div>
      </section>

      <section id="next" className="next">
        <div className="section-inner">
          <h2>What's Next?</h2>
          <p className="next-intro">Now that you're an OP_CAT expert, dive deeper into Bitcoin's evolving ecosystem.</p>
          <div className="link-grid">
            <a href="https://opcodeexplained.com/" className="link-card" target="_blank" rel="noreferrer">
              <span className="link-label">Opcode Explained</span>
              <span className="link-desc">An encyclopedia of opcodes</span>
            </a>
            <a href="https://www.thevgbclub.com/p/bitvm-update-oct-13" className="link-card" target="_blank" rel="noreferrer">
              <span className="link-label">BitVM</span>
              <span className="link-desc">Turing-completeness on Bitcoin</span>
            </a>
            <a href="https://twitter.com/chainway_xyz/status/1742607389679927659" className="link-card" target="_blank" rel="noreferrer">
              <span className="link-label">BitVM + OP_CAT</span>
              <span className="link-desc">Better together</span>
            </a>
            <a href="https://covenants.info/" className="link-card" target="_blank" rel="noreferrer">
              <span className="link-label">Covenants</span>
              <span className="link-desc">Bitcoin covenant proposals</span>
            </a>
            <a href="https://medium.com/@chainway_xyz/a-sovereign-zk-rollup-on-bitcoin-full-bitcoin-security-without-a-soft-fork-ca0389a0b658" className="link-card" target="_blank" rel="noreferrer">
              <span className="link-label">ZK Rollups</span>
              <span className="link-desc">Sovereign rollups on Bitcoin</span>
            </a>
            <a href="https://twitter.com/BitcoinRollups" className="link-card" target="_blank" rel="noreferrer">
              <span className="link-label">Bitcoin Rollups</span>
              <span className="link-desc">Documenting the ecosystem</span>
            </a>
          </div>
          <div className="community-links">
            <p>Join the community:</p>
            <a href="https://twitter.com/QuantumCatsXYZ" target="_blank" rel="noreferrer">Quantum Cats</a>
            <span className="divider">/</span>
            <a href="https://twitter.com/TaprootWizards" target="_blank" rel="noreferrer">Taproot Wizards</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-critter">
          <img src={puzzle5} alt="critter" />
        </div>
        <p>Opcode Critters</p>
        <p className="footer-credit">
          Made by <a href="https://redvelvet.tech" target="_blank" rel="noreferrer">Red Sheehan</a>
          {' '}<span className="divider">/</span>{' '}
          <a href="https://twitter.com/redvelvetzip" target="_blank" rel="noreferrer">@redvelvetzip</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

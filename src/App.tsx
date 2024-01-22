import './styles/main.scss'
import iconIG from './assets/icon-ig.png'
import iconOS from './assets/icon-os.png'
import iconTwitter from './assets/icon-twitter.png'
import iconDiscord from './assets/icon-discord.png'
import titleRoadmap from './assets/title-roadmap.png'
// import titleManifesto from './assets/title-manifesto.png'
// import puzzle1 from './assets/puzzle1.png'
import puzzle1 from './assets/mew07.png'
import puzzle2 from './assets/mew02.png'
import puzzle3 from './assets/mew07.png'
import puzzle4 from './assets/wizard02.png'
import puzzle5 from './assets/mew03.png'
import shape1 from './assets/shape1.png'
import shape2 from './assets/shape2.png'

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <a href="#" className="nav-logo">
        </a>
        <ul className="navbar-nav">
          <li>
            <a href="#" className="nav-link">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#learn" className="nav-link">
              <span>Learn</span>
            </a>
          </li>
          <li>
            <a href="#play" className="nav-link">
              <span>Play</span>
            </a>
          </li>
          <li>
            <a href="#next" className="nav-link">
              <span>What's Next?</span>
            </a>
          </li>
        </ul>
        <a className="nav-icon" href="https://twitter.com/redvelvetzip" target="_blank" rel="noreferrer"><img id="icon" src={iconTwitter} alt="Twitter"></img></a>
        {/* <a className="nav-icon" href="https://t.co/Qkd6Z384Hk" target="_blank" rel="noreferrer"><img id="icon" src={iconDiscord} alt="Discord"></img></a> */}
      </div>
      <section id="home" className="home">
        <div className="home-title">
          {/* <img src={titleHome} alt="image"></img> */}
          <h1 className="optitle">
            Opcode Critters
          </h1>
        </div>
        <div className="home-char">
          {/* <img src={zenitsu} alt="zenitsu"></img> */}
        </div>
        <div className="puzzle-one">
          <img src={puzzle1} alt="puzzle"></img>
        </div>
      </section>
      <section id="learn" className="learn">
        <div className="learn-title">
          {/* <img src={titleValues} alt="learn-title"></img> */}
          <div className="learn-text">
            <p>Let's learn about OP_CAT!</p>
            <br/><br/>
            <p>OP_CAT was once a Bitcoin <a href="https://opcodeexplained.com/opcodes/OP_CAT.html#op-cat">opcode</a>, but then it was disabled!</p>
            <p>Should it be added back?</p>
            <br/><br/>
            <p>Here are some useful links to get started:</p>
            <p> - The opcode specifications, <a href="https://github.com/EthanHeilman/op_cat_draft/blob/main/cat.mediawiki">BIP draft</a></p>
            <p> - The journey of a BIP, <a href="https://www.quantumcats.xyz/bip-land">BIP-Land</a></p>
            <p> - Compiled takes from the <a href="https://twitter.com/ercwl/status/1747349610715111453">community</a></p>
            <p> - The OP_CAT <a href="https://opcat.wtf/">setup wizard</a></p>
          </div>
        </div>
        <div className="puzzle-two">
          <img src={puzzle2} alt="puzzle"></img>
        </div>
      </section>
      <section id="play" className="next">
        <div className="next-title">
          {/* <img src={titleManifesto} alt="manifesto"></img> */}
        </div>
        <div className="unity">
          {/* <img src={unity} alt="unity"></img> */}
        </div>
        <div className="puzzle-four">
          <img src={puzzle4} alt="puzzle"></img>
        </div>
        <div className="next-text">
          <p>
            Play Opcode Critters (on desktop)! In this game, you'll put your knowledge to the test. If you truly understand OP_CAT, you'll be able to capture it. From there, it's up to you to decide whether OP_CAT should be activated or not.
          </p>
          <div>
          <iframe src="https://redvelvetzip.github.io/pokemon-battle-system/" width="1000" height="900"></iframe>
          {/* <div className="responsive-iframe-container">
            <iframe className="responsive-iframe" src="https://redvelvetzip.github.io/pokemon-battle-system/"></iframe>
          </div> */}

          </div>
          {/* <p >
            yyyy
          </p>
          <h2>
            zzzz
          </h2> */}
        </div>
        {/* <p>Mobile still needs some testing :)</p> */}
      </section>
      <section id="next" className="play">
        <div className="play-title">
          <img src={titleRoadmap} alt="play-title"></img>
        </div>
        <div className="next-text">
          <br/><br/><br/><br/><br/>
          <h2>Ok now that you're an OP_CAT expert, what comes next? Here's some further reading</h2>
        </div>
        <p>-An encyclopedia of opcodes, <a href="https://opcodeexplained.com/">Opcode Explained</a></p>
        <br/>
        <p>-Turing-completeness on Bitcoin, <a href="https://www.thevgbclub.com/p/bitvm-update-oct-13">BitVM</a></p>
        <br/>
        <p>-BitVM and OP_CAT, <a href="https://twitter.com/chainway_xyz/status/1742607389679927659">together</a></p>
        <br/>
        <p>-<a href="https://covenants.info/">Covenants</a></p>
        <br/>
        <p>-Sovereign <a href="https://medium.com/@chainway_xyz/a-sovereign-zk-rollup-on-bitcoin-full-bitcoin-security-without-a-soft-fork-ca0389a0b658">rollups</a> on Bitcoin</p>
        <br/>
        <p>-<a href="https://twitter.com/BitcoinRollups">Documenting Bitcoin Rollups</a></p>
        <br/>
        <br/>
        <p>-Join the <a href="https://twitter.com/QuantumCatsXYZ">Quantum Cats</a> and <a href="https://twitter.com/TaprootWizards">Taproot Wizards</a> communities</p>
      </section>
      <section id="team" className="team">
        <div className="team-chars">
          {/* <img src={teamFull} alt="team"></img> */}
        </div>
        <div className="puzzle-five">
          <img src={puzzle5} alt="puzzle"></img>
        </div>
      </section>
    </div>
  );
}

export default App;
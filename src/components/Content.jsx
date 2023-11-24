import egg from '../assets/images/desktop/image-transform.jpg';
import glass from '../assets/images/desktop/image-stand-out.jpg';
import cherry from '../assets/images/desktop/image-graphic-design.jpg';
import photography from '../assets/images/desktop/image-photography.jpg';

function Content() {
    return ( 
        <section className="content">
            <div className="div-content-1">
                <h2>Transform your<br/> brand</h2>
                <p className="content-p">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients 
                    through compelling visuals that do most of the marketing for you.</p>
                <a href="#" className="learn-more yellow">LEARN MORE</a>
            </div>

            <div className="egg-img"></div>
            
            <div className="glass-img"></div>
            
            <div className="div-content-2">
                <h2>Stand out to the right audience</h2>
                <p className="content-p">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
                     we’ll build and extend your brand in digital places. </p>
                <a href="#" className="learn-more pink">LEARN MORE</a>
            </div>

            
                <div className="cherries-img">
                    
                    <h2>Graphic Design</h2>
                    <p>Great design makes you memorable. We deliver artwork that underscores 
                        your brand message and captures potential clients’ attention.</p>
                </div>

                <div className="orange-img">
                    
                    <h2>Photography</h2>
                    <p>Increase your credibility by getting the most stunning, 
                        high-quality photos that improve your business image.</p>
                </div>
            
        </section>
     );
}

export default Content;
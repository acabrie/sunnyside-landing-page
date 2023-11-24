import emily from '../assets/images/image-emily.jpg'
import jennie from '../assets/images/image-jennie.jpg'
import thomas from '../assets/images/image-thomas.jpg'


function Testimonials() {
    return ( 
        <section className="testimonials">

            <h2>Client Testimonials</h2>
            <div className="cards">
                <article>
                    <img src={emily} alt="avatar" className="circle"/>
                    <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <h3>Emily R.</h3>
                    <h4>Marketing Director</h4>
                </article>
                <article>
                    <img src={thomas} alt="avatar" className="circle"/>
                    <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience</p>
                    <h3>Thomas S.</h3>
                    <h4>Chief Operating Officer</h4>
                </article>
                <article>
                    <img src={jennie} alt="avatar" className="circle"/>
                    <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    <h3>Jennie F.</h3>
                    <h4>Business Owner</h4>
                </article>
            </div>

        </section>
     );
}

export default Testimonials;
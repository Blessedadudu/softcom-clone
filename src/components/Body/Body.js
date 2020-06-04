import React from 'react';
import './Body.scss';
import passId from '../../assets/passid.svg';
import koya from '../../assets/koya.svg';
import eyowo from '../../assets/eyowo.svg';
import databeaver from '../../assets/databeaver.svg';
import excellency from '../../assets/excellency.jpeg';
import findyourself from '../../assets/find-yourselves.png';
import sdgtech from '../../assets/SDG-technology.jpg';
import devxlogo from '../../assets/devx-logo.png';
import arm from '../../assets/arm.jpg';
import boi from '../../assets/boi.jpg';
import cocacola from '../../assets/cocacola.jpg';
import enyo from '../../assets/enyo.jpg';
import gino from '../../assets/gino.jpg';
import honywell from '../../assets/honeywell.jpg';
import learnafrica from '../../assets/learn-africa.jpg';
import microsoft from '../../assets/microsoft.jpg';
import mtn from '../../assets/mtn.jpg';
import nibss from '../../assets/nibss.jpg';
import rockefeller from '../../assets/rockefeller.jpg';
import samsung from '../../assets/samsung.jpg';






const Body = () => {
    return (
        <body className='body'>
            <div className='bodyText'>
                <h2>Our Focus</h2>
                <p>Following our work over the years, we have identified four key areas that would enable people and businesses thrive in Africa. Namely: Identity, Learning, Payment and Data.</p>
            </div>
            <div className='bodycardGrid'>
                <>
                    
                    <div className='cards1'>
                        <div className='arrow'><span> &#8594; </span></div>
                        <img src={passId} alt='pass ID'/>
                        <h3>Identity</h3>
                        <h4>Enroll & Verify Anyone</h4>
                        <p>We believe that no society can truly grow her community without first identifying the people that belong to the community. Identity is the bedrock to planning, financial inclusion and targeting.</p>
                    </div>
                </>
                <>
                    
                    <div className='cards1'>
                        <div className='arrow'><span> &#8594; </span></div>
                        <img src={koya} alt='pass ID'/>
                        <h3>Identity</h3>
                        <h4>Enroll & Verify Anyone</h4>
                        <p>We believe that no society can truly grow her community without first identifying the people that belong to the community. Identity is the bedrock to planning, financial inclusion and targeting.</p>
                    </div>   
                </>
                <>  
                    <div className='cards1'>
                        <div className='arrow'><span> &#8594; </span></div>
                        <img src={eyowo} alt='pass ID'/>
                        <h3>Identity</h3>
                        <h4>Enroll & Verify Anyone</h4>
                        <p>We believe that no society can truly grow her community without first identifying the people that belong to the community. Identity is the bedrock to planning, financial inclusion and targeting.</p>
                    </div>   
                </>
                <>
                    <div className='cards1'>
                        <div className='arrow'><span> &#8594; </span></div>
                        <img src={databeaver} alt='pass ID'/>
                        <h3>Identity</h3>
                        <h4>Enroll & Verify Anyone</h4>
                        <p>We believe that no society can truly grow her community without first identifying the people that belong to the community. Identity is the bedrock to planning, financial inclusion and targeting.</p>
                    </div>   
                </>
            </div>

            {/* section 2  */}
            <div className='bodyText'>
                <div>
                    <div className='focusFlex'>
                        <h2>Our Blog</h2>
                        <button>View all <span>&raquo;</span></button> 
                    </div>
                    <p>See how Softcom is delivering positive impact to clients and communities in Africa through technology.</p>
                </div>
                <div className='section2Cards'>
                    <div className='cards2Main'>
                        <img alt='excellency' src={excellency} />
                        <h2>Achieving Operational Excellence with a Vendor Intimacy Strategy</h2>
                        <p>10 things we consider before developing vendor relationships.</p>
                    </div>
                    <div className='cards2Main'>
                        <img alt='findyourself' src={findyourself} className='findyourself'/>
                        <h2>Find yourself - The Gift of Time.</h2>
                        <p>Time is a gift we should all be grateful for. It’s a gift because we can’t extend or reduce it,...</p>
                    </div>
                    <div className='cards2Main'>
                        <img alt='sdg-tech' src={sdgtech}  />
                        <h2>The Role Of Technology In Achieving The SDGs</h2>
                        <p>Technology and innovation are central to the implementation of the 2030 Agenda and the Sustainable Development Goals (SDGs).</p>
                    </div>
                </div>    
                
            </div>

            {/* Section 3 */}
             <div className='bodyText'>
                <h2>Our Thinking</h2>
                <p>We are committed to consistently offering transformational values to organizations.</p>
            </div>
            <div className='experienceFlex'>
                <div className='experienceImage'>
                   <img src='https://softcom.ng/uploads/home/devx.jpg' alt='background'/> 
                   <div className='imageOverlay'></div>
                   {/* <img src={devxlogo} alt='dex-logo' className='devxlogo'/> */}
                </div>
                <div className='experienceCard'>
                    <p>DEVX BLOG</p>
                    <h4>Confidence in Engineering</h4>
                    <p className='lastChild'>Combining business insights, sophisticated technology and multi-industry <br/> inexperience, we plan and support the growth for businesses.</p>
                    <button>Visit Blog <span>&raquo;</span></button> 
                </div>
            </div>

            {/* section 4 */}

            <div className='section-4'>
                <img src={arm} alt='arm'/>
                <img src={boi} alt='boi'/>
                <img src={cocacola} alt='cocacola'/>
                <img src={enyo} alt='enyo'/>
                <img src={gino} alt='gino'/>
                <img src={honywell} alt='honeywell'/>
                <img src={learnafrica} alt='learnafrica'/>
                <img src={microsoft} alt='microsoft'/>
                <img src={mtn} alt='mtn'/>
                <img src={nibss} alt='nibss'/>
                <img src={rockefeller} alt='rockefeller'/>
                <img src={samsung} alt='samsung'/>


            </div>
        </body>
    )
}

export default Body

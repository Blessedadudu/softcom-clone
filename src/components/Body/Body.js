import React from 'react';
import './Body.scss';
import passId from '../../assets/passid.svg';
import koya from '../../assets/koya.svg';
import eyowo from '../../assets/eyowo.svg';
import databeaver from '../../assets/databeaver.svg';





const Body = () => {
    return (
        <body className='body'>
            <div className='bodyText'>
                <h2>Our Focus</h2>
                <p>Following our work over the years, we have identified four key areas that would enable people and businesses thrive in Africa. Namely: Identity, Learning, Payment and Data.</p>
            </div>
            <div className='bodycardGrid'>
                <>
                    <div className='arrow'><span> &#8594; </span></div>
                    <div className='cards1'>
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
                        <h2>Our Focus</h2>
                        <button>View all <span>&raquo;</span></button> 
                    </div>
                    <p>See how Softcom is delivering positive impact to clients and communities in Africa through technology.</p>
                </div>
                
                
            </div>
            <div className='bodycardGrid'>
                <div className='cards1'>
                        <h3>MTN</h3>
                        <h4>Enroll & Verify Anyone</h4>
                        <p>We believe that no society can truly grow her community without first identifying the people that belong to the community. Identity is the bedrock to planning, financial inclusion and targeting.</p>
                </div> 
                <div className='cards1'>
                        <div className='arrow'><span> &#8594; </span></div>
                        <img src={eyowo} alt='pass ID'/>
                        <h3>Identity</h3>
                        <h4>Enroll & Verify Anyone</h4>
                        <p>We believe that no society can truly grow her community without first identifying the people that belong to the community. Identity is the bedrock to planning, financial inclusion and targeting.</p>
                </div>
                <div className='cards1'>
                    <div className='arrow'><span> &#8594; </span></div>
                    <img src={eyowo} alt='pass ID'/>
                    <h3>Identity</h3>
                    <h4>Enroll & Verify Anyone</h4>
                    <p>We believe that no society can truly grow her community without first identifying the people that belong to the community. Identity is the bedrock to planning, financial inclusion and targeting.</p>
                </div> 
                <div className='cards1'>
                    <div className='arrow'><span> &#8594; </span></div>
                    <img src={eyowo} alt='pass ID'/>
                    <h3>Identity</h3>
                    <h4>Enroll & Verify Anyone</h4>
                    <p>We believe that no society can truly grow her community without first identifying the people that belong to the community. Identity is the bedrock to planning, financial inclusion and targeting.</p>
                </div> 
            </div>
            <div className='bodyText'>
                <h2>Our Focus</h2>
                <p>Following our work over the years, we have identified four key areas that would enable people and businesses thrive in Africa. Namely: Identity, Learning, Payment and Data.</p>
            </div>
            <div className='bodycardGrid'>
                <div className='cards1'>Card 1</div>
                <div className='cards2'>Card 1</div>
                <div className='cards3'>Card 1</div>
                <div className='cards4'>Card 1</div>
            </div>
        </body>
    )
}

export default Body

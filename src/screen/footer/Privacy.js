import React, { Component } from 'react';

import {SignInHeader,Footer} from '../../components';

import { Col,Container,Row } from 'reactstrap';
//import catho from '../../asset/img/catho.png';
import catho from './img/catholic.png';


export default class Privacy extends Component {


    render() {
     
        return (
            <div>
                <ul class="cb-slideshow">
                    <li><span>Image 01</span><div><h3> Faith in God</h3></div></li>
                    <li><span>Image 02</span><div><h3>Social with Christ</h3></div></li>
                    <li><span>Image 03</span><div><h3>We Love christ</h3></div></li>
                    <li><span>Image 04</span><div><h3>Uniformity</h3></div></li>
                    <li><span>Image 05</span><div><h3>Love</h3></div></li>
                    <li><span>Image 06</span><div><h3>Sincerity</h3></div></li>
                </ul>
                <SignInHeader />
                <Container >
                <Row>
                    <Col xs="12" md="12" sm="12" lg="12" xl="12"  className="center" style={{marginTop:10, marginBottom:100, backgroundColor:'#000',padding:4,borderRadius:20,opacity:0.9,boxShadow:1,}}>
                        <h1 style={{alignContent:"center",margin:0}}>Iamacatholic Copyright Policy</h1>
                        <img src={catho} alt="catho" style={{alignSelf:'center',float:'inline-start', margin:5}} />
                    <p style={{fontSize:12}}>
                    <b>Copyright Policy</b><br/>
                    At iamacatholic, we expect our users to respect the intellectual property rights of others. All capitalized terms used in the iamacatholic Copyright Policy have the same meaning as defined in the iamacatholic Terms of Service, which incorporates this policy by reference into its terms. Discouragement of Copyright Infringement We ask users of iamacatholic to take care to avoid infringing copyrights of others. If you infringe copyrights of others, Your Content may be removed or suspended in whole or part. It is our policy, in appropriate circumstances and our discretion, to disable and/or terminate accounts of users who repeatedly infringe or are charged repeatedly with infringing the copyrights or other intellectual property rights of others. Recourse for Copyright Owners: Reporting Complaints with a DMCA Notice We also provide a mechanism for copyright owners, or those authorized to act on behalf of an owner of a copyright, to report infringing use of their content on the iamacatholic Platform. In accordance with the Digital Millennium Copyright Act of 1998 (“DMCA”), we will respond expeditiously to claims of copyright infringement that are reported to our Copyright Agent. We provide you the requirements of a proper complaint below. For your convenience, the entire text of the DMCA can be found online at:... In order to provide us a DMCA complaint notice that complies with the DMCA's requirements (“DMCA Notice”), you should: Provide your contact information, including your mailing address, telephone number, and, if available, an email address. Identify the copyrighted work that you claim has been infringed. If multiple copyrighted works are covered in your DMCA Notice, you may provide a representative list of the copyrighted works that you claim have been infringed. Provide information reasonably sufficient for us to locate each instance of allegedly infringing material that you are requesting to be removed or disabled. (For example, by providing each URL where the material may be found on the iamacatholic Platform.) Include the following statements in the body of the DMCA Notice: I declare that I have a good faith belief that the disputed use of the copyrighted material or reference link to such material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use). I declare that the information in this DMCA Notice is accurate and, under penalty of perjury, that I am the owner or authorized to act on behalf of the owner of an exclusive copyright that is allegedly infringed. Include a physical or electronic signature (e.g. typing your printed name) Deliver this DMCA Notice, with all items completed to the Designated Copyright Agent for iamacatholic, at: Attn: Copyright Agent copyright@iamacatholic.com Or Attn: Copyright Agent iamacatholic Inc. For your convenience, we provide you with this web form to complete and send via email if you wish to report copyright infringement. For fastest handling, use our web form. If you use an alternative method, it may delay us in processing your request. If There Is a Copyright Complaint Against You If you receive a notice that a posting or portion of Your Content has been removed or suspended due to a copyright complaint, that means that we removed it at the request of a content owner. If you believe the material was removed in error, you have the option to file a DMCA counter-notification (the proper format for such counter-notice is defined below). When we receive a proper counter-notification, we will forward it to the party who originally complained about the alleged copyright violation. If we do not receive a notice from the original complainant within 10 business days, stating that the original complainant is seeking a court order to prevent further infringement of the content at issue, we will clear the complaint from your account’s record, and, at our discretion, we may replace the content that was removed. How to File a DMCA Counter Notification Please note that there are potentially seriously consequences for fraudulent or bad faith submissions of DMCA notifications or counter notifications. Such consequences may be imposed pursuant to the DMCA under Section 512(f). Before submitting a counter-notification, you should be sure that you are the actual rights holder of the content removed or that you have a good faith belief that content was erroneously removed. It is important to make sure that you understand the repercussions of submitting a false counter notification. A proper counter notification should be sent by replying to the email notice you received, or by sending it to iamacatholic's Copyright Agent as provided above, and it should contain the following: Your name, address, and telephone number The URLs of the content that was removed or disabled by us (you can copy and paste the link provided in the notification email) The following statements: I consent to the jurisdiction of Federal District Court for the judicial district in which my address is located, or if my address is outside the United States, for any judicial district in which iamacatholic Inc. is located. I will accept service of process from the claimant of copyright of infringement. I declare, under penalty of perjury, that I have a good faith belief that the content was removed as a result of a mistake or misidentification of the material to be removed or disabled. Your physical or electronic signature (e.g., typing your full name) 
                    </p>
                    </Col>
                </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

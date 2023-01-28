import React from 'react'
import { Link } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
    return (
        <div className='AboutPage p-3'>
            <h1>About</h1>
            <div className="container infoContainer ">

                <div className="accordion accordion-flush" id="accordionFlushExample">

                    {/* personal info */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h2>Personal Information 🤵</h2>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <h6>Hi my full name is PrinceKumar RajeshBhai Patel</h6>
                                <h6>My residential city is MEHSANA in state GUJARAT Which is in INDIA. </h6>
                                <h6>I am coming from Village called Balol in Mesana.</h6>
                                <h6>Corrently doing bachelor of engineering in field of IT(INFORMATION TECHNOLOGY).</h6>
                                <h6>And that all me</h6>
                            </div>
                        </div>
                    </div>

                    {/* education info */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h2>Education Information 👨‍🎓</h2>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <h6>I have studied my Secondary and Higher Secondary in I.M.J. SAVRVA VIDHYALAY , BALOL.
                                    In 12 <sup>th</sup>  have  choose Science stream  as my carrier . The best decision i have made is by choosing main field as MATHS in  science . My most of the friends choose biology and they all say me to come with them biology is easy to learn and get more score in 12. But i not follow them and choose maths as i like most. We are only 7 students in maths.😅 </h6>
                                <h6>Pass out from gujarat bord here is some info about</h6>


                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Std</th>
                                            <th scope="col">Percentage</th>
                                            <th scope="col">Percentile Rank</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>10 <sup>th</sup></td>
                                            <td>72.16 %</td>
                                            <td>88.54</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>12 <sup>th</sup> science</td>
                                            <td>76.83 %</td>
                                            <td>96.85</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h6>Ya I know you are thinking that hou this boy is who get grater marks in 12<sup>th</sup> than 10<sup>th</sup> But that's true . And for add in you more wonder in 10 <sup>th</sup> i have tuition and in 12 <sup>th</sup> i don't have any tuition. My friends who say me to choose biology for more marks in  12 i have score more then them all actually i get 1 <sup>st</sup> rank in my school.😎 </h6>
                                <h6>That's my story up to 12 <sup>th</sup>.Than begin collage life.</h6>
                                <h6>I always like to work with new technology sometimes it is wonder for me how this technology woks so i select engineering as carrier. </h6>
                                <h6>Due to higher science Percentile Rank i get 2353 ACPC(Admission Committee for Professional Courses).And get addmision in G.E.C. GANDHINAGAR in fiels BE in branch IT💻.In collage life i get lots of Information about technology that you can find in <button><Link to="/Skill&Tools" className='link' >Skill & Tools</Link></button> Section</h6>
                                <h6>Here is my SPI and CPI in BE</h6>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Semister</th>
                                            <th scope="col">SPI</th>
                                            <th scope="col">CPI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>1<sup>st</sup></td>
                                            <td>9.53</td>
                                            <td>9.53</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>2<sup>nd</sup></td>
                                            <td>9.14</td>
                                            <td>9.31</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>3<sup>rd</sup></td>
                                            <td>8.39</td>
                                            <td>8.97</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>4<sup>th</sup></td>
                                            <td>8.61</td>
                                            <td>8.87s</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* hobbys */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h2>Hobbys 👨‍🎨</h2>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <h6>For sport i like all sports from local to national.I just like to play who won who looses dose't metter.</h6>
                                <ul className="list-group">
                                    <li className="list-group-item">Hand boll</li>
                                    <li className="list-group-item">Playing chess</li>
                                    <li className="list-group-item">solving maths problems</li>
                                    <li className="list-group-item">know more about new technology</li>
                                    <li className="list-group-item">Motivat people</li>
                                    <li className="list-group-item">Devlop Website</li>
                                    <li className="list-group-item">Devlop App</li>
                                    <li className="list-group-item">Devlop Game </li>
                                </ul>
                                <h6>You can find my some projects in <Link to="/Projects">Project </Link> Section</h6>
                            </div>
                        </div>

                    </div>

                    {/* Certifications */}

                    <div className="AboutHeading ps-3 pt-3">
                        <h2 >Certifications 🥇</h2>

                        <div className="certificatesContainer">

                            <div className="card certificateBox" style={{ "width": "18rem" }}>
                                <img src="logo512.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">See in details</a>
                                </div>
                            </div>
                            <div className="card certificateBox" style={{ "width": "18rem" }}>
                                <img src="logo512.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">See in details</a>
                                </div>
                            </div>
                            <div className="card certificateBox" style={{ "width": "18rem" }}>
                                <img src="logo512.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">See in details</a>
                                </div>
                            </div>
                            <div className="card certificateBox" style={{ "width": "18rem" }}>
                                <img src="logo512.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">See in details</a>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>


            </div>
        </div>
    )
}

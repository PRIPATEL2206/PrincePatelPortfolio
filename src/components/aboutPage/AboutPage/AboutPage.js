import React from 'react'
import { Link } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage({themeIndex}) {
    const aboutTheme=[
        {
            bgcolor: "bg-black",
            textColor:"text-white"
        },
        {
            bgcolor: "",
            textColor:""
        },

    ]
    const certificate = ["photos/certificate/python_linkein.png",
        "photos/certificate/python5secrets.png",
        "photos/certificate/python_marvadi.png",
        "photos/certificate/ibm_data_science.png",
        "photos/certificate/gameDevelopment.png",
        "photos/certificate/crowdsourse.png",
        "photos/certificate/codeSprit1.png",
        "photos/certificate/google_30days.png",
        "photos/certificate/Ide_cp.png",
        "photos/certificate/online_programing.png",
        "photos/certificate/sk.png"]
    return (
        <div className={`AboutPage p-3 ${aboutTheme[themeIndex].bgcolor} ${aboutTheme[themeIndex].textColor} `}>
            <h1>About</h1>
            <div className="container infoContainer ">

                <div className="accordion accordion-flush " id="accordionFlushExample">

                    {/* personal info */}
                    <div className={`accordion-item ${aboutTheme[themeIndex].bgcolor} ${aboutTheme[themeIndex].textColor}`} >
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h2>Personal Information 🤵</h2>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <h6>Hi my full name is PrinceKumar RajeshBhai Patel.</h6>
                                <h6>My residential city is MEHSANA in state GUJARAT Which is in INDIA. </h6>
                                <h6>I am coming from Village called Balol in Mesana.</h6>
                                <h6>Currently pursuing my Bachelors of Engineering in IT(Infomation Technology).</h6>
                                <h6>And that's all about me.</h6>
                            </div>
                        </div>
                    </div>

                    {/* education info */}
                    <div className={`accordion-item ${aboutTheme[themeIndex].bgcolor} ${aboutTheme[themeIndex].textColor}`} >
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h2>Educational Information 👨‍🎓</h2>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <h6>I completed my secondary and higher secondary education at I.M.J. Savrva Vidhyalay in Balol.
                                    During my final year of high school, I had to decide on a field of study, and I chose science with a focus on mathematics. It was the best decision I ever made. Most of my friends chose biology and tried to persuade me to do the same, claiming that it was easier to learn and score better marks in. However, I stuck to my passion for mathematics and pursued it instead. In the end, there were only seven of us who chose mathematics, but I am glad I followed my heart. </h6>
                                <h6>Pass out from gujarat bord here is some info about</h6>


                                <table className={`table ${aboutTheme[themeIndex].textColor}`}>
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
                                <h6>Ya I know you are thinking that how this boy who get more marks in 12<sup>th</sup> than 10<sup>th</sup>, but that's true. And to add to this to make you more wonder in 10th i had tuition and in 12<sup>th</sup> i don't had any tuition. My friends who told me to choose biology for more marks in 12th I scored more than them all actually I got 1 <sup>st</sup> rank in my school.😎</h6>
                                <h6>That's my story up to 12<sup>th</sup>,then begins the college life.</h6>
                                <h6>I always like to work with new technology sometimes it is wonder for me how this technology works so I select engineering as career. </h6>
                                <h6>Due to higher science Percentile Rank I got 2353 rank in  ACPC(Admission Committee for Professional Courses).And got admission in G.E.C. GANDHINAGAR for BE in IT💻.In college life i get lots of Information about technology that you can find in <button><Link to="/Skill&Tools" className='link' >Skill & Tools</Link></button> Section</h6>
                                <h6>Here is my SPI and CPI in BE</h6>
                                <table className={`table ${aboutTheme[themeIndex].textColor}`}>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Semester</th>
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
                    <div className={`accordion-item ${aboutTheme[themeIndex].bgcolor} ${aboutTheme[themeIndex].textColor}`} >
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h2>Honbies 👨‍🎨</h2>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <h6>For sport i like all sports from local to national.I just like to play who won who looses dose't metter.</h6>
                                <ul className="list-group">
                                    <li className={`list-group-item ${aboutTheme[themeIndex].bgcolor} ${aboutTheme[themeIndex].textColor} `}>Hand boll</li>
                                    <li className={`list-group-item ${aboutTheme[themeIndex].bgcolor} ${aboutTheme[themeIndex].textColor} `}>Playing chess</li>
                                    <li className={`list-group-item ${aboutTheme[themeIndex].bgcolor} ${aboutTheme[themeIndex].textColor} `}>solving maths problems</li>
                                    <li className={`list-group-item ${aboutTheme[themeIndex].bgcolor} ${aboutTheme[themeIndex].textColor} `}>know more about new technology</li>
                                    <li className={`list-group-item ${aboutTheme[themeIndex].bgcolor} ${aboutTheme[themeIndex].textColor} `}>Motivat people</li>
                                    <li className={`list-group-item ${aboutTheme[themeIndex].bgcolor} ${aboutTheme[themeIndex].textColor} `}>Devlop Website</li>
                                    <li className={`list-group-item ${aboutTheme[themeIndex].bgcolor} ${aboutTheme[themeIndex].textColor} `}>Devlop App</li>
                                    <li className={`list-group-item ${aboutTheme[themeIndex].bgcolor} ${aboutTheme[themeIndex].textColor} `}>Devlop Game </li>
                                </ul>
                                <h6>You can find my some projects in <Link to="/Projects">Project </Link> Section</h6>
                            </div>
                        </div>

                    </div>

                    {/* Certifications */}

                    <div className="AboutHeading ps-3 pt-3">
                        <h2 >Certifications 🥇</h2>

                        <div className="certificatesContainer">

                            {
                            certificate.map((element,index) =>{
                                return (
                                    <div className="card certificateBox" key={index} style={{ "width": "18rem" }}>
                                        <img src={element} className="card-img-top" alt="" />
                                    </div>
                                );
                            })
                            }
                        </div>


                    </div>


                </div>


            </div>
        </div>
    )
}

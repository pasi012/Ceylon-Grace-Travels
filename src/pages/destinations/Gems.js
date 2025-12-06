import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Mirissa.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function Gems() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");

    const [g3, setG3] = useState("");
    const [g4, setG4] = useState("");
    
    const [g6, setG6] = useState("");
    const [g7, setG7] = useState("");

    const [act1, setAct1] = useState("");
    const [act2, setAct2] = useState("");
    const [act3, setAct3] = useState("");
    const [act4, setAct4] = useState("");
    const [act5, setAct5] = useState("");
    const [act6, setAct6] = useState("");
    const [act7, setAct7] = useState("");
    const [act8, setAct8] = useState("");
    const [act9, setAct9] = useState("");

    const [imgHero, setImgHero] = useState("");

    useEffect(() => {
        getDownloadURL(ref(storage, "Gem Mining.jpg")).then(setImg1);
        getDownloadURL(ref(storage, "Blue Sapphire.jpg")).then(setImg2);

        getDownloadURL(ref(storage, "Gemstone Collection.jpg")).then(setG3);
        getDownloadURL(ref(storage, "Gem Cutting and Polishing.jpg")).then(setG4);

        getDownloadURL(ref(storage, "Gemstone Gallery Image 1.jpg")).then(setG6);
        getDownloadURL(ref(storage, "Gemstone Gallery Image 2.jpg")).then(setG7);

        // Activity icons
        getDownloadURL(ref(storage, "Ratnapura Gem Mines.jpg")).then(setAct1);
        getDownloadURL(ref(storage, "Traditional Soil Washing for Gems.jpg")).then(setAct2);
        getDownloadURL(ref(storage, "Gem Mining Tools in Sri Lanka.jpg")).then(setAct3);

        getDownloadURL(ref(storage, "Gem Cutting Studio in Sri Lanka.jpg")).then(setAct4);
        getDownloadURL(ref(storage, "Gem Polishing Techniques.jpg")).then(setAct5);
        getDownloadURL(ref(storage, "Fine Jewellery Showroom.jpg")).then(setAct6);

        getDownloadURL(ref(storage, "Gem Museum.jpg")).then(setAct7);
        getDownloadURL(ref(storage, "Gem Market and Trading.jpg")).then(setAct8);
        getDownloadURL(ref(storage, "Gem Testing Laboratory.jpg")).then(setAct9);

        getDownloadURL(ref(storage, "Gems-hero.jpg")).then(setImgHero);
    }, []);

    return (
        <div className="destination-container">
            {/* HERO SECTION */}
            <section
                className="mirissa-hero"
                style={{ backgroundImage: `url(${imgHero})` }}
                data-aos="fade-down"
            >
                <div className="overlay">
                    <h1>Gems of Sri Lanka</h1>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="mirissa-container">

                {/* LEFT CONTENT */}
                <div className="mirissa-left" data-aos="fade-right">

                    <h2>Gems of Sri Lanka</h2>

                    <p>
                        Sri Lanka, often called the “Gem Island”, is one of the world’s finest sources of rare and precious gemstones.
                        For over 2,500 years, the island has dazzled traders, explorers, and royals with its vibrant sapphires, rubies,
                        moonstones and an array of semi-precious stones found in its rich mineral soils.
                    </p>

                    <p>
                        Our exclusive Gems of Sri Lanka experience takes you deep into the heart of Sri Lanka’s gem culture—exploring
                        mines, workshops, gem museums and authentic gem trading centres. Guided by experts with years of industry
                        knowledge, you’ll witness how these treasures are mined, cut, polished, and transformed into world-class jewels.
                        Whether you're a gem lover, collector, or simply curious, this tour opens the door to a glittering world
                        filled with colour, craftsmanship and heritage.
                    </p>

                    <div className="mirissa-top-gallery">
                        <img src={img1} alt="Gem Mining" />
                        <img src={img2} alt="Blue Sapphire" />
                    </div>

                    <p>
                        Sri Lanka is globally renowned for producing some of the rarest and most valuable gems—especially Ceylon Blue
                        Sapphires. Cities like Ratnapura, known as the “City of Gems”, have been supplying precious stones to the world
                        for centuries. The island’s gem industry continues to thrive, powered by traditional mining methods and expert
                        craftsmanship passed down through generations.
                    </p>

                    <div className="mirissa-top-gallery">
                        <img src={g3} alt="Gemstone Collection" />
                        <img src={g4} alt="Gem Cutting and Polishing" />
                        
                    </div>

                    <p>
                        From the depths of gem mines to the brilliance of cutting studios, Sri Lanka offers a complete journey through
                        its gemstone heritage. You’ll get the opportunity to learn about natural gem formation, modern gem testing
                        technology, gemstone certification, and experience the authentic gem-trading culture that thrives across the island.
                    </p>

                    <h3>Ceylon Blue Sapphire</h3>

                    <p>
                        Sri Lanka’s most prized gemstone. Admired for its vivid cornflower-blue colour, clarity and brilliance,
                        the Ceylon Sapphire has adorned kings, queens, and celebrities for centuries.
                    </p>

                    <h3>Star Sapphire</h3>

                    <p>
                        A rare stone displaying a mystical six-ray star effect known as “asterism”. Sri Lanka produces some of the
                        finest Star Sapphires in the world.
                    </p>

                    <h3>Moonstone</h3>

                    <p>
                        Famous for its soft glow and milky sheen, Sri Lankan moonstones are cherished for their calming, spiritual
                        appearance. The blue moonstones of Meetiyagoda are especially unique.
                    </p>

                    <h3>Ruby & Pink Sapphire</h3>

                    <p>
                        Sri Lanka’s rubies and pink sapphires are celebrated for their rich colour tones. These gems are exceptionally
                        popular for fine jewellery and investment-grade collections.
                    </p>

                    <h3>Alexandrite & Chrysoberyl</h3>

                    <p>
                        Known for their colour-changing effect, these stones are rare, valuable, and admired by gem collectors worldwide.
                    </p>

                    <p>
                        Sri Lanka is one of the few places on Earth where such a wide variety of gemstones are naturally found within
                        a small geographical area. This diversity, paired with expert craftsmanship, makes Sri Lanka a global hub
                        for gemstone lovers.
                    </p>

                    <p>
                        Include the Gems of Sri Lanka experience in your itinerary and explore a radiant world of history, luxury,
                        and natural beauty—an unforgettable journey into the island’s sparkling treasures.
                    </p>

                    {/* ACTIVITIES SECTION */}
                    <div className="mirissa-activities" data-aos="fade-up">

                        <details className="activity-box" open>
                            <summary>• Gem Mining Experience</summary>

                            <p>
                                Discover the traditional gem-mining process used for centuries in Sri Lanka. Visit gem pits in Ratnapura,
                                meet miners, learn about soil washing, and witness how raw stones are unearthed. This authentic experience
                                gives you a rare insight into the origins of the island’s precious gems.
                            </p>

                            <div className="activity-gallery">
                                <div className="activity-card">
                                    <img src={act1} alt="Ratnapura Gem Mines" />
                                    <p>Ratnapura Gem Mines</p>
                                </div>

                                <div className="activity-card">
                                    <img src={act2} alt="Traditional Soil Washing for Gems" />
                                    <p>Traditional Soil Washing for Gems</p>
                                </div>

                                <div className="activity-card">
                                    <img src={act3} alt="Gem Mining Tools" />
                                    <p>Mining Tools</p>
                                </div>
                            </div>
                        </details>

                        <details className="activity-box">
                            <summary>• Cutting, Polishing & Craftsmanship</summary>

                            <p>
                                Visit gem-cutting studios where talented artisans transform raw stones into perfectly polished jewels.
                                Learn about different cuts, polishing techniques, gemstone grading, and the importance of precision
                                in bringing out a gem’s true brilliance.
                            </p>

                            <div className="activity-gallery">
                                <div className="activity-card">
                                    <img src={act4} alt="Gem Cutting Studio" />
                                    <p>Gem Cutting Studio</p>
                                </div>

                                <div className="activity-card">
                                    <img src={act5} alt="Gem Polishing Techniques" />
                                    <p>Gem Polishing Techniques</p>
                                </div>

                                <div className="activity-card">
                                    <img src={act6} alt="Fine Jewellery Showroom" />
                                    <p>Fine Jewellery Showroom</p>
                                </div>
                            </div>
                        </details>

                        <details className="activity-box">
                            <summary>• Gem Museums & Trading Experience</summary>

                            <p>
                                Explore gem museums that showcase rare Sri Lankan gemstones, historical artefacts, and educational
                                displays on gem formation. Then step into gem trading centres where local experts help you understand
                                gemstone value, certification, and how to identify genuine stones.
                            </p>

                            <div className="activity-gallery">
                                <div className="activity-card">
                                    <img src={act7} alt="Gem Museum" />
                                    <p>Gem Museums</p>
                                </div>

                                <div className="activity-card">
                                    <img src={act8} alt="Gem Market and Trading" />
                                    <p>Gem Market and Trading</p>
                                </div>

                                <div className="activity-card">
                                    <img src={act9} alt="Gem Testing Laboratory" />
                                    <p>Gem Testing Laboratory</p>
                                </div>
                            </div>

                        </details>

                    </div>

                    {/* GALLERY SECTION */}
                    <div className="mirissa-parrot-rock" data-aos="fade-up">

                        <div className="parrot-gallery">
                            <img src={g6} alt="Gemstone Gallery Image 1" />
                            <img src={g7} alt="Gemstone Gallery Image 2" />
                        </div>

                    </div>

                </div>

                {/* RIGHT INQUIRY FORM */}
                <div className="mirissa-form" data-aos="fade-left">
                    <h3>Make an Inquiry</h3>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                            const name = e.target.name.value;
                            const email = e.target.email.value;
                            const country = e.target.country.value;
                            const code = e.target.code.value;
                            const phone = e.target.phone.value;
                            const arrival = e.target.arrival.value;
                            const departure = e.target.departure.value;
                            const interest = e.target.interest.value;
                            const adults = e.target.adults.value;
                            const kids = e.target.kids.value;
                            const message = e.target.message.value;

                            const fullMessage = `
              📌 NEW TOUR INQUIRY

              👤 Name: ${name}
              📧 Email: ${email}
              🌍 Country: ${country}
              📞 Phone: ${code} ${phone}
              📅 Arrival: ${arrival}
              📅 Departure: ${departure}
              🎯 Interest: ${interest}
              👨‍👩‍👧 Adults: ${adults}
              🧒 Kids: ${kids}

              💬 Message: ${message}
                    `;

                            // ✅ SEND WHATSAPP
                            const whatsappNumber = "94771087217"; // Your number
                            const whatsappURL =
                                "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(fullMessage);

                            window.open(whatsappURL, "_blank");

                            // ✅ SEND EMAIL
                            const mailto =
                                "mailto:ceylongracetravels@gmail.com" +
                                "?subject=" + encodeURIComponent("New Tour Inquiry") +
                                "&body=" + encodeURIComponent(fullMessage);

                            window.location.href = mailto;

                            alert("✅ Your Inquiry Has Been Sent!");
                        }}
                    >
                        <input name="name" type="text" placeholder="Name *" required />
                        <input name="email" type="email" placeholder="Email Address *" required />

                        <div className="phone-row">
                            <input name="code" className="code" type="text" placeholder="Code" />
                            <input name="phone" className="phone" type="text" placeholder="Phone Number *" required />
                        </div>

                        <select name="country" required>
                            <option>Choose Your Country *</option>
                            <option>Afghanistan</option>
                            <option>Albania</option>
                            <option>Algeria</option>
                            <option>Andorra</option>
                            <option>Angola</option>
                            <option>Antigua and Barbuda</option>
                            <option>Argentina</option>
                            <option>Armenia</option>
                            <option>Australia</option>
                            <option>Austria</option>
                            <option>Azerbaijan</option>
                            <option>Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                            <option>Belarus</option>
                            <option>Belgium</option>
                            <option>Belize</option>
                            <option>Benin</option>
                            <option>Bhutan</option>
                            <option>Bolivia</option>
                            <option>Bosnia and Herzegovina</option>
                            <option>Botswana</option>
                            <option>Brazil</option>
                            <option>Brunei</option>
                            <option>Bulgaria</option>
                            <option>Burkina Faso</option>
                            <option>Burundi</option>
                            <option>Cabo Verde</option>
                            <option>Cambodia</option>
                            <option>Cameroon</option>
                            <option>Canada</option>
                            <option>Central African Republic</option>
                            <option>Chad</option>
                            <option>Chile</option>
                            <option>China</option>
                            <option>Colombia</option>
                            <option>Comoros</option>
                            <option>Congo, Democratic Republic of the</option>
                            <option>Congo, Republic of the</option>
                            <option>Costa Rica</option>
                            <option>Côte d’Ivoire</option>
                            <option>Croatia</option>
                            <option>Cuba</option>
                            <option>Cyprus</option>
                            <option>Czech Republic</option>
                            <option>Denmark</option>
                            <option>Djibouti</option>
                            <option>Dominica</option>
                            <option>Dominican Republic</option>
                            <option>Ecuador</option>
                            <option>Egypt</option>
                            <option>El Salvador</option>
                            <option>Equatorial Guinea</option>
                            <option>Eritrea</option>
                            <option>Estonia</option>
                            <option>Eswatini</option>
                            <option>Ethiopia</option>
                            <option>Fiji</option>
                            <option>Finland</option>
                            <option>France</option>
                            <option>Gabon</option>
                            <option>Gambia</option>
                            <option>Georgia</option>
                            <option>Germany</option>
                            <option>Ghana</option>
                            <option>Greece</option>
                            <option>Grenada</option>
                            <option>Guatemala</option>
                            <option>Guinea</option>
                            <option>Guinea-Bissau</option>
                            <option>Guyana</option>
                            <option>Haiti</option>
                            <option>Honduras</option>
                            <option>Hungary</option>
                            <option>Iceland</option>
                            <option>India</option>
                            <option>Indonesia</option>
                            <option>Iran</option>
                            <option>Iraq</option>
                            <option>Ireland</option>
                            <option>Israel</option>
                            <option>Italy</option>
                            <option>Jamaica</option>
                            <option>Japan</option>
                            <option>Jordan</option>
                            <option>Kazakhstan</option>
                            <option>Kenya</option>
                            <option>Kiribati</option>
                            <option>Korea, North</option>
                            <option>Korea, South</option>
                            <option>Kuwait</option>
                            <option>Kyrgyzstan</option>
                            <option>Laos</option>
                            <option>Latvia</option>
                            <option>Lebanon</option>
                            <option>Lesotho</option>
                            <option>Liberia</option>
                            <option>Libya</option>
                            <option>Liechtenstein</option>
                            <option>Lithuania</option>
                            <option>Luxembourg</option>
                            <option>Madagascar</option>
                            <option>Malawi</option>
                            <option>Malaysia</option>
                            <option>Maldives</option>
                            <option>Mali</option>
                            <option>Malta</option>
                            <option>Marshall Islands</option>
                            <option>Mauritania</option>
                            <option>Mauritius</option>
                            <option>Mexico</option>
                            <option>Micronesia</option>
                            <option>Moldova</option>
                            <option>Monaco</option>
                            <option>Mongolia</option>
                            <option>Montenegro</option>
                            <option>Morocco</option>
                            <option>Mozambique</option>
                            <option>Myanmar (Burma)</option>
                            <option>Namibia</option>
                            <option>Nauru</option>
                            <option>Nepal</option>
                            <option>Netherlands</option>
                            <option>New Zealand</option>
                            <option>Nicaragua</option>
                            <option>Niger</option>
                            <option>Nigeria</option>
                            <option>North Macedonia</option>
                            <option>Norway</option>
                            <option>Oman</option>
                            <option>Pakistan</option>
                            <option>Palau</option>
                            <option>Panama</option>
                            <option>Papua New Guinea</option>
                            <option>Paraguay</option>
                            <option>Peru</option>
                            <option>Philippines</option>
                            <option>Poland</option>
                            <option>Portugal</option>
                            <option>Qatar</option>
                            <option>Romania</option>
                            <option>Russia</option>
                            <option>Rwanda</option>
                            <option>Saint Kitts and Nevis</option>
                            <option>Saint Lucia</option>
                            <option>Saint Vincent and the Grenadines</option>
                            <option>Samoa</option>
                            <option>San Marino</option>
                            <option>Sao Tome and Principe</option>
                            <option>Saudi Arabia</option>
                            <option>Senegal</option>
                            <option>Serbia</option>
                            <option>Seychelles</option>
                            <option>Sierra Leone</option>
                            <option>Singapore</option>
                            <option>Slovakia</option>
                            <option>Slovenia</option>
                            <option>Solomon Islands</option>
                            <option>Somalia</option>
                            <option>South Africa</option>
                            <option>South Sudan</option>
                            <option>Spain</option>
                            <option>Sri Lanka</option>
                            <option>Sudan</option>
                            <option>Suriname</option>
                            <option>Sweden</option>
                            <option>Switzerland</option>
                            <option>Syria</option>
                            <option>Taiwan</option>
                            <option>Tajikistan</option>
                            <option>Tanzania</option>
                            <option>Thailand</option>
                            <option>Timor-Leste</option>
                            <option>Togo</option>
                            <option>Tonga</option>
                            <option>Trinidad and Tobago</option>
                            <option>Tunisia</option>
                            <option>Turkey</option>
                            <option>Turkmenistan</option>
                            <option>Tuvalu</option>
                            <option>Uganda</option>
                            <option>Ukraine</option>
                            <option>United Arab Emirates</option>
                            <option>United Kingdom</option>
                            <option>United States</option>
                            <option>Uruguay</option>
                            <option>Uzbekistan</option>
                            <option>Vanuatu</option>
                            <option>Vatican City</option>
                            <option>Venezuela</option>
                            <option>Vietnam</option>
                            <option>Yemen</option>
                            <option>Zambia</option>
                            <option>Zimbabwe</option>
                        </select>

                        <label>Arrival Date</label>
                        <input name="arrival" type="date" />

                        <label>Departure Date</label>
                        <input name="departure" type="date" />

                        <select name="interest" required>
                            <option>Choose Your Interest *</option>
                            <option>Eco</option>
                            <option>Beach</option>
                            <option>Cultural</option>
                            <option>Adventure</option>
                            <option>Wild Life</option>
                            <option>Relax and Wellness</option>
                            <option>Honeymoon</option>
                            <option>Ramayana Trail</option>
                            <option>All in one Trails</option>
                        </select>

                        <input name="adults" type="number" placeholder="No. of Adults *" required />
                        <input name="kids" type="number" placeholder="No. of Kids" />

                        <textarea name="message" placeholder="Enter your message here"></textarea>

                        <button type="submit">SUBMIT</button>
                    </form>
                </div>

            </section>

            {/* CTA Section */}
            <section className="cta-section" data-aos="fade-up">
                <div className="cta-box">
                    <div className="cta-left">
                        <img src={require("../../assets/hile.png")} className="cta-icon" alt="icon" />
                        <div className="cta-text">
                            <h2>Ready To Adventure And Enjoy Natural</h2>
                            <p>Reach Ceylon Grace Travels For A Secure, Luxurious, And Unforgettable Adventure!</p>
                        </div>
                    </div>

                    <img src={require("../../assets/plan.png")} className="cta-plane" alt="plane" />

                    <button className="cta-btn">LET’S GET STARTED</button>
                </div>
            </section>
        </div>
    );
}

export default Gems;

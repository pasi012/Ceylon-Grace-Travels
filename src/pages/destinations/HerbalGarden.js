import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Mirissa.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function HerbalGarden() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");

    const [g3, setG3] = useState("");
    const [g4, setG4] = useState("");
    const [g5, setG5] = useState("");
    
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
        getDownloadURL(ref(storage, "Herbal Plants.jpg")).then(setImg1);
        getDownloadURL(ref(storage, "Ayurveda Garden.jpg")).then(setImg2);

        getDownloadURL(ref(storage, "Herbal Oils.jpg")).then(setG3);
        getDownloadURL(ref(storage, "Medicinal Plants.jpg")).then(setG4);
        getDownloadURL(ref(storage, "Ayurveda Preparation.jpg")).then(setG5);

        getDownloadURL(ref(storage, "Herbal Demonstrations.jpg")).then(setAct1);
        getDownloadURL(ref(storage, "Medicinal Oils.jpg")).then(setAct2);
        getDownloadURL(ref(storage, "Ayurveda Preparation.jpg")).then(setAct3);
        getDownloadURL(ref(storage, "Cinnamon Oil.jpg")).then(setAct4);
        getDownloadURL(ref(storage, "Herbal Cosmetics.png")).then(setAct5);
        getDownloadURL(ref(storage, "Natural Remedies.jpg")).then(setAct6);
        getDownloadURL(ref(storage, "Ayurveda Massage.jpg")).then(setAct7);
        getDownloadURL(ref(storage, "Steam Therapy.jpg")).then(setAct8);
        getDownloadURL(ref(storage, "Garden Walk.jpg")).then(setAct9);
        
        getDownloadURL(ref(storage, "Herbal-Garden-hero.jpg")).then(setImgHero);

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
                    <h1>Herbal Garden</h1>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="mirissa-container">
                {/* LEFT CONTENT */}
                <div className="mirissa-left" data-aos="fade-right">

                    <h2>Herbal Garden</h2>

                    <p>
                        Sri Lanka, known for its centuries-old Ayurvedic traditions, is home to some of the
                        most authentic and educational herbal gardens in South Asia. These gardens showcase
                        the island’s deep-rooted connection to natural healing, organic wellness practices,
                        and indigenous medicinal plants. A visit to a Sri Lankan herbal garden offers a
                        refreshing escape into nature while giving you an understanding of how Ayurveda shapes
                        the health and lifestyle of the local people.
                    </p>

                    <p>
                        Our Herbal Garden experience is specially designed to guide you through a lush green
                        sanctuary filled with aromatic herbs, medicinal plants, and rare species used in
                        traditional healing. You will be accompanied by knowledgeable herbal specialists who
                        will explain the uses, benefits, and history of each plant. For guests who enjoy
                        natural wellness, organic remedies, or cultural experiences, this visit offers a
                        rewarding blend of learning and relaxation.
                    </p>

                    <div className="mirissa-top-gallery">
                        <img src={img1} alt="Herbal Plants" />
                        <img src={img2} alt="Ayurveda Garden" />
                    </div>

                    <p>
                        Sri Lankan herbal gardens are often home to more than 200 varieties of medicinal
                        plants—including aloe vera, cinnamon, neem, gotukola, turmeric, sandalwood, and
                        more. These plants are used for Ayurveda therapies such as detox treatments, herbal
                        oils, balms, tonics, and natural cosmetics. Visitors can witness how these herbs are
                        processed, distilled, and transformed into healing medicines passed down for
                        generations.
                    </p>

                    <div className="mirissa-top-gallery">
                        <img src={g3} alt="Herbal Oils" />
                        <img src={g4} alt="Medicinal Plants" />
                        
                    </div>

                    <p>
                        During your visit, you will also learn about ancient treatment methods used in Sri
                        Lanka for thousands of years. Many herbal gardens offer free Ayurvedic consultations,
                        allowing you to understand how natural remedies help improve immunity, digestion,
                        relaxation, and overall well-being. For those curious about natural healing and
                        eco-friendly living, this tour offers valuable insights into the world of Ayurveda.
                    </p>

                    <h3>Aloe Vera</h3>
                    <p>
                        Known for its cooling and healing properties, aloe vera is widely used in Sri Lanka
                        for skin care, sunburn relief, and internal purification. Herbal specialists explain
                        how the fresh gel is extracted and used in natural medicines.
                    </p>

                    <h3>Cinnamon</h3>
                    <p>
                        Sri Lanka is famous worldwide for producing the finest Ceylon cinnamon. Visitors can
                        see how cinnamon bark is peeled, dried, and transformed into oils, teas, and
                        medicinal powders used for digestion and diabetes control.
                    </p>

                    <h3>Gotukola</h3>
                    <p>
                        A powerful herb known for improving memory and brain function, Gotukola is a popular
                        ingredient in Sri Lankan herbal cuisine and Ayurvedic tonics.
                    </p>

                    <h3>Neem</h3>
                    <p>
                        A natural antibacterial plant, neem is used for skin treatments, hair care, and
                        detoxifying herbal drinks. You will learn how neem leaves and oil are processed to
                        create natural remedies.
                    </p>

                    <p>
                        Visiting a Sri Lankan herbal garden is more than a tour—it's a complete wellness
                        experience that connects you with nature, traditional healing, and the ancient wisdom
                        of Ayurveda. This journey is perfect for travelers who value wellness, relaxation,
                        and cultural discovery.
                    </p>

                    <p>
                        Add this Herbal Garden experience to your itinerary to discover the natural healing
                        secrets of Sri Lanka and enjoy a peaceful, educational escape into the world of
                        Ayurveda.
                    </p>

                    {/* ACTIVITIES SECTION */}
                    <div className="mirissa-activities" data-aos="fade-up">

                        <details className="activity-box" open>
                            <summary>• Ayurvedic Learning Experience</summary>
                            <p>
                                Explore over 200 varieties of herbal plants and learn how they are used in
                                Ayurveda for healing and wellness. Experts will guide you through plant
                                demonstrations, oil extractions, and traditional medicinal preparations.
                            </p>

                            <div className="activity-gallery">
                                <div className="activity-card">
                                    <img src={act1} alt="Herbal Demonstrations" />
                                    <p>Herbal Demonstrations</p>
                                </div>

                                <div className="activity-card">
                                    <img src={act2} alt="Medicinal Oils" />
                                    <p>Medicinal Oils</p>
                                </div>

                                <div className="activity-card">
                                    <img src={act3} alt="Ayurveda Preparation" />
                                    <p>Ayurveda Preparation</p>
                                </div>
                            </div>
                        </details>

                        <details className="activity-box">
                            <summary>• Natural Beauty & Wellness Products</summary>
                            <p>
                                Discover organic cosmetics, herbal balms, oils, and natural supplements made from
                                pure Sri Lankan herbs. Many products are handcrafted and passed down through
                                generations of Ayurvedic practitioners.
                            </p>

                            <div className="activity-gallery">
                                <div className="activity-card">
                                    <img src={act4} alt="Cinnamon Oil" />
                                    <p>Cinnamon Oil</p>
                                </div>

                                <div className="activity-card">
                                    <img src={act5} alt="Herbal Cosmetics" />
                                    <p>Herbal Cosmetics</p>
                                </div>

                                <div className="activity-card">
                                    <img src={act6} alt="Natural Remedies" />
                                    <p>Natural Remedies</p>
                                </div>
                            </div>
                        </details>

                        <details className="activity-box">
                            <summary>• Wellness & Relaxation</summary>
                            <p>
                                Enjoy a peaceful walk through the garden and experience natural tranquility.
                                Some herbal gardens offer Ayurvedic massages, steam baths, and wellness
                                treatments that help calm the mind and refresh the body.
                            </p>

                            <div className="activity-gallery">
                                <div className="activity-card">
                                    <img src={act7} alt="Ayurveda Massage" />
                                    <p>Ayurveda Massage</p>
                                </div>

                                <div className="activity-card">
                                    <img src={act8} alt="Steam Therapy" />
                                    <p>Herbal Steam Therapy</p>
                                </div>

                                <div className="activity-card">
                                    <img src={act9} alt="Garden Walk" />
                                    <p>Relaxing Garden Walk</p>
                                </div>
                            </div>
                        </details>

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

export default HerbalGarden;

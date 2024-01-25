// styling login btn
let nav_links = document.getElementsByClassName("nav-links");
let bg_style = document.getElementsByClassName("styler-bg");

for ( let i = 0; i < nav_links.length; i++ ) {

    nav_links[i].addEventListener( "mouseover", function() {
        console.log("abc")
        add_bg(bg_style[i])
    });
    
    nav_links[i].addEventListener( "mouseout", function() {
        remove_bg(bg_style[i])
    });

}

function add_bg(i){
    for ( let c = 0; c < i.classList.length; c++ ){
        if(i.classList[c] === "bg-nav-out"){
            i.classList.remove("bg-nav-out")
        }
        else{
            i.classList.add("bg-nav")
        }
    }

    
}

function remove_bg(i){
    i.classList.remove("bg-nav")
    i.classList.add("bg-nav-out")
    console.log(i.classList)
}

// about us card func 

if (window.location.href.split("/")[3] === "about.html") {
    


    founders_dictionary = {
        "Pastor Ituah Ighodaro":{
            "image":"img/about1.png",
            "label": "Non-Executive Director(Chairman)",
            "text": `
                Ituah Ighodalo is a Corporate Business Leader with an extensive track record in building and sustaining major establishments and institutions.
                
                <br><br>He possesses over 40 years' experience in Auditing, Accounting, Taxation, Human resources and Financial Advisory Services.
                
                <br><br>Ituah is a fellow of the Institute of Chartered Accountants of Nigeria (ICAN). A Fellow of the Chartered Institute of Taxation Nigeria, a member of the Institute of Management, a member of the American Society of Industrial Security and a member of the American Instituteo f Management.
                
                <br><br>He sits on the board of several corporate, charitable organizations and NGOs, as Chairman and Director.
                
                <br><br>He also Serves as the Senior Pastor,Trinity House.
            `
        },

        "Victor Ukwat":{
            "image":"img/about2.png",
            "label": "Co-founder | CEO",
            "text": `
                Victor Ukwat is a seasoned business manager with an extensive corporate experience of over 30 years. His experience spans across Sales, Operations, Business Development, Marketing andStrategy in the Logistics Industry where he spent 25 years at Red Star ExpressPLC. He is also a trained Leadership and Performance coach.

                <br><br>He is an alumnus of SeniorStrategy, Management and Leadership Programmes from top global institutions, notably the Columbia Business School in New York, USA; the Schulich BusinessSchool in Toronto, Canada; and the SAID Business School in Oxford, England, where he obtained certifications in High-Impact Leadership, StrategicLeadership, and High-Performance Leadership respectively. He also attended the prestigious Harvard Business School (USA), and the IESE Business School (Spain)where he obtained certifications in Building New Businesses In EstablishedCompanies and Entrepreneurship.

                <br><br>He holds a Bachelor's degree in Science (B.Sc) from the University of Calabar, a Masters in Science from the University of Ibadan and a Masters in Business Administration from the Lagos Business School (LBS). He is also a member of the Institute of Directors, Nigeria (IOD) and a Fellow of the National Institute of Marketing of Nigeria (NIMN). Victor Ukwat is a trained Executive Coach from Hult Ashridge, UK.
            `
        },

        "Jayson Oyarekhua":{
            "image":"img/about-us-3.png",
            "label": "Co-Founder | Executuve Director",
            "text": `
                Jayson Oyarekhua is a highly experienced Business Leader with a background in Management, Logistics, e-commerce, and Technology / Enterprise Solutions. He has held multiple cross-functional professional positions in Corporate Leadership, Operations, Sales and Strategy, e-commerce, and Technology. He has designed and implemented product distribution solutions with a focus on e-commerce and end-to-end order fulfilment.
                
                <br><br>As the former Chief Operating Officer at FedEx Red Star Express Nigeria, Jayson was responsible for overseeing all aspects of the company's operations, including Transportation Management, Order Fulfilment, and Customer Experience Management. He is a strategic and analytical thinker with excellent communication and transformational leadership skills. He is also committed to staying up to date with the latest trends and developments in the industry.
                
                <br><br>In addition to his professional experience, Jayson holds a Masters of Business Administration (MBA) from the Ambrose Alli University, Ekpoma and is an alumnus of Leadership, Management and Strategic programs from SAID Business School in Oxford (UK), Wharton Business School (USA), Lagos Business School (LBS) in Lagos, and FedEx Purple Academy in Dubai (UAE). He has also undergone various Logistics programs from the University of Westminster (UK).
                Jayson is excited to connect with other professionals to explore new opportunities for growth and collaboration.
            `
        },

        "Udeme Ufot":{
            "image":"img/about-us-4.png",
            "label": "Non-Executive Director",
            "text": `
                Udeme Ufot stands as one of Africa's prominent corporate leaders; with about 4 decades in advertising practice, over31 of those years leading SO&U.

                <br><br>Over the course of his career, he has been directly involved in establishing some of Nigeria's biggest brands and establishments. He sits on the board of several organizations; including the Nigerian Economic Summit Group (NESG),Ibom Hotel & Resorts, Special Olympics Nigeria and LEAP Africa.
                
                <br><br>His contribution to the advertising and marketing industry is evidenced by the several roles he has held; including being Vice-President and President of the Association of AdvertisingPractitioners Council of Nigeria (APCON), and Group Managing Director SO&U,a leading marketing/advertising company that he co-founded in 1990.
                
                <br><br>Udeme Holds a B.A in Industrial Design, a certification in Management from the Swedish Institute of Management and a Chief Executive Program Certification from the Lagos Business School(LBS). He is also an awardee of the Member of the Order of the Federal Republic of Nigeria (MFR).
            `
        },

        "Dr Jayne Shoboiki":{
            "image":"img/aboutus-5.png",
            "label": "Non-Executive Director",
            "text": `
                Dr.Mrs. Jayne Shoboiki is a seasoned business leader and strategic thinker with over 3 decades of vast Professional experience and educational achievements.

                <br><br>Within this period she has ventured and excelled in the Public Sector, as an Administrator, she is a lawyer, a passionate and successful Real Estate Magnate.
                
                <br><br>Dr. Jayne has a Masters degree in International Studies and also a Doctorate degree in International Relations. She holds numerous certifications, amongst which are; a certificate in Leadership, Policy and Strategic Studies from National Institute of Policy and Strategic Studies (NIPSS, Jos), a certificate in “Leadership and Character in Uncertain times” and a certificate in “Women Leading Change”She is a member of the Nigerian and International Bar Association, a Fellow of the Institute of Professional Managers and Administrators, Chartered Institute of Public Management and the Institute of Corporate administrators of Nigeria.
                
                <br><br>She is an Alumnus of the universities of Jos, Calabar and Abuja in Nigeria. University of Reading, United Kingdom and the Harvard Kennedy School, United states of America.
            `
        },

        "Olatunji Mayaki":{
            "image":"img/about-us-6.png",
            "label": "Non-Executive Director",
            "text": `
                Olatunji Mayaki is a highly accomplished professional with extensive experience in commercial law, asset management, and the energy sector. He holds degrees in Social Sciences and Law and began his legal career at the prestigious law firm Ajumogobia, Okeke Oyebode & Aluko. Throughout his career, he has held various leadership positions and contributed significantly to the success of renowned organizations.
                
                <br><br>Mr. Mayaki joined Shell Nigeria in 1996 as a Legal Adviser, specializing in Contracting & Projects. He played a key role in the establishment of Shell Exploration & Production Africa Limited, serving as its pioneer Legal Adviser & Company Secretary. In 2006, he relocated to The Netherlands as Senior Legal Counsel, providing support for Engineering Procurement & Construction (EPC) Contracts within Shell's global Gas & Power Business. During this time, he managed critical projects across Africa, China, Western Europe, and South America.
                
                <br><br>In 2009, Mr. Mayaki returned to Nigeria to assume the position of Country Head of Legal & Group Company Secretary for all Shell Companies in the country. His expertise and leadership were instrumental in ensuring compliance and driving legal excellence within the organization.In 2012, he joined Addax Petroleum Nigeria as Deputy Managing Director, overseeing key areas such as External & Government Affairs, Regulatory Affairs, Human Resources & Admin, Legal, Community Relations, Security, and Supply Chain Management. Mr. Mayaki retired voluntarily from this role in January 2022.
                
                <br><br>Throughout his career, Mr. Mayaki has pursued continuous personal and professional development. He has participated in various renowned business and leadership programs at prestigious institutions such as Harvard, IMD, and INSEAD.Currently, Mr. Mayaki serves on the Board of Sterling Bank Plc, where he brings his valuable insights and expertise to contribute to the bank's strategic direction. He also holds the position of Chairman of the Board of CFG Africa Ltd, a role in which he guides the company towards achieving its objectives.
                
                <br><br>In addition to his corporate endeavors, Mr. Mayaki is actively involved in philanthropic activities. He is a member of the Governing Council of Chestrad, a UK-based NGO and charitable organization. Through this platform, he has spearheaded the establishment of several programs in Nigeria to support health systems, social development, and the empowerment of women and the girl child.Mr. Mayaki's rich background, leadership acumen, and commitment to making a positive impact have positioned him as a highly respected professional in both the corporate and social spheres.
            `
        },

        "Nuratu Ajoke":{
            "image":"img/exec-7.png",
            "label": "Director",
            "text": `
                Nuratu Ajoke Jimoh Batagarawa, born on March 8, 1961, in Jos, Plateau State, hails from Kwara State. Her parents, Alhaji Muhammadu Jimoh Aweda Oladimeji and Hajia Clara Nusiratu Jimoh Oladimeji, are both remembered with blessings.

                <br><br>Her educational journey began at St Luke's Primary School in Jos, followed by attendance at the prestigious St. Louis College, Jos. In 1977, Mrs. Nuratu Jimoh Batagarawa gained admission to Ahmadu Bello University, Zaria, graduating in 1981 with a B.Sc in Political Science. Subsequently, in 1982, she completed a Master's Degree in International Politics at the University of Lancaster, United Kingdom.
                
                <br><br>Embarking on her career in April 1985, she joined the National Institute for Policy & Strategic Studies, Kuru, Nigeria (NIPSS), as a Junior Research Fellow. Simultaneously, she contributed to Presidential Committees on Brain Drain and Restoration of Relationship with post-apartheid South Africa. In 1992, she assumed the role of Executive Director at the Federal Mortgage Bank of Nigeria until March 2003, transitioning to the Federal Civil Service as Deputy Director.
                
                <br><br>Mrs. Batagarawa's tenure included noteworthy positions such as Director in the Ministry of Police Affairs and Permanent Secretary in the Office of the Head of the Civil Service of the Federation, where she initiated the Civil Service Owner Occupier Housing Scheme for Federal Civil Servants. She further made history as the first female Permanent Secretary at the Ministry of Defence, serving until October 9, 2017.
                
                <br><br>Throughout her distinguished career, she attended various Leadership and Management courses, both domestically and internationally. Her expertise and innovative approach left an indelible mark on the organizations she served.
                
                <br><br>Retiring from the Federal Civil Service on April 4, 2020, after 35 meritorious years, Mrs. Nuratu J. Batagarawa continues her impactful contributions. Currently, she serves as an independent non-executive Director on the board of Lotus Bank and actively engages in estate management business. Married to Mallam Lawal Tukur Batagarawa, she is a proud mother and enjoys the enriching pursuit of reading.
            `
        },

        "Gbenga Akande":{
            "image":"img/executive-dir-1.png",
            "label": "Chief Technology Officer",
            "text": ``
        },

        "Cyril Chukwujekwe":{
            "image":"img/exec1.png",
            "label": "Chief Financial Officer",
            "text": ``
        },

        "Temitope Sanni":{
            "image":"img/exec2.png",
            "label": "Head, National Sales",
            "text": ``
        },

        "Elizabeth Onwuka":{
            "image":"img/exec3.png",
            "label": "Head, HR & Admin",
            "text": ``
        },
    }

    let flip_cards = document.getElementsByClassName("flip-card");

    let founders_about = document.getElementsByClassName("founders-about")[0];
    let founders_description = document.getElementsByClassName("ab-desc")[0];

    let about_card = document.getElementsByClassName("about-card")[0];
    let founders_about_close = document.getElementsByClassName("founders-about-close")[0];


    for (let i = 0; i < flip_cards.length; i++) {
        flip_cards[i].addEventListener("click", function(){
            
            about_card.style.transitionDelay = ".2s";
            founders_about.style.transitionDelay = "0";
            founders_about.style.transition = ".2s";
            founders_about.style.height = "100vh";
            // setting card content.....
            let ceo_name = flip_cards[i].children[0].children[1].children[0].innerHTML;
            
            ceo_data = founders_dictionary[ceo_name]
            console.log(founders_description)
            founders_description.children[0].innerHTML = ceo_name;
            founders_description.children[1].innerHTML = ceo_data["label"];
            founders_description.children[2].innerHTML = ceo_data["text"];
            // funtionality for executives without description
            if (founders_description.children[2].innerHTML.length < 5) {
                founders_description.style.gridTemplateRows = "max-content max-content max-content max-content";
            }else if(founders_description.children[2].innerHTML.length > 5){
                founders_description.style.gridTemplateRows = "max-content max-content 268px max-content";
            }
            founders_description.previousElementSibling.children[0].setAttribute("src", ceo_data["image"])

            
            about_card.style.transform = "translateY(0)";

        })
        
    }

    founders_about_close.addEventListener("click", function(){
        about_card.style.transitionDelay = 0;
        about_card.style.transform = "translateY(-100vw)";

        founders_about.style.transitionDelay = ".5s";
        founders_about.style.height = 0;
    })

}

// nav function..........

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
let overlaysolmenu = document.getElementsByClassName("overlay-sol-menu")[0];
document.getElementsByClassName("overlay-solution")[0].addEventListener("click", function(){
    if ( overlaysolmenu.classList.contains("active-overlaysolmenu") ) {
        overlaysolmenu.classList.remove("active-overlaysolmenu");
    } else {
        overlaysolmenu.classList.add("active-overlaysolmenu");
    }
})

// homepage videos........

video_dictionary = {
    "video1":{"local":"videos/thl.mp4"},
    "video2":{"online":"https://www.youtube.com/embed/oA1VrK0UMJg?rel=0&enablejsapi=1"},
    "video3":{"online":"https://www.youtube.com/embed/6EDCnhbUpgE?rel=0&enablejsapi=1"},
}
if (window.location.href.split("/")[3] === "home.html") {

    let service_video = document.getElementsByClassName("service-video")[0];

    let video_cards = document.getElementsByClassName("card-image");

    let video_link = document.getElementsByClassName("ab-img")[0];
    let video_card = document.getElementsByClassName("video-card")[0];
    let service_video_close = document.getElementsByClassName("service-video-close")[0];


    for (let i = 0; i < video_cards.length; i++) {
        video_cards[i].addEventListener("click", function(){
            
            video_card.style.transitionDelay = ".2s";
            service_video.style.transitionDelay = "0";
            service_video.style.transition = ".2s";
            service_video.style.height = "100vh";
            // setting video link content.....
            let video_name = video_cards[i].children[1].getAttribute("data-videoLink").split("-");
            video_data = video_dictionary[video_name[0]][video_name[1]]

            if (video_name[1] === "online") {
                video_link.children[0].style.display = "block";
                video_link.children[1].style.display = "none";
                video_link.children[0].setAttribute("src", video_data)
            }else if( video_name[1] === "local" ){
                video_link.children[0].style.display = "none";
                video_link.children[1].style.display = "block";
                video_link.children[1].children[0].setAttribute("src", video_data)
            }
            

            video_card.style.transform = "translateY(0)";

        })
        
    }

    function controlVideo(vidFunc) {
        let iframe = video_link.children[0].contentWindow;
        
        iframe.postMessage(
            '{"event":"command","func":"' + vidFunc + '","args":""}',
            "*"
        );
        console.log(iframe.postMessage)
    }

    service_video_close.addEventListener("click", function(){
        controlVideo('pauseVideo');
        video_link.children[1].pause()
        video_card.style.transitionDelay = 0;
        video_card.style.transform = "translateY(-100vw)";

        service_video.style.transitionDelay = ".5s";
        service_video.style.height = 0;
    })

    //faq funtionality

    let faq_content = document.getElementsByClassName("faq-content")[0];
    let faq_group_item = document.getElementsByClassName("faq-group-item")
    
    for (let i = 0; i < faq_group_item.length; i++) {        
    
        faq_group_item[i].addEventListener("click", function(){
            let group_category = faq_group_item[i].innerHTML;
            let active_group_cat = document.getElementsByClassName("active-cat")[0];
            let active_group_item = document.getElementsByClassName("active-faq")[0];
            
            if (active_group_item.id.toLowerCase() === group_category.toLowerCase()) {
                // pass
            } else if(active_group_item.id.toLowerCase() !== group_category.toLowerCase()){
                active_group_cat.classList.remove("active-cat");
                active_group_item.classList.add("hide");
                active_group_item.classList.remove("active-faq", "show");
            
                let next_active_group_item = document.getElementById(group_category.toLowerCase());
                let next_active_group_cat = document.getElementsByClassName(group_category.toLowerCase())[0];
                next_active_group_cat.classList.add("active-cat");
                console.log(next_active_group_cat)
                next_active_group_item.classList.remove("hide");
                next_active_group_item.classList.add("show", "active-faq");
            }
        })
    }

    let faq_qstn = document.getElementsByClassName("faq-question");

    for (let i = 0; i < faq_qstn.length; i++) {
        faq_qstn[i].addEventListener("click", function(){
            
            if ( faq_qstn[i].children[0].checked === false ) {
                console.log(faq_qstn[i].children[3])
                faq_qstn[i].children[3].classList.add("panel-checked");
                check(faq_qstn[i].children[0])

            }else if( faq_qstn[i].children[0].checked === true ){
                faq_qstn[i].children[3].classList.remove("panel-checked");
                uncheck(faq_qstn[i].children[0])

            }
            
        })
        
    }

    function check(inpVar) {
        inpVar.checked = true;
    }
    
    function uncheck(inpVar) {
        inpVar.checked = false;
    } 
}


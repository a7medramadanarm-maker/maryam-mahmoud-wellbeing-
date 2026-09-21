/* =========================================================
   MARYAM MAHMOUD — PREMIUM PERSONAL BRAND
   JavaScript Version 2
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        ar: {

            "brand-subtitle":
                "مساحة للفهم والوضوح",

            "nav-home":
                "الرئيسية",

            "nav-about":
                "عن مريم",

            "nav-support":
                "هل هذا يشبهك؟",

            "nav-services":
                "الخدمات",

            "nav-faq":
                "الأسئلة",

            "nav-contact":
                "تواصل",

            "nav-book":
                "احجزي جلسة",


            /* HERO */

            "hero-kicker":
                "مساحة خاصة لك",

            "hero-title":
                "خدي وقتك.<br><em>افهمي نفسك.</em><br>وابدئي من جديد.",

            "hero-description":
                "مساحة هادئة وآمنة تساعدك على التوقف قليلًا، فهم ما بداخلك، ورؤية خطواتك القادمة بوضوح أكبر.",

            "hero-primary":
                "احجزي جلستك <i class='fa-solid fa-arrow-left'></i>",

            "hero-secondary":
                "اكتشفي المساحة <i class='fa-solid fa-arrow-left'></i>",

            "hero-note":
                "خطوة واحدة قد تكون بداية مختلفة.",

            "hero-card-small":
                "MARYAM MAHMOUD",

            "hero-card-title":
                "A space to breathe.",


            /* STATEMENT */

            "statement-label":
                "A QUIET SPACE",

            "statement-title":
                "مساحة للتوقف.<br>للفهم.<br><em>وللبداية.</em>",

            "statement-text":
                "ليس عليك أن يكون لديك كل الإجابات الآن. أحيانًا كل ما تحتاجينه هو مساحة تسمحين فيها لنفسك أن تتكلمي، تفكري، وتفهمي ما يحدث بداخلك.",


            /* ABOUT */

            "about-label":
                "ABOUT MARYAM",

            "about-title":
                "مكان يبدأ فيه<br><em>صوتك أنتِ.</em>",

            "about-text":
                "مريم محمود تقدم مساحة إنسانية وهادئة للحوار والفهم والتفكير في الخطوات القادمة.",

            "about-text-2":
                "الفكرة هنا ليست أن تحصلي على إجابات جاهزة، ولكن أن يكون لديك مكان تستطيعين فيه التعبير عن نفسك بصدق وبدون ضغط.",

            "about-image-caption":
                "The person behind the space.",

            "about-feature-1":
                "خصوصية",

            "about-feature-2":
                "استماع",

            "about-feature-3":
                "وضوح",


            /* SUPPORT */

            "support-label":
                "MAYBE YOU ARE HERE BECAUSE",

            "support-title":
                "ربما هناك شيء بداخلك<br><em>يطلب منك التوقف.</em>",

            "support-description":
                "إذا وجدتِ نفسك في واحدة من هذه المساحات، فربما حان الوقت لمنح نفسك بعض الوقت والاهتمام.",

            "support-1-title":
                "تشعرين أنكِ مرهقة",

            "support-1-text":
                "الكثير من الأشياء تحدث في وقت واحد ولا تعرفين من أين تبدئين.",

            "support-2-title":
                "تحتاجين إلى وضوح",

            "support-2-text":
                "لديكِ أفكار كثيرة وتحتاجين مساحة تساعدك على ترتيبها.",

            "support-3-title":
                "تريدين فهم نفسك أكثر",

            "support-3-text":
                "هناك مشاعر أو أفكار تتكرر وتريدين التوقف عندها وفهمها.",

            "support-4-title":
                "أنتِ مستعدة للتغيير",

            "support-4-text":
                "ربما لا تعرفين الخطوة التالية، لكنك تعرفين أنك تريدين شيئًا مختلفًا.",


            /* SERVICES */

            "services-label":
                "SERVICES",

            "services-title":
                "كيف يمكن أن تكون<br><em>هذه المساحة لكِ؟</em>",

            "services-description":
                "كل جلسة تبدأ من احتياجك أنتِ، وليس من قالب جاهز.",

            "service-1-title":
                "جلسات فردية",

            "service-1-text":
                "مساحة خاصة للحوار والتعبير وفهم ما تمرين به بصورة أكثر وضوحًا.",

            "service-2-title":
                "جلسات وضوح",

            "service-2-text":
                "عندما تكون الأفكار كثيرة وتحتاجين إلى ترتيبها والنظر إليها بهدوء.",

            "service-3-title":
                "مساحة للنمو",

            "service-3-text":
                "مساحة للتأمل في نفسك وعاداتك والأشياء التي تريدين تغييرها.",

            "service-4-title":
                "استشارة أولية",

            "service-4-text":
                "لقاء أول للتعرف على احتياجك ومعرفة ما إذا كانت هذه المساحة مناسبة لك.",

            "service-link":
                "ابدئي من هنا →",


            /* WHY */

            "why-label":
                "THE SPACE",

            "why-title":
                "لأنكِ تستحقين<br><em>مساحة تشبهك.</em>",

            "why-1-title":
                "بدون أحكام",

            "why-1-text":
                "مساحة يمكنك فيها أن تتحدثي عن أفكارك ومشاعرك كما هي.",

            "why-2-title":
                "بإيقاعك أنتِ",

            "why-2-text":
                "لا يوجد سباق ولا ضغط للوصول إلى نتيجة في وقت محدد.",

            "why-3-title":
                "باهتمام حقيقي",

            "why-3-text":
                "التركيز يكون على الاستماع والفهم واحتياجاتك أنتِ.",


            /* PROCESS */

            "how-label":
                "HOW IT WORKS",

            "how-title":
                "البداية أبسط<br><em>مما تتخيلين.</em>",

            "step-1-title":
                "احجزي",

            "step-1-text":
                "اختاري الطريقة المناسبة للتواصل وأرسلي طلبك.",

            "step-2-title":
                "نتحدث",

            "step-2-text":
                "نتعرف على احتياجك والمساحة التي تبحثين عنها.",

            "step-3-title":
                "نبدأ",

            "step-3-text":
                "نبدأ من النقطة التي تناسبك وبالإيقاع الذي يناسبك.",


            /* BOOKING */

            "booking-label":
                "READY WHEN YOU ARE",

            "booking-title":
                "ربما تكون هذه<br><em>خطوتك الأولى.</em>",

            "booking-description":
                "إذا كنتِ مستعدة للبدء، اتركي بياناتك وسنتواصل معك.",

            "booking-button":
                "تواصلي الآن <i class='fa-solid fa-arrow-left'></i>",


            /* FAQ */

            "faq-label":
                "FAQ",

            "faq-title":
                "أسئلة<br><em>قد تدور في بالك.</em>",

            "faq-q1":
                "كيف أبدأ؟",

            "faq-a1":
                "يمكنك البدء من خلال نموذج التواصل أو أي وسيلة اتصال متاحة على الموقع.",

            "faq-q2":
                "ماذا يحدث في اللقاء الأول؟",

            "faq-a2":
                "اللقاء الأول فرصة للتعارف وفهم احتياجك والمساحة التي تبحثين عنها.",

            "faq-q3":
                "هل يمكن التواصل قبل الحجز؟",

            "faq-a3":
                "نعم، يمكنك التواصل أولًا إذا كان لديك أي سؤال قبل اتخاذ خطوة الحجز.",

            "faq-q4":
                "هل المعلومات التي أشاركها خاصة؟",

            "faq-a4":
                "يتم التعامل مع المعلومات التي تتم مشاركتها خلال التواصل باحترام وخصوصية.",


            /* CONTACT */

            "contact-label":
                "LET'S CONNECT",

            "contact-title":
                "لديكِ سؤال؟",

            "contact-description":
                "اختاري الطريقة التي تناسبك وسنتواصل معك.",


            /* FOOTER */

            "footer-description":
                "مساحة هادئة للحوار والفهم والبداية الجديدة.",

            "footer-made":
                "Prepared By: Eng Ahmad Ramadan"

        },


        /* =================================================
           ENGLISH
        ================================================= */

        en: {

            "brand-subtitle":
                "A space for clarity",

            "nav-home":
                "Home",

            "nav-about":
                "About",

            "nav-support":
                "Does this sound like you?",

            "nav-services":
                "Services",

            "nav-faq":
                "FAQ",

            "nav-contact":
                "Contact",

            "nav-book":
                "Book a Session",


            "hero-kicker":
                "A SPACE FOR YOU",

            "hero-title":
                "Take your time.<br><em>Understand yourself.</em><br>Begin again.",

            "hero-description":
                "A calm and private space to pause, understand what you are experiencing, and find more clarity in your next steps.",

            "hero-primary":
                "Book your session <i class='fa-solid fa-arrow-right'></i>",

            "hero-secondary":
                "Discover the space <i class='fa-solid fa-arrow-right'></i>",

            "hero-note":
                "One small step can become a different beginning.",

            "hero-card-small":
                "MARYAM MAHMOUD",

            "hero-card-title":
                "A space to breathe.",


            "statement-label":
                "A QUIET SPACE",

            "statement-title":
                "A space to pause.<br>To understand.<br><em>To begin.</em>",

            "statement-text":
                "You do not need to have all the answers right now. Sometimes, what you need is a space where you can speak, reflect, and understand what is happening within you.",


            "about-label":
                "ABOUT MARYAM",

            "about-title":
                "A place where<br><em>your voice begins.</em>",

            "about-text":
                "Maryam Mahmoud offers a calm and human space for conversation, reflection, understanding, and thinking about what comes next.",

            "about-text-2":
                "The idea is not to give you ready-made answers, but to create a space where you can express yourself honestly and without pressure.",

            "about-image-caption":
                "The person behind the space.",

            "about-feature-1":
                "Privacy",

            "about-feature-2":
                "Listening",

            "about-feature-3":
                "Clarity",


            "support-label":
                "MAYBE YOU ARE HERE BECAUSE",

            "support-title":
                "Something inside you<br><em>is asking you to pause.</em>",

            "support-description":
                "If you recognize yourself in any of these spaces, perhaps it is time to give yourself some attention and room to breathe.",

            "support-1-title":
                "You feel overwhelmed",

            "support-1-text":
                "There are too many things happening at once and you do not know where to begin.",

            "support-2-title":
                "You need clarity",

            "support-2-text":
                "You have many thoughts and need space to organize and understand them.",

            "support-3-title":
                "You want to understand yourself",

            "support-3-text":
                "Certain thoughts or feelings keep returning and you want to understand them better.",

            "support-4-title":
                "You are ready for change",

            "support-4-text":
                "You may not know the next step yet, but you know you want something different.",


            "services-label":
                "SERVICES",

            "services-title":
                "How can<br><em>this space serve you?</em>",

            "services-description":
                "Every session begins with your needs, not a fixed template.",

            "service-1-title":
                "Individual Sessions",

            "service-1-text":
                "A private space for conversation, expression, and understanding what you are going through.",

            "service-2-title":
                "Clarity Sessions",

            "service-2-text":
                "When your thoughts feel crowded and you need space to organize and look at them calmly.",

            "service-3-title":
                "Personal Growth",

            "service-3-text":
                "A space to reflect on yourself, your patterns, and the things you want to change.",

            "service-4-title":
                "Initial Consultation",

            "service-4-text":
                "An initial conversation to understand your needs and explore whether this space is right for you.",

            "service-link":
                "Start here →",


            "why-label":
                "THE SPACE",

            "why-title":
                "Because you deserve<br><em>a space that feels like you.</em>",

            "why-1-title":
                "Without judgment",

            "why-1-text":
                "A space where you can talk about your thoughts and feelings as they are.",

            "why-2-title":
                "At your pace",

            "why-2-text":
                "There is no race and no pressure to reach a result within a certain time.",

            "why-3-title":
                "With genuine attention",

            "why-3-text":
                "The focus is on listening, understanding, and your individual needs.",


            "how-label":
                "HOW IT WORKS",

            "how-title":
                "Starting is easier<br><em>than you think.</em>",

            "step-1-title":
                "Book",

            "step-1-text":
                "Choose the way you would like to connect and send your request.",

            "step-2-title":
                "Talk",

            "step-2-text":
                "We learn about your needs and the kind of space you are looking for.",

            "step-3-title":
                "Begin",

            "step-3-text":
                "We begin from the point that feels right for you, at your own pace.",


            "booking-label":
                "READY WHEN YOU ARE",

            "booking-title":
                "Maybe this is<br><em>your first step.</em>",

            "booking-description":
                "If you are ready to begin, leave your details and we will get in touch.",

            "booking-button":
                "Let's connect <i class='fa-solid fa-arrow-right'></i>",


            "faq-label":
                "FAQ",

            "faq-title":
                "Questions<br><em>you may have.</em>",

            "faq-q1":
                "How do I start?",

            "faq-a1":
                "You can start through the contact options available on the website.",

            "faq-q2":
                "What happens in the first meeting?",

            "faq-a2":
                "The first meeting is an opportunity to get to know each other and understand what you are looking for.",

            "faq-q3":
                "Can I contact you before booking?",

            "faq-a3":
                "Yes. You can reach out first if you have any questions before booking.",

            "faq-q4":
                "Is the information I share private?",

            "faq-a4":
                "Information shared during communication is treated with respect and privacy.",


            "contact-label":
                "LET'S CONNECT",

            "contact-title":
                "Have a question?",

            "contact-description":
                "Choose the way that works for you and get in touch.",


            "footer-description":
                "A calm space for conversation, understanding, and new beginnings.",

            "footer-made":
                "Prepared By: Eng Ahmad Ramadan"

        }

    };


    /* =====================================================
       LANGUAGE
    ===================================================== */

    const languageToggle =
        document.getElementById("languageToggle");

    const savedLanguage =
        localStorage.getItem("maryam_language") || "ar";


    function applyLanguage(language) {

        if (!translations[language]) {
            language = "ar";
        }

        const html =
            document.documentElement;

        html.lang = language;

        html.dir =
            language === "ar" ? "rtl" : "ltr";


        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-i18n");

                if (
                    translations[language][key] !== undefined
                ) {
                    element.innerHTML =
                        translations[language][key];
                }

            });


        if (languageToggle) {

            languageToggle.textContent =
                language === "ar"
                    ? "EN"
                    : "عربي";

        }


        document.title =
            language === "ar"
                ? "Maryam Mahmoud | مساحة للفهم والوضوح"
                : "Maryam Mahmoud | A Space for Clarity";


        localStorage.setItem(
            "maryam_language",
            language
        );
    }


    applyLanguage(savedLanguage);


    if (languageToggle) {

        languageToggle.addEventListener(
            "click",
            () => {

                const current =
                    document.documentElement.lang;

                const next =
                    current === "ar"
                        ? "en"
                        : "ar";

                applyLanguage(next);

            }
        );

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navigation =
        document.getElementById("navigation");


    if (menuToggle && navigation) {

        menuToggle.addEventListener(
            "click",
            () => {

                navigation.classList.toggle("active");

                document.body.classList.toggle(
                    "menu-open"
                );

            }
        );


        navigation
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navigation.classList.remove(
                            "active"
                        );

                        document.body.classList.remove(
                            "menu-open"
                        );

                    }
                );

            });

    }


    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    const header =
        document.getElementById("header");


    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader
    );

    updateHeader();


    /* =====================================================
       FAQ
    ===================================================== */

    document
        .querySelectorAll(".faq-question")
        .forEach(question => {

            question.addEventListener(
                "click",
                () => {

                    const item =
                        question.closest(".faq-item");

                    const answer =
                        item.querySelector(".faq-answer");


                    document
                        .querySelectorAll(".faq-item")
                        .forEach(other => {

                            if (other !== item) {

                                other.classList.remove(
                                    "active"
                                );

                                other
                                    .querySelector(".faq-answer")
                                    .style.maxHeight = null;

                            }

                        });


                    item.classList.toggle("active");


                    if (item.classList.contains("active")) {

                        answer.style.maxHeight =
                            answer.scrollHeight + "px";

                    } else {

                        answer.style.maxHeight = null;

                    }

                }
            );

        });


    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => revealObserver.observe(element)
    );


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".navigation a"
        );


    window.addEventListener(
        "scroll",
        () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 150;

                if (
                    window.scrollY >= sectionTop
                ) {
                    current =
                        section.getAttribute("id");
                }

            });


            navLinks.forEach(link => {

                link.classList.remove("active");

                const href =
                    link.getAttribute("href");

                if (
                    href === "#" + current
                ) {
                    link.classList.add("active");
                }

            });

        }
    );


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");

                    if (
                        targetId === "#" ||
                        !targetId
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });


    console.log(
        "Maryam Mahmoud website loaded successfully."
    );

});

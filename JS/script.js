var arrLang = {
  fr: {
    moi: "Moi",
    competences: "Competences",
    experiences: "Experiences",
    education: "Education",
    portfolio: "Portfolio",
    recommandations: "Recommandations",
    bienvenue: "Bienvenue sur mon cv en ligne",
    developpeur: "Developpeur Web",
    experiencepro: "Experiences professionnelles",
    stage: "Stage Informatique & Reseau",
    telecharger: "Telecharger cv",
    presentation:
      "Rigoureux et déterminé, je suis un passionné d'informatique qui se remet en question afin de suivre les évolutions constantes du monde informatique et des nouveaux processus. Mes qualités professionnelles et ma motivation débordant, me permettent de réussir avec mes atouts, à savoir, ma capacité d’adaptation, ma pugnacité à réussir et ma disponibilité sur le plan professionnel et relationnel avec la clientèle. Bon communiquant, je m’intègre facilement à une équipe, de par mes aptitudes acquises via le sport et le coaching sportif.",
    commentaire1:
      "Assister le technicien resaeu dans la mise en place d'une nouvelle agence et pole telephonique.",
    commentaire2: "Developpement d'un outil de suivi des incidents.",
    commentaire3:
      'Mise a jour des documents "Architectures reseau et materiel".',
    stage2: "Stage Developpeur",
    job1: "Technicien support Informatique",
    job2: "Technicien de maintenance",
    job3: "Informaticien d'exploitation",
    commentaire4: "Developper un site intranet pour une societe partenaire.",
    commentaire5: "Gestion d’un projet web.",
    commentaire6: "Utilisation d’un micro Framework PHP « SLIM ».",
    commentaire7:
      "Assurer les commandes et l’installation de matériel informatique.",
    commentaire8:
      "Diagnostiquer et Résoudre les problèmes (matériel / logiciel) rencontre par les utilisateurs.",
    commentaire9:
      "Mon role au sein de datacet est de m'occuper de la gestion du service après vente (Réception et Envois), é́galement de la maintenance des appareils de télésurveillances (Réparation, Nettoyage, Programmation).",
    commentaire10:
      "Ma mission consiste à réaliser l’ensemble des tâches liées à l’impression et la mise sous pli :",
    commentaire11:
      "Effectuer les réglages des machines (imprimantes et des machines de mise sous plis)",
    commentaire12:
      "Résoudre les incidents de premier niveau et s’occuper de l’entretien des machines.",
    diplome1:
      "Licence Professionnelle Concepteur Intégrateur de Systèmes Internet/Intranet pour l’Entreprise(CISIIE)",
    diplome2: "BTS SNIR(Système Numérique Informatique et Réseau)",
    recom1: '"Alan est un stagiere interesse et a l\'ecoute..."',
    recom2: '"Alan est un travailleur et aime apprendre"',
    recom3: '"Alan a fourni un bon travaille"',
    prof: "Professeur principal",
  },
  en: {
    moi: "About me",
    competences: "Abilities",
    experiences: "Experiences",
    education: "Education",
    portfolio: "Portfolio",
    recommandations: "Recommandation",
    bienvenue: "Welcome to my work experience online",
    developpeur: "IT Developer full stack",
    experiencepro: "Work Experiences",
    stage: "Computer and Network Traineeship",
    telecharger: "Download cv",
    presentation:
      "Rigorous and determined, I am an IT enthusiast who challenges myself in order to keep up with the constant changes in the IT world and new processes. My professional qualities and my motivation, allow me to succeed with my strengths, such as my ability to adapt, my determination to succeed and my availability on a professional and relational level with customers. Good communicator, I integrate easily into a team, thanks to my skills acquired through sport and sports coaching.",
    commentaire1:
      "Assist the network technician in setting up a new branch and telephone pole.",
    commentaire2: 'Development of an "incident tracking" tool.',
    commentaire3: 'Update of documents "Network and hardware architectures".',
    stage2: "IT Traineeship",
    job1: "IT support Technician",
    job2: "Maintenance Technician",
    job3: "Operations IT",
    commentaire4: "Develop an intranet website for a partner company.",
    commentaire5: "Project Management",
    commentaire6: "Using a SLIM Framework ",
    commentaire7: "Prepare orders and installation of computer equipment.",
    commentaire8:
      "Diagnose and Solve problems (hardware / software) encountered by users.",
    commentaire9:
      "Mon role au sein de datMy role at datacet is to take care of the management of the after-sales service (Reception and Sending), also of the maintenance of remote monitoring devices (Repair, Cleaning, Programming).",
    commentaire10:
      "My job is to carry out all the tasks related to printing and inserting :",
    commentaire11: "Make machine settings (printers and inserting machines).",
    commentaire12:
      "Solve first level incidents and take care of machine maintenance.",
    diplome1:
      "BA in Professional Design of Internet / Intranet Systems Integrator for the Company ",
    diplome2:
      "BTEC Higher National Diploma in Computer Numerical System and Network ",
    recom1: '"Alan is a student interested and attentive ..."',
    recom2: '"Alan is a hard worker and loved to learn"',
    recom3: '"Alan provided a good job"',
    prof: "Schoolmaster",
  },
};

$(function () {
  $(".navbar a, .footer a").on("click", function (event) {
    event.preventDefault();
    var hash = this.hash;

    $("body,html").animate(
      { scrollTop: $(hash).offset().top },
      900,
      function () {
        window.location.hash = hash;
      }
    );
  });

  $(".translate").click(function () {
    var lang = $(this).attr("id");

    $(".lang, .button1").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });

  $("#contact-form").submit(function (e) {
    e.preventDefault();
    $(".comments").empty();
    var postdata = $("#contact-form").serialize();

    $.ajax({
      type: "POST",
      url: "php/contact.php",
      data: postdata,
      dataType: "json",
      success: function (json) {
        if (json.isSuccess) {
          $("#contact-form").append(
            "<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>"
          );
          $("#contact-form")[0].reset();
        } else {
          $("#firstname + .comments").html(json.firstnameError);
          $("#name + .comments").html(json.nameError);
          $("#email + .comments").html(json.emailError);
          $("#phone + .comments").html(json.phoneError);
          $("#message + .comments").html(json.messageError);
        }
      },
    });
  });
});

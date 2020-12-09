/* eslint-disable prettier/prettier */
<template>
  <div class="fullHeight">
    <Banner />
    <div class="columns fullHeight">
      <div class="column is-narrow fullHeight">
        <NavBar />
      </div>
      <div class="column">
        <div class="box mainBox">
          <p class="title">{{ title }}</p>
          <p class="subtitle">Required UCAS Points: {{ ucasPoints }}</p>
          <a href="contact.html">Don't meet the requirements? Don't worry, contact us for help!</a>
          <br />
          <br />
          <div v-for="descriptionLine in description" v-bind:key="descriptionLine">
            <p style="margin-bottom:10px;" v-html="descriptionLine"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NavBar from "../components/NavBar.vue";
import { eventBus, NavBarUpdate } from "../EventBus.js";

export default {
  name: "CourseDetails",
  components: {
    Banner,
    NavBar
  },
  mounted() {
    eventBus.emit(NavBarUpdate);
    let id = parseInt(new URL(window.location.href).searchParams.get("courseID"));

    if (id != null) {
      this.courseId = id;
      //I hate it I hate it I hate it I hate it
      switch (this.courseId) {
        case 1:
          this.description.push("This course includes a wide range of skills identified by both employers and the Association of Chartered Certified Accountants (ACCA) as being important for accountancy and finance graduates in the 21st century.");
          this.description.push("Ethics and sustainable business are covered, as is the ability to communicate effectively both in writing and orally, to work in teams and to be able to think critically and solve problems.");
          this.description.push("The teaching and learning includes a diverse and dynamic range of strategies including practical classes and workshops.");
          this.description.push("Case studies will be used in some modules to both embed knowledge and understanding, but also to allow students to apply their skills in their analysis and problem solving. In some modules, students will have to justify and reflect upon their business decisions and strategies to a panel of academic and industry experts in a ‘Dragon’s Den’ style scenario.");
          this.description.push("Students will be supported to progress through the production of a range of types of outputs that would normally be required in business situations. The development of spreadsheets and use of industry specific software will improve your employability and allow a practical application of knowledge.  This may form a part of a portfolio of the student’s work for assessment purposes. These types of learning experiences have specifically been chosen to emulate the types of experience and skills that are required by industry.");
          this.description.push("Students will be encouraged to be active learners whose knowledge and understanding is gained through the support of academic staff, who will act as mentors, rather than ‘lecturers’. Industry specialists are invited to lectures and again they will not be seen purely as ‘guest lecturers’, but as part of the university community.");
          this.title = "BSc (Hons) Accounting and Finance";
          this.ucasPoints = 100;
          break;
        
        case 2:
          this.description.push("The Animal Management sector is evolving and expanding constantly and therefore requires an adaptable and knowledgeable workforce to meet these changes. This course will provide you with a solid in-depth introduction to animal welfare and management, to meet employer demands in such a competitive industry.");
          this.description.push("You will learn through lectures, seminars, practical demonstrations, independent research, visits, field work and through work-related experiences on the programme.");
          this.description.push("An in-depth, independent research project will form 25% of your final year of study in which you will need to investigate, analyse and report on a set theme relating to animal behaviour and welfare.");
          this.description.push("You will have the opportunity to be involved in trips to zoos, wildlife parks, animal shelters, natural history museums and an opportunity to visit South Africa (subject to additional costs).");
          this.description.push("The optional trip to South Africa in the second year* will give students the opportunity to visit and take part in field studies monitoring populations of animals in reserves such as lions, wild dogs, buffalo and rhino.");
          this.description.push("Throughout the course you will meet industry specialists including Reptile Specialists, Aviculturists, Zoo Keepers, Boarding Establishment Owners, Ecologists and Vets.");
          this.description.push("At the Stamford campus, you will have access to a range of species housed in the on-site Animal Studies Unit and develop necessary skills in animal management and husbandry. The Animal Studies Unit includes a range of small mammals, reptiles, amphibians, fish and invertebrates, as well as a bespoke nocturnal room and a large outside area housing rabbits, guinea pigs, ferrets, birds, marmosets and meerkats.");
          this.title = "HNC/HND Animal Management (Animal Behaviour and Welfare)";
          this.ucasPoints = 45;
          break;

        case 3:
          this.description.push("There is a high demand for fully trained and skilled professionals within STEM sector and especially scientific and technological roles. There are nearly 6,000 jobs in Peterborough alone, which is part of a large cluster of life science employers throughout Cambridgeshire.");
          this.description.push("You will gain a detailed knowledge and understanding of key biological processes and principles, together with the technical and scientific skills you will need to acquire, interpret and analyse data in health or laboratory settings.");
          this.description.push("We will introduce you to the specific techniques and applications used in a broad range of sectors, including pathology, biomedicine, toxicology and forensics, as well as environmental settings such as pollution monitoring and control.");
          this.description.push("We will also give you a thorough introduction to the bioscience sector and how it operates through work-based learning. This will give you a strong set of work-based skills, including the ability to confidently select and apply various techniques to specific scientific requirements.");
          this.description.push("The course has close links with Peterborough City Hospital and the modules were created in consultation with employers to give students the skills required for the workplace. Hinchingbrooke, Papworth and Addenbrookes hospitals are also close by with graduates having secured jobs and work placements in a variety of roles.");
          this.description.push("When you graduate you will be able to design, plan, safely conduct, record and report on investigations using primary or secondary data. You will be able to obtain, record, collate, evaluate and analyse data using appropriate techniques in the field and/or laboratory, working individually or in a team. You will also understand sample selection, along with how to record and analyse data.");
          this.title = "BSc (Hons) Biological Sciences";
          this.ucasPoints = 110;
          break;

        case 4:
          this.description.push("The Higher National Diploma in Computing is a nationally recognised university-level programme which places emphasis on employer engagement and work readiness. The programme is designed to help computing students secure the knowledge, skills and behaviours needed to succeed in the workplace. Students will study a range of modules which include elements of theory and practical.");
          this.description.push("At our Stamford campus, this programme is offered as a general pathway in the field of computing, keeping doors open for a wide range of career paths and future study options. The programme aligns with level 4 and 5 of the Framework for Higher Education Qualifications (FHEQ), meaning those students wishing to progress to level 6 study can do so whilst feeling better prepared. Students have the option to study level 6 of the BSc (Hons) Computing and Information System at UCP subject to successful interview.");
          this.description.push("Graduates from the Higher National Diploma in Computing will have developed a sound understanding of the principles in their field of study and will have learned to apply those principles more widely. Graduates will have learned to evaluate the appropriateness of different approaches to solving problems.");
          this.description.push("Students will be able to perform effectively in their chosen field and will have the qualities necessary for employment in situations requiring the exercise of personal responsibility and decision-making. Furthermore, graduates will have developed a range of transferable skills to ensure effective team working, independent initiatives, organisational competence and problem-solving strategies. They will be adaptable and flexible in their approach to computing, show resilience under pressure, and meet challenging targets within a given resource.");
          this.title = "HND Computing";
          this.ucasPoints = 55;
          break;

        case 5:
          this.description.push("The BSc (Hons) Construction degree prepares students for an exciting career in the construction industry. The construction industry is vital to the UK economy. Around 10% of the workforce is employed in this industry, which provides a wide range of opportunities for construction graduates. The career opportunities in the construction industry are unique because they are closely linked to allied engineering sectors, e.g. civil and mechanical engineering.");
          this.description.push("We are well suited for this course because of Peterborough’s historical roots in construction education spanning decades and the partnerships with major employers, e.g. Atkins Global, Princebuild and Skanska.");
          this.description.push("This course will enable graduates to develop their capacity for leadership positions in the construction sector. An integral aspect of this degree is the introduction of a structured placement to encourage students without prior experience in the construction industry to gain practical work experience. Students are able to develop their communication, numeracy, IT, teamwork, analytical and problem solving skills within a built environment context.");
          this.description.push("At Level 4, students learn the background applications of science in construction, principles of the UK legal systems, economics, professional skills, modern house building methods, site management, and surveying.");
          this.description.push("At Level 5, they investigate resource management to identify and manage the resources required to operate a construction organisation with focus on the development process.");
          this.description.push("At Level 6, students will have a knowledge of lean and value management, and new exciting modules on environment and sustainability. The Undergraduate Project provides a platform for students to work independently to develop expertise in a specified area that can deliver design solutions for a construction project.");
          this.title = "BSc (Hons) Construction";
          this.ucasPoints = 100;
          break;

        case 6:
          this.description.push("Are you interested in the problem of crime in contemporary societies? If so, our Criminology course may be for you.");
          this.description.push("As a Criminology student, you will investigate the nature of crime and criminality as well as studying societies response through the criminal justice system. You’ll learn about the social and personal impacts of crime and what it means to be a victim of crime. You will understand how societies control and punish disorder and study forms of transnational crime that cross national borders.");
          this.description.push("Criminology takes a social scientific approach to studying and classifying crime as well as exploring theories around criminal behaviour. In addition to theory, you will study the institutions of the criminal justice system including police, law courts, prisons and probation services. Students will get the opportunity to take trips to the Crown Court (including the Old Bailey) and participate in the Peterborough Crime Walk, police riot training and prison visits.");
          this.description.push("As a Criminology student, you will learn how to conduct independent research drawing on a range of methods utilised by social scientists. You’ll also be encouraged and supported to adopt an interdisciplinary problem-solving approach to social issues working collaboratively with students from other disciplines to find solutions.");
          this.description.push("Finally you will hone in on your future career path, testing your interests and skills working with local organisations and building your professional network for when you graduate.");
          this.description.push("You will have the opportunity to undertake a live research project with a range of local partners and undertake research that makes a material difference to people’s lives. This will enable you to graduate not just with a good degree but a range of real world experience which will help you progress into your desired career.");
          this.title = "BA (Hons) Criminology";
          this.ucasPoints = 110;
          break;

        case 7:
          this.description.push("<b>UPDATE - For September 2021 we plan to offer both an FdA and BA (Hons) to include photography and graphics pathways (subject to validation).</b>");
          this.description.push("This industry driven two-year course provides a quick route into the digital and creative industries. The course is aimed at students with creative talents seeking to develop professional-standard skills to work in the creative and digital sectors. The digital and creative sectors have been identified as growing sectors both regionally and nationally. We will provide you with the skills and support to launch your career as a creative practitioner in one of the many occupations available in the creative and digital industries.");
          this.description.push("On the course you will be introduced to the basic principles of graphic design, animation and photography as well as learning new design technologies like mobile app and computer games design. You will learn about the central debates and discourses that inform contemporary digital art and design and understand the industry in which you will work. You will learn to critically appraise your own work and the work of others, in a constructive and productive way.");
          this.description.push("You will have the opportunity to do a 120 hour / three week work placement with a design agency or media organisation or work on an industry commission. You will learn to work creatively and problem solve in a group in ‘live’ projects and real-world briefs. The course culminates with modules that will enable you to showcase your talents and get feedback for your ideas from industry professionals.");
          this.description.push("Throughout the course you will be supported in developing your professional profile and your entrepreneurial skills to ensure a smooth transition to professional employment. All students completing the course will have a portfolio of work (physical and digital) to show to prospective employers and you will have multiple opportunities on the course to develop your network of professional contacts.");
          this.title = "FdA Digital Arts";
          this.ucasPoints = 45;
          break;

        case 8:
          this.description.push("There will continue to be a very high demand for teachers in Peterborough with a 19% increase in 5 to 14 year olds from 2015 to 2036 (Source: Cambridgeshire Research Group, 2015 Based Population Forecasts). This makes education a growing sector offering good employment opportunities for students studying locally.");
          this.description.push("Education has a fundamental role to play in personal, social and professional development. Through education, you can make a difference in the lives of many learners from different and diverse backgrounds. This degree offers you the opportunity to develop the professional knowledge, skills and understanding required to follow a career in education.");
          this.description.push("You will become aware of the factors affecting learners’ achievement so that you can promote continuous improvement and educational achievement among all students in a wide array of learning institutions. The course will also give you the tools to become a reflective practitioner and an independent, critical problem-solver.");
          this.description.push("Within the course you will explore topical issues relating to education and society; raising achievement through inclusion and look at the underlying principles of the educational system. The course looks at educational issues at various life stages rather than concentrating on a single phase. This will give you the opportunity to become aware of, and investigate educational issues of particular personal interest and related to your career aspirations.");
          this.title = "BA (Hons) Education Studies (Top-up)";
          this.ucasPoints = 100;
          break;

        case 9:
          this.description.push("This engineering qualification provides a specialist work-related programme of study that covers the key knowledge, understanding and practical skills required in the engineering sector.");
          this.description.push("There are a choice of three different pathways that offers particular specialist emphasis through specialist units.");
          this.description.push("<strong>&gt</strong> Electrical and Electronic Engineering (HNC)");
          this.description.push("<strong>&gt</strong> Manufacturing Engineering (HNC/HND)");
          this.description.push("<strong>&gt</strong> Mechanical Engineering (HNC)");
          this.description.push("During the course you will study mandatory units in engineering design, engineering maths and engineering science. You will develop knowledge and undertake a range of projects mixed with academic theory, creating highly skilled and motivated individuals that have the opportunity to progress into a broad range of engineering careers.");
          this.description.push("If you are working within the engineering field or have ambitions of working in this area in a professional, managerial, or technical capacity, then these courses are for you.");
          this.description.push("HNC / HND’s provide a nationally recognised qualification (HNC 120 credits / HND 240 credits) offering career progression and professional development for those already in employment and opportunities to progress on to an honours degree programme.");
          this.description.push("These qualifications are taught at Peterborough College and offer full-time and part-time study options.");
          this.title = "HNC Engineering (Electrical and Electronic)";
          this.ucasPoints = 55;
          break;

        case 10:
          this.description.push("Are you passionate about literature? Are you always reading books, thinking about books and talking about books? Are you an imaginative and creative person, and do you want to work in a career that draws on these talents? If so, our English Literature degree might be the course just for you.");
          this.description.push("In your first year, you will be introduced to the key skills that have traditionally underpinned literary criticism (such as genre analysis, textual analysis, and writing for audiences), as well as those that are more akin to the publisher of today.");
          this.description.push("In your second year you will build on this knowledge base with a set of modules that draw on and challenge the literary canon. A wide range of texts are selected to broaden your knowledge of literary movements and encourage you to become creative, critical, free thinkers.");
          this.description.push("In your final year you will undertake a dissertation project that will let you explore a topic of your choice. Students have proposed a wide range of topics in the past, from the vegetarian utopia of Shelley, via mental health, femininity and the supernatural in gothic fiction; representations of ‘The Oriental’ in Tintin; the links between hip-hop and poetry, through to dragons and their symbolic resonance in the fantasy genre.");
          this.description.push("The degree runs an annual Literary Festival featuring established authors and poets. These popular events are free for students and members of the public to attend.");
          this.title = "BA (Hons) English Literature";
          this.ucasPoints = 100;
          break;

        case 11:
          this.description.push("Are you interested in crime, forensic science and policing, but unsure which subject to study? If so, you will cover them all on our course. We combine the crime scene examination part of forensic science with other crime-related subjects such as policing and criminal justice.");
          this.description.push("We will help you to understand both the theoretical and practical aspects of forensic and criminal investigations. We will look at the impact of various crime types on victims and how the police deal with the investigation to bring about justice.");
          this.description.push("In the classroom, you will explore the investigative techniques used by police services, alongside contemporary issues including evidence based policing and crime prevention. You will also gain experience in dealing with a wide range of crime scenes, from burglaries to murders, including scenes of mass disaster and skeletal remains.");
          this.description.push("Learning about the criminal justice system in the UK, you will find out how your investigation of different crimes can have a significant impact, and how to report your investigative findings to other professional colleagues.");
          this.description.push("Our lecturers have first-hand experience of crime scene analysis, policing and criminal justice. As well as benefiting from their knowledge, you will have guest lectures from visiting professionals and get an understanding of the workplace through visits to places such as the Crown Court, and other field trips. The course has close links with Cambridgeshire Constabulary and we ensure that you learn from industry experts.");
          this.title = "BSc (Hons) Forensic Investigation";
          this.ucasPoints = 110;
          break;

        case 12:
          this.description.push("Are you interested in the past and how it shapes the future? Are you fascinated by the history of your environment - of the buildings and landscapes that comprise it and the laws and institutions that animate it? Do you view the present as continuous with the past or do you see the past as a series of more or less violent ruptures leading up to the present? Are you passionate about the historical world and its importance for understanding the present? Are you interested in a career in the Heritage Industries – in a fast developing sector that contributes more to the UK economy than the Agricultural and Aerospace industries combined?");
          this.description.push("If so our BA (Hons) History and Archaeology course may be for you. The course is a unique combination of history and archaeology modules designed to create an integral course that supports students that want to pursue careers in either discipline.");
          this.description.push("We aimed to create a course that at one and the same time satisfies the intellectual curiosity of history/archaeology students while providing the best possible opportunity for progression into the graduate jobs market in education and teaching or the heritage sector.");
          this.description.push("The course was developed in consultation with academics and industry professionals to ensure that the skills with which our students graduate align as closely as possible with the skills required by industry.");
          this.description.push("During your studies you will have the opportunity to undertake a work placement with one of a range of heritage organisations in the city and wider region. These include Vivacity, Headland Archaeology, Oxford East Archaeology and Historic England.");
          this.description.push("The greater Peterborough area is steeped in history which includes Bronze Age sites at Flag Fen and Must Farm as well as the Peterborough Cathedral which is over 900 years old.");
          this.title = "BA (Hons) History and Archaeology";
          this.ucasPoints = 100;
          break;

        case 13:
          this.description.push("Do you ever wonder why people act in the way that they do or what makes you who you are? Would you like to understand the psychological factors and how this links up with broader society? Do you find yourself wondering what part of human behaviour is explained by nature and what part is down to the society we live in?");
          this.description.push("If so then the BA (Hons) Psychosocial Studies course at University Centre Peterborough may be of interest to you. Psychosocial Studies is a unique subject that addresses both individual experiences and larger social processes. In the course you will be introduced to the core concepts that shape the discipline and the key tools with which to undertake social analysis and research.");
          this.description.push("You will ponder the big questions relating to identity, wellbeing, ageing as well as broader questions relating to social justice like inequality and discrimination. You will also learn the skills of a social scientist, you will be capable of formulating research questions and investigating them on your own.");
          this.description.push("You will undertake research independently and as a member of a group and you will gain an insight into the city and the wider region - the problems and challenges it faces and the ingenuity and energy with which it meets these.");
          this.description.push("Finally you will hone in on your future career path testing your interests and skills working with local organisations and building your professional network for when you graduate.");
          this.description.push("You will have the opportunity to undertake a live research project with a range of local partners and undertake research that makes a real difference to the life of the city and the broader region. This will enable you to graduate not just with a good degree but a range of real world experience which will help you progress into your desired career.");
          this.title = "BA (Hons) Psychosocial Studies";
          this.ucasPoints = 110;
          break;

        case 14:
          this.description.push("If you are someone who is deeply curious about the world around you, and perhaps wants to explore ways to solve the important problems faced by society, then you might already be a sociologist. Sociology asks the big questions, for example those about racism, sexism, social class, culture, politics and the media. It objectively examines how societies change and what prompts these shifts. It also looks into various aspects of our lives: our work, our education, our relationships, our identities, in addition to the media we consume and the things we buy.");
          this.description.push("Sociologists are also increasingly interested in the internet and the role it has in our lives: why are we addicted to our mobile phones, why do we post things on social media and what does the future hold when we have all this knowledge in our pockets? Ultimately, we want to identify solutions to the problems faced by society and then work towards changing the world for the better. Sociology is critical, engaging, interesting and, more often than not, fun.");
          this.description.push("You will be introduced to the core concepts that shape the discipline and the key tools with which to undertake social analysis and research. You will ponder all these big sociological questions while developing as a social scientist who is capable of formulating research questions and investigating them on your own. This research will help you gain an insight into the city and the wider region - the problems and challenges it faces and the ingenuity and energy with which it meets these.");
          this.description.push("Finally you will hone in on your future career path testing your interests and skills working with local organisations and building your professional network for when you graduate. You will have the opportunity to undertake live research projects with a range of local partners and undertake research that makes a significant difference to people’s lives. This will enable you to graduate not just with a good degree but a range of real world experiences which will enable you to progress onto your desired career.");
          this.description.push("<strong>The 2019 National Student Survey (NSS) which measures student satisfaction on courses had a NSS results of 100% for the Sociology degree.</strong>");
          this.title = "BA (Hons) Sociology";
          this.ucasPoints = 110;
          break;

        case 15:
          this.description.push("The BSc (Hons) Sport and Exercise Science degree will provide you with the skills and knowledge to prepare you for a career in sport, leisure or the health industry.");
          this.description.push("This course follows a multi-disciplinary approach where you will study core modules such as physiology, performance analysis, coaching and psychology and learn about the interaction between these core disciplines as experienced in real life settings. You will develop a theoretical understanding of Sport and Exercise Science and be able apply it to practice.");
          this.description.push("These scientific methods are explored with a specialised laboratory environment utilising the latest technology and analytical equipment in a small, friendly and supportive setting. As well as lectures at our Peterborough campus, students will use a state-of-the-art sports laboratory, gym facilities and sports hall at Peterborough College.");
          this.description.push("Employability is a key theme and will be embedded into your modules. Throughout your studies you will gain significant experience in the sports industry working with sports teams and organisations such as Peterborough United Football Club, Peterborough Rowing Club and a variety of educational institutions. Previous students have worked in local schools as teaching assistants in PE lessons gaining valuable experience in teaching (an enhanced DBS check is required).");
          this.description.push("In addition to your degree you will have opportunities to undertake additional qualifications as part of your degree to equip you with the skills and knowledge to be successful in your subject area.");
          this.description.push("We hold annual sports conferences where you will learn and present emerging themes within the sport industry. Previous guests speakers include Mike Phelan (Manchester United Assistant Manager), Andy Etches (Director of Rezzil Virtual Reality) and Steve Gunn (GB Rowing Coach).");
          this.description.push("<strong>The 2019 National Student Survey (NSS) which measures student satisfaction on courses had a NSS results of 100% for the Sport and Exercise Science degree.</strong>");
          this.title = "BSc (Hons) Sport and Exercise Science";
          this.ucasPoints = 100;
          break;
      }

      this.description.push("The courses at University Centre Peterborough are studied in smaller class sizes compared with other universities, a typical class size is under 30 students.");
    }
  },
  data() {
    return {
      courseId: 0,
      title: "",
      //Array of description
      description: [],
      ucasPoints: 0
    };
  }
};
</script>

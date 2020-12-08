<template>
  <div id="courseSearch" class="fullHeight">
    <div class="parentDiv">
      <div v-on:click="displaySearchResults()">
        <div class="fas fa-search boxed searchIcon"></div>
      </div>
      <input type="text" id="searchBar" class="searchBar" v-on:keyup.enter="displaySearchResults()"/>
    </div>
    <div
      class="boxed resultsBox"
      v-bind:style="{ height: searchResultsHeight }"
    >
      <CourseBox
        v-for="{name, description, image, link, ucasPoints} in courses"
        v-bind:key="name"
        :title="name"
        :description="description"
        :image="image"
        :link="link"
        :ucas-points="ucasPoints"
      />
      <!-- <CourseBox
        v-bind:title="name"
        v-bind="data"
      /> -->
      <!--<CourseBox
        title="Jim John's Jamboree"
        description="Lorem ipsum"
        image=""
        link="index.html"
      />
      <CourseBox
        title="Lux"
        description="Lorem ipsum"
        image=""
        link="index.html"
      />
      <CourseBox
        title="Juj"
        description="Lorem ipsum"
        image=""
        link="index.html"
      />
      <CourseBox
        title="Sample Text"
        description="Lorem ipsum"
        image=""
        link="index.html"
      />-->
    </div>
  </div>
</template>

<script>
import CourseBox from "../components/CourseBox.vue";
import { eventBus, NavBarUpdate, SearchUpdated } from "../EventBus.js";

export default {
  el: "#courseSearch",
  name: "CourseSearch",
  components: {
    CourseBox
  },
  data() {
    return {
      searching: true,
      searchResultsHeight: "10em",
      courses: [
        {
          name: "BSc (Hons) Accounting and Finance",
          description:
            "This course includes a wide range of skills identified by both employers and the Association of Chartered Certified Accountants (ACCA) as being important for accountancy and finance graduates in the 21st century.",
          ucasPoints: 100,
          link: "index.html",
          image: ""
        },
        {
          name: "HNC/HND Animal Management (Animal Behaviour and Welfare)",
          description:
            "The Animal Management sector is evolving and expanding constantly and therefore requires an adaptable and knowledgeable workforce to meet these changes. This course will provide you with a solid in-depth introduction to animal welfare and management, to meet employer demands in such a competitive industry.",
          ucasPoints: 45,
          link: "index.html",
          image: ""
        },
        {
          name: "BSc (Hons) Biological Sciences",
          description:
            "There is a high demand for fully trained and skilled professionals within STEM sector and especially scientific and technological roles. There are nearly 6,000 jobs in Peterborough alone, which is part of a large cluster of life science employers throughout Cambridgeshire.",
          ucasPoints: 110,
          link: "index.html",
          image: ""
        },
        {
          name: "HND Computing",
          description:
            "The Higher National Diploma in Computing is a nationally recognised university-level programme which places emphasis on employer engagement and work readiness. The programme is designed to help computing students secure the knowledge, skills and behaviours needed to succeed in the workplace. Students will study a range of modules which include elements of theory and practical.",
          link: "index.html",
          ucasPoints: 55,
          image: ""
        },
        {
          name: "BSc (Hons) Construction",
          description:
            "The BSc (Hons) Construction degree prepares students for an exciting career in the construction industry. The construction industry is vital to the UK economy. Around 10% of the workforce is employed in this industry, which provides a wide range of opportunities for construction graduates. The career opportunities in the construction industry are unique because they are closely linked to allied engineering sectors, e.g. civil and mechanical engineering.",
          ucasPoints: 100,
          link: "index.html",
          image: ""
        },
        {
          name: "BA (Hons) Criminology",
          description:
            "Are you interested in the problem of crime in contemporary societies? If so, our Criminology course may be for you. As a Criminology student, you will investigate the nature of crime and criminality as well as studying societies response through the criminal justice system. You’ll learn about the social and personal impacts of crime and what it means to be a victim of crime.",
          ucasPoints: 110,
          link: "index.html",
          image: ""
        },
        {
          name: "FdA Digital Arts",
          description:
            "This industry driven two-year course provides a quick route into the digital and creative industries. The course is aimed at students with creative talents seeking to develop professional-standard skills to work in the creative and digital sectors. The digital and creative sectors have been identified as growing sectors both regionally and nationally.",
          ucasPoints: 45,
          link: "index.html",
          image: ""
        },
        {
          name: "BA (Hons) Education Studies (Top-up)",
          description:
            "There will continue to be a very high demand for teachers in Peterborough with a 19% increase in 5 to 14 year olds from 2015 to 2036 (Source: Cambridgeshire Research Group, 2015 Based Population Forecasts). This makes education a growing sector offering good employment opportunities for students studying locally.",
          ucasPoints: 100,
          link: "index.html",
          image: ""
        },
        {
          name: "HNC Engineering (Electrical and Electronic)",
          description:
            "This engineering qualification provides a specialist work-related programme of study that covers the key knowledge, understanding and practical skills required in the engineering sector.",
          ucasPoints: 55,
          link: "index.html",
          image: ""
        },
        {//eng lit
          name: "BA (Hons) English Literature",
          description:
            "Are you passionate about literature? Are you always reading books, thinking about books and talking about books? Are you an imaginative and creative person, and do you want to work in a career that draws on these talents? If so, our English Literature degree might be the course just for you.",
          ucasPoints: 100,
          link: "index.html",
          image: ""
        },
        {
          name: "BSc (Hons) Forensic Investigation",
          description:
            "Are you interested in crime, forensic science and policing, but unsure which subject to study? If so, you will cover them all on our course. We combine the crime scene examination part of forensic science with other crime-related subjects such as policing and criminal justice.",
          ucasPoints: 110,
          link: "index.html",
          image: ""
        },
        {//history archeology
          name: "BA (Hons) History and Archaeology",
          description:
            "Are you interested in the past and how it shapes the future? Are you fascinated by the history of your environment - of the buildings and landscapes that comprise it and the laws and institutions that animate it? Do you view the present as continuous with the past or do you see the past as a series of more or less violent ruptures leading up to the present?",
          ucasPoints: 100,
          link: "index.html",
          image: ""
        },
        {
          name: "BA (Hons) Psychosocial Studies",
          description:
            "Do you ever wonder why people act in the way that they do or what makes you who you are? Would you like to understand the psychological factors and how this links up with broader society? Do you find yourself wondering what part of human behaviour is explained by nature and what part is down to the society we live in?",
          ucasPoints: 110,
          link: "index.html",
          image: ""
        },
        {
          name: "BA (Hons) Sociology",
          description:
            "If you are someone who is deeply curious about the world around you, and perhaps wants to explore ways to solve the important problems faced by society, then you might already be a sociologist. Sociology asks the big questions, for example those about racism, sexism, social class, culture, politics and the media.",
          ucasPoints: 110,
          link: "index.html",
          image: ""
        },
        {
          name: "BSc (Hons) Sport and Exercise Science",
          description:
            "The BSc (Hons) Sport and Exercise Science degree will provide you with the skills and knowledge to prepare you for a career in sport, leisure or the health industry.",
          ucasPoints: 100,
          link: "index.html",
          image: ""
        }
      ]
    };
  },
  methods: {
    displaySearchResults() {
      // if (document.getElementById("searchBar").value.length > 0) {
      this.searchResultsHeight = "30em";
      this.searching = true;
      eventBus.emit(SearchUpdated, {
        searchInput: document.getElementById("searchBar").value
      });
      eventBus.emit(NavBarUpdate);
      //}
    }
  }
};
</script>

<style scoped>
.parentDiv {
  font-size: 0;
  display: flex;
  margin-right: 40px;
}

.searchIcon:before {
  padding: 0;
  margin: 0;
}

.searchIcon {
  margin: 0;
  font-size: 35px;
}

.searchIcon:hover {
  cursor: pointer;
}

.boxed {
  border: 1px solid black;
  border-collapse: collapse;
  margin-bottom: 0;
  padding-bottom: 0;
}
.borderRight {
  border-right: 1px solid black;
}

.searchBar {
  border-radius: 0;
  border-width: 1px;
  height: 35px;
  border-left: 0px;
  padding-bottom: 1px;
  width: 100%;
}

.resultsBox {
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: 40px;
  background-color: gainsboro;
  height: 30em;
  padding-right: 17px;
  border-top: 0;
}
</style>

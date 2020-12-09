<template>
  <div class="fullMinHeight">
    <Banner />
    <div class="columns fullHeight">
      <div class="column is-narrow">
        <NavBar />
      </div>
      <div class="column">
        <NewsBox
          title="The Time Management Skills of a Not-So-Superwoman"
          full-article-link="https://www.ucp.ac.uk/news/the-time-management-skills-of-a-not-so-superwoman/"
          article="My day to other people often seems like part of a well organised machine that is on time, with all the right words in my head, answers at the ready and everything going to plan. My day to me seems like I’m peddling a unicycle uphill while juggling a pack of angry geese. I am currently in the second year of a full time English Literature degree with six children living at home. Every day I make it on time, and able to say anything remotely useful, is a definite win. I am currently working at a 1:1 and I am proud of this. I don’t have all the answers, but I’ve learned a few things about myself and how to manage my time effectively."
          image-src="Prospectus1.png"
          image-alt-text="Image"
        />
        <NewsBox
          title="Updated Covid-19 guidance for students"
          full-article-link="https://www.ucp.ac.uk/news/updated-covid-19-guidance-for-students/"
          article="Following the Prime Minister’s address on 22 September 2020 and the new restrictions that are to be implemented in England, we are taking some further actions to mitigate the risks of COVID-19 infections. These actions are important as we continue to prioritise the health and safety of our staff and students. We are also taking these actions to minimise the impact and disruption to learning and working of others following a confirmed case. Therefore from Monday..."
          image-src="logo.png"
          image-alt-text="Image"
        />
        <NewsBox
          title="Induction 2020"
          full-article-link="https://www.ucp.ac.uk/news/induction2020/"
          article="As part of the induction process for new students starting University Centre Peterborough in September, please watch the presentation video below (duration 13 minutes). Remember to have your volume enabled to hear commentary from Liz Knight, Academic Director."
          image-src="logo.png"
          image-alt-text="Image"
        />
        <NewsBox
          title="Information for students starting in September 2020"
          full-article-link="https://www.ucp.ac.uk/news/information-for-applicants-starting-in-september-2020/"
          article="Here you can find out the latest information regarding Coronavirus / Covid-19 and how this affects new and current students at University Centre Peterborough (UCP) starting in September 2020."
          image-src="logo.png"
          image-alt-text="Image"
        />
        <NewsBox
          title="Apply for a degree through Clearing"
          full-article-link="https://www.ucp.ac.uk/news/apply-for-a-degree-through-clearing/"
          article="Studying a degree at University Centre Peterborough will mean that you can benefit from smaller class sizes, plenty of individual support from your lecturers and still get face-to-face teaching from September 2020 as we can offer a blending learning approach. As the majority of courses are studied as two full days a week plus there are part-time study options, you can really fit studying a degree around family, work or personal commitments."
          image-src="logo.png"
          image-alt-text="Image"
        />
        <NewsBox
          title="New chapter for education with launch of the Inspire Education Group"
          full-article-link="https://www.ucp.ac.uk/news/new-chapter-for-education-with-launch-of-the-inspire-education-group/"
          article="Peterborough Regional College and New College Stamford officially merged on 1st August 2020 to form the new Inspire Education Group (IEG) alongside University Centre Peterborough. As part of the merger, the colleges will be known as Peterborough College and Stamford College and will rebrand in line with the IEG. Overall, the group is now responsible for 1,250 staff, 8,500 Further Education students, 800 Higher Education students and 1,400 apprentices."
          image-src="logo.png"
          image-alt-text="Image"
        />
        <NewsBox
          title="Our commitment to HE in the local area"
          full-article-link="https://www.ucp.ac.uk/news/our-commitment-to-he-in-the-local-area/"
          article="Following the announcement by the Cambridgeshire and Peterborough Combined Authority on Tuesday 14 July 2020, for the development of an independent university for Peterborough, University Centre Peterborough (UCP) can confirm that we are fully committed to providing higher education for the local area now and in the future. All of the degrees at University Centre Peterborough have been developed by working with local employers to provide graduates with the knowledge, skills and experience required for the workplace."
          image-src="logo.png"
          image-alt-text="Image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NavBar from "../components/NavBar.vue";
import NewsBox from "../components/NewsBox.vue";
import { eventBus, NavBarUpdate } from "../EventBus.js";

export default {
  name: "NewsPage",
  components: {
    Banner,
    NavBar,
    NewsBox
  },
  mounted() {
    eventBus.emit(NavBarUpdate);
  }
};
</script>

<template>
  <div class="fullHeight">
    <Banner />
    <div class="columns fullHeight">
      <div class="column is-narrow">
        <NavBar />
      </div>
      <div class="column">
        <div class="box">
          <!-- COVID Information goes here -->
          <p>
            Following the Prime Minister’s address on 22 September 2020 and the new restrictions that are to be implemented in England, we are taking some further actions to mitigate the risks of COVID-19 infections. These actions are important as we continue to prioritise the health and safety of our staff and students. We are also taking these actions to minimise the impact and disruption to learning and working of others following a confirmed case. Therefore from Monday 28 September 2020:
          </p>
          <br />
          <p>
            <strong>&gt; Face coverings or visors are to be worn indoors at all times by staff and students (unless you are working on your own / independently away from others)</strong>
          </p>
          <br />
          <p>
            All students are reminded that there is extensive information on the UCP’s website, including the ‘FAQ for students before starting in September 2020’ which you can access using the link below.
          </p>
          <br />
          <p>
            <strong>&gt;</strong> <a href="www.ucp.ac.uk/faq-for-students-before-starting-in-september-2020">www.ucp.ac.uk/faq-for-students-before-starting-in-september-2020</a>
          </p>
          <br />
          <p>
            <strong>IMPORTANT</strong> – Students must notify us if
          </p>
          <br />
          <p><strong>&gt;</strong> You have COVID symptoms</p>
          <p><strong>&gt;</strong> You have been contacted by NHS Track and Trace and told to self-isolate e.g. because a member of your household has had a positive test</p>
          <p><strong>&gt;</strong> You have had a positive test result</p>
          <br />
          <p><strong>IMPORTANT -</strong> All students are reminded of the following:</p>
          <br />
          <p><strong>&gt;</strong> Follow social distancing protocols – 2 metre distance where possible, 1 metre within classrooms and workshops</p>
          <p><strong>&gt;</strong> Regularly wash your hands and use hand sanitizer</p>
          <p><strong>&gt;</strong> Follow directional signage around campus</p>
          <p><strong>&gt;</strong> Do not cross geographical bubbles</p>
          <br />
          <p>For students on the BA (Hons) Sport &amp; Exercise Science, we are awaiting further guidance on whether there are further mitigations and actions we need to take following the new restrictions. Your tutors will discuss these with you should the need arise.</p>
          <br />
          <p>Finally, see below a letter from NHS and Public Health Senior Officials. The letter reminds us all of COVID symptoms, when to get a test and the rules around self-isolation. Please see the link below to access this letter.</p>
          <br />
          <a class="button" href="https://ucp-live.storage.googleapis.com/upload/www.ucp.ac.uk/news/23rd%20September%20-%20PHE%20letter%20to%20parents%20and%20guardians.pdf?inline=true">Download</a>
        </div>
        <p class="subtitle">Official Links:</p>
        <div class="box">
          <!-- Government links -->
          <a href="https://www.gov.uk/">Official Government Website</a>
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
  name: "CovidPage",
  components: {
    NavBar,
    Banner
  },
  mounted() {
    eventBus.emit(NavBarUpdate);
  }
};
</script>

<style scoped>
.box {
  margin-right: 40px;
}
</style>

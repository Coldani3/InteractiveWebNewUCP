<template>
  <div class="fullHeight">
    <Banner />
    <div class="columns fullHeight">
      <div class="column is-narrow">
        <NavBar />
      </div>
      <div class="column">
        <div>
          <p class="title">Applying to UCP is easy!</p>
          <p class="subtitle">Just follow these 3 simple steps</p>
          <div class="columns">
            <div class="column is-one-third">
              <p class="subtitle">Choose your Course!</p>
              <p>UCP offers a wide range of undergraduate, foundation degrees and bachelors, as well as postgraduate diploma qualifications.</p>
            </div>
            <div class="column is-one-third">
              <p class="subtitle">Check your Qualifications!</p>
              <p>Once you have decided on the course you would like to study, you need to check that you meet the entry requirements.</p>
            </div>
            <div class="column is-one-third">
              <p class="subtitle">Make an Application!</p>
              <p>Once you have chosen your degree course you are ready to make an application.</p>
            </div>
          </div>
          <br />
        </div>
        <div class="columns">
          <div class="column is-half">
            <ExpandingHelp title="Full-time Study" v-bind:contents="['If you are applying for a full-time undergraduate bachelor’s course you will need to make an online application through UCAS. Applications to UCAS are made online using their web-based Tracker System via ‘Apply’','<strong><a href=\'www.ucas.ac.uk\'\>www.ucas.ac.uk\/apply<\/a></strong>','On your UCAS application you need to include the institution code for the university to which you wish to apply. The institution code for University Centre Peterborough is P56. Application forms, accompanied by the registration fee, should be returned by UCAS deadlines <a href=\'http://www.ucas.com/apply/key-dates\'>http://www.ucas.com/apply/key-dates</a>.','Applications begin 1st September and the 1st deadline is 15 January in the year before the programme commences, although it is possible to apply later than this if courses still have vacancies. Anyone applying after the 30 June by 18:00 will be automatically entered into ‘Clearing’. Clearing takes place after the publication of the A Level results in August when universities will have a clearer picture of how many offers have been accepted and therefore how many vacancies they may have.' ]" />
          </div>
          <div class="column is-half">
            <ExpandingHelp title="Part-time Study" v-bind:contents="['If you are applying for a part-time course you can download a paper application form below.', 'Please fill out and return to: University Centre Peterborough, Park Crescent Campus, Peterborough, PE1 4DZ or via email to admissions@ucp.ac.uk ']" />
          </div>
        </div>
        <div class="button">
          <strong><a href='https://ucp-live.storage.googleapis.com/upload/www.ucp.ac.uk/other/P921%20a%20HE%20Part%20Time%20Application%20Form.docx'>Download Application Form</a></strong>
        </div>
        <br />
        <br />
        <div class="columns">
          <div class="column is-half">
            <ExpandingHelp title="EU Students" v-bind:contents="['EU students applying for a full-time undergraduate course at University Centre Peterborough in the 2020/21 academic year will continue to have access to student loans and grants, even if the course concludes after the UK’s exit from the EU.']" />
          </div>
          <div class="column is-half">
            <ExpandingHelp title="International Students" v-bind:contents="['University Centre Peterborough are not accepting applications from International students for courses requiring a Tier 4 visa for the 2020/21 academic year.']" />
          </div>
        </div>
        <ExpandingHelp title="Selection" v-bind:contents="['When we receive your application form, an acknowledgement letter is issued and applications are reviewed by the appropriate member of staff in Admissions. Successful applicants will receive either a conditional or unconditional offer. In addition, you may be invited to an interview or assessment centre, or requested to submit a portfolio of work or samples of writing depending on the course you have applied for.','Upon receiving an offer, applicants are requested to obtain or provide evidence of further or pending qualifications that will allow them to fully satisfy the course entry criteria. Students with a conditional offer may, for example, be awaiting final results for their A Levels. Unconditional offers may also be issued directly to applicants whose qualifications fully satisfy the entry criteria of their desired course.']" />
        <ExpandingHelp title="Disabled Students" v-bind:contents="['University Centre Peterborough welcomes enquiries and applications from disabled students whether disability is due to mobility or sensory impairment, specific learning difficulties, mental health issues or a medical condition.','Applications from disabled students are processed the same way but applicants should declare their disability at the application stage so that UCP can contact you to assess how to meet any support needs you may have. Disabled applicants may be invited to visit the campus so that this can be done in person.']" />
        <div class="columns">
          <div class="column is-one-third">
            <ExpandingHelp title="Accreditation of Prior Certificated Learning (APCL)" v-bind:contents="['APCL relates to learning completed through an earlier course of study. If you have previously completed a course which is relevant to your proposed course, you should make this clear when you apply for admission. To be eligible for consideration in this way you must be able to submit certification, which shows your success in a final assessment for that course. Learning must be current i.e. completed within the last five years.','Or further evidence of updating will be required. Simple participation in a course or an attendance certificate is not sufficient.']" />
          </div>
          <div class="column is-one-third">
            <ExpandingHelp title="Accreditation of Prior Learning (APL)" v-bind:contents="['UCP offers students mobility in their studies, by recognising learning they may have completed elsewhere, before applying to study. The Accreditation of Prior Learning processes ensure that we can take this into account when determining the modules you must study. It is important that you should identify any relevant prior learning when you apply. Should your previous study specifically relate to modules on the course you wish to undertake. We may approve a reduced programme of study, thus shortening the time it takes to obtain your award.', 'Where this relates to learning completed through an earlier course of study, this is called Prior Certificated Learning, and where learning has been achieved through relevant work or experience, this is referred to as Prior Experiential Learning. Claims must be approved before you commence a course.']" />
          </div>
          <div class="column is-one-third">
            <ExpandingHelp title="Accreditation of Prior Experiential Certificated Learning (APEL)" v-bind:contents="['It is important to understand that the APEL process does not award academic credit for experience alone, but for learning which can be shown to have been achieved through that experience. Students are required to prepare an individual case for the credit arising from their learning experiences. This normally means that a student receives support in the preparation of a portfolio, in which their claim is justified in detail and is supported by relevant evidence.', 'This portfolio of evidence is then submitted for assessment and the possible award of academic credit. Alternative methods of assessment of evidence may be available but need to be discussed with the appropriate Admissions Tutor.']" />
          </div>
        </div>
        <ExpandingHelp title="Criminal Convictions" v-bind:contents="['In most cases an applicant\'s criminal offences do not affect our decision as to whether or not we will make an offer of a place. However, we have a duty to investigate further any declared offences.','We may also require you to obtain an appropriate disclosure from the Disclosure and Barring Service (formerly the Criminal Records Bureau). If we do require this we will write to you with full information on obtaining the disclosure.','If you are applying for a course that will or may involve significant contact with children/vulnerable adults (e.g. teaching, nursing, midwifery, social work, public services) you must tell us about all criminal convictions and cautions (including verbal cautions) and bind over orders which would not be filtered in line with current guidance. (For the purposes of these courses no conviction is regarded as \'spent\' under the Rehabilitation of Offenders Act 1974). All applicants for such courses will be required to obtain an Enhanced Level Disclosure and Barring Service check before any offer can be confirmed. University Centre Peterborough will provide you with information about obtaining the disclosure at the appropriate time.','For other courses, you are only required to reveal \'relevant\' offences. Such offences are only those convictions for offences against the person, whether of a violent or sexual nature and convictions for offences involving unlawfully supplying controlled drugs or substances where the conviction concerns commercial drug dealing or trafficking. Any convictions regarded as spent under the Rehabilitation of Offenders Act 1974 are not regarded as relevant and need not be revealed.  However it should be noted that some professional bodies may not permit professional accreditation due to a criminal record.','The information you provide will be kept strictly confidential and will not be revealed to anyone except University staff directly involved in considering whether or not the criminal convictions prevent your application from being considered further.']" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NavBar from "../components/NavBar.vue";
import ExpandingHelp from "../components/ExpandingHelp.vue";

export default {
  name: "ApplyPage",
  components: {
    Banner,
    NavBar,
    ExpandingHelp
  }
};
</script>

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
            dui, imperdiet vitae magna nec, gravida maximus tortor. In hac
            habitasse platea dictumst. Quisque vestibulum nibh non maximus
            posuere. Morbi nisl lacus, pellentesque vitae arcu eget, pulvinar
            dignissim odio. Phasellus porta risus tortor. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Praesent sapien ligula, gravida eu faucibus vitae, semper ac orci.
            Sed cursus congue elit eu volutpat. Ut molestie blandit vehicula.
            Vestibulum sed ex ipsum. Integer ac massa ac justo finibus eleifend
            sit amet et mi. Mauris nec sem vitae sem iaculis lacinia. In vitae
          </p>
          <br />
          <p>
            In vitae euismod dui. Nullam suscipit massa efficitur rutrum
            fermentum. Pellentesque metus purus, ultrices vel dapibus a, congue
            eu dui. In mauris justo, ullamcorper in elit quis, tincidunt
            volutpat turpis. Nullam porta pretium elit a porta. Phasellus quis
            facilisis quam. Praesent ut posuere urna. Vestibulum sit amet
            sagittis dui, ut fringilla velit. Curabitur placerat urna a velit
            ultricies sollicitudin. Suspendisse ac egestas libero. Pellentesque
            et sapien libero. Morbi vitae vehicula felis. Proin quis mattis
            risus. Nulla a elit id metus dignissim auctor. Integer lobortis
            vestibulum fringilla. Aenean ac convallis massa.
          </p>
          <br />
          <p>
            Vestibulum rhoncus, odio non ultrices ullamcorper, magna sapien
            feugiat sem, sed volutpat lectus lectus et lectus. Duis hendrerit
            luctus odio vitae placerat. Vivamus laoreet vestibulum sodales.
            Vestibulum congue urna vitae lectus ultrices iaculis. In eget nulla
            hendrerit purus rhoncus dictum. Phasellus tristique aliquet
            eleifend. Pellentesque porta ex quis faucibus fermentum. Donec et
            lacinia lorem. Etiam viverra congue vestibulum. Duis nisi odio,
            lacinia sed ante ut, convallis dignissim justo. Donec facilisis et
            odio quis tempor. Donec ac lobortis magna. Quisque eget turpis eros.
            Duis sollicitudin in purus tincidunt laoreet. Proin tincidunt nisi
            ac velit facilisis egestas. Sed vitae gravida velit.
          </p>
          <br />
          <p>
            Vivamus sit amet scelerisque nunc, ac malesuada urna. Donec magna
            libero, molestie mattis bibendum posuere, placerat eu odio.
            Suspendisse id libero elit. Vivamus facilisis nunc sed commodo
            dapibus. Proin sed feugiat felis. Proin ac velit tellus. Nunc vel
            turpis a massa fermentum accumsan. Maecenas tempor mauris at ante
            laoreet, vitae rhoncus orci aliquam. Curabitur placerat massa ut
            accumsan congue. Mauris sollicitudin felis a dui mattis, non
            hendrerit ante placerat. Donec non nibh lacus. Donec lectus est,
            condimentum eu ullamcorper at, dignissim quis tellus. Nunc nec
            molestie metus. Cras ac convallis orci. In euismod consectetur
            posuere.
          </p>
          <br />
          <p>
            Morbi ultricies dui purus, nec fringilla dui elementum a. Integer
            sit amet viverra magna, a lacinia sem. Mauris quis porttitor urna.
            Integer vehicula tristique purus gravida egestas. Vestibulum
            tristique, massa porttitor cursus dignissim, tellus quam mollis
            erat, quis lacinia ante tortor at enim. Nunc ut urna magna.
            Curabitur dignissim sit amet eros nec feugiat. Aliquam molestie
            ullamcorper feugiat. In quis consectetur turpis. Vivamus malesuada
            vehicula dui nec tristique.
          </p>
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

export default {
  name: "CovidPage",
  components: {
    NavBar,
    Banner
  }
};
</script>

<style scoped>
.box {
  margin-right: 40px;
}
</style>

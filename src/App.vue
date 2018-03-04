<template>
  <main class="main" id="js-app" v-lazy-container="{ selector: 'img' }">
    <!-- Landing Page -->
    <section class="section u-flex-center landingPage test1b">
      <header>
        <h1 class="header text3d">Hello<br/>World</h1>
        <h2 clas="sub-header ext-center">welcome to my portfolio</h2>
      </header>
    </section>

    <section class="section u-flex-center section--bg-fixed jobPage">
      <h1 class="u-hidden">Portfolio</h1>
      <article class='slideshow ' >
        <header class='slide-header'>
          <h1 class='header slide-header__main'>Map Studio</h1>
          <h2 class='sub-header slide-header__sub'>Aug 2015 - Oct 2015</h2>
        </header>
        <input checked='checked' class='thumbnail-radio' id='thumbnail-ms-1' name='mapstudio' type='radio'>
        <label class='thumbnail thumbnail-1 direction-hover' for='thumbnail-ms-1' style='background-image: url(static/img/slides/mapstudio/mapstudio-01.jpg)'>
          Marketing
          <span class='direction-hover__right' data-label='Marketing'></span>
          <span class='direction-hover__left' data-label='Marketing'></span>
          <span class='direction-hover__top' data-label='Marketing'></span>
          <span class='direction-hover__bottom' data-label='Marketing'></span>
        </label>

        <input class='thumbnail-radio' id='thumbnail-ms-2' name='mapstudio' type='radio'>
        <label class='thumbnail thumbnail-2 direction-hover' for='thumbnail-ms-2' style='background-image: url(static/img/slides/mapstudio/mapstudio-02.png)'>
          Marketing
          <span class='direction-hover__right' data-label='Marketing'></span>
          <span class='direction-hover__left' data-label='Marketing'></span>
          <span class='direction-hover__top' data-label='Marketing'></span>
          <span class='direction-hover__bottom' data-label='Marketing'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-ms-3' name='mapstudio' type='radio'>
        <label class='thumbnail thumbnail-3 direction-hover' for='thumbnail-ms-3' style='background-image: url(static/img/slides/mapstudio/mapstudio-03.jpg)'>
          Posters
          <span class='direction-hover__right' data-label='Posters'></span>
          <span class='direction-hover__left' data-label='Posters'></span>
          <span class='direction-hover__top' data-label='Posters'></span>
          <span class='direction-hover__bottom' data-label='Posters'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-ms-4' name='mapstudio' type='radio'>
        <label class='thumbnail thumbnail--no-spacer thumbnail-4 direction-hover' for='thumbnail-ms-4' style='background-image: url(static/img/slides/mapstudio/mapstudio-04.jpg)'>
          Web Catalogue
          <span class='direction-hover__right' data-label='Web Catalogue'></span>
          <span class='direction-hover__left' data-label='Web Catalogue'></span>
          <span class='direction-hover__top' data-label='Web Catalogue'></span>
          <span class='direction-hover__bottom' data-label='Web Catalogue'></span>
        </label>
        <clazy-load class='main-image' id='main-ms-1' src="https://baconmockup.com/1920/1920" tag="picture">
      <!-- The image slot renders after the image loads. -->
      <img src="https://baconmockup.com/1920/1920" slot="image">
      <!-- The placeholder slot displays while the image is loading. -->
      <div slot="placeholder">
        <!-- You can put any component you want in here. -->
       <div style="width: 100%; background: red; padding-top: 70%;"></div>
      </div>
        </clazy-load>
        <!-- <img class='main-image' id='main-ms-1' data-src="static/img/slides/mapstudio/mapstudio-01.jpg" alt='Web banners' /> -->
        <img class='main-image' id='main-ms-2' data-src='static/img/slides/mapstudio/mapstudio-02.png' alt='Social media posts' />
        <img class='main-image' id='main-ms-3' data-src='static/img/slides/mapstudio/mapstudio-03.jpg' alt='Posters' />
        <img class='main-image' id='main-ms-4' data-src='static/img/slides/mapstudio/mapstudio-04.jpg' alt='Posters' />
        <div class='description'>
          <p class='description__slide'>
            MapStudio has been the leading publisher and distributor of maps, travel and lifestyle publications in Africa for over 55
            years. I worked closely with the marketing team to support all marketing and sales efforts.
          </p>
        </div>
      </article>
      <!-- Compulutions Section -->
      <article class='slideshow'>
        <header class='slide-header'>
          <h1 class='header slide-header__main'>Compulutions</h1>
          <h2 class='sub-header slide-header__sub'>Mar 2015 - Jul 2015</h2>
        </header>
        <input checked='checked' class='thumbnail-radio' id='thumbnail-com-1' name='compulutions' type='radio'>
        <label class='thumbnail thumbnail-1 direction-hover' for='thumbnail-com-1' style='background-image: url(static/img/slides/compulutions/compulutions.png)'>
          Brand ID
          <span class='direction-hover__right' data-label='Brand ID'></span>
          <span class='direction-hover__left' data-label='Brand ID'></span>
          <span class='direction-hover__top' data-label='Brand ID'></span>
          <span class='direction-hover__bottom' data-label='Brand ID'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-com-2' name='compulutions' type='radio'>
        <label class='thumbnail thumbnail-2 direction-hover' for='thumbnail-com-2' style='background-image: url(static/img/slides/compulutions/freight-rush.png)'>
          Brand ID
          <span class='direction-hover__right' data-label='Brand ID'></span>
          <span class='direction-hover__left' data-label='Brand ID'></span>
          <span class='direction-hover__top' data-label='Brand ID'></span>
          <span class='direction-hover__bottom' data-label='Brand ID'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-com-3' name='compulutions' type='radio'>
        <label class='thumbnail thumbnail-3 direction-hover' for='thumbnail-com-3' style='background-image: url(static/img/slides/compulutions/lcom.png)'>
          Brand ID
          <span class='direction-hover__right' data-label='Brand ID'></span>
          <span class='direction-hover__left' data-label='Brand ID'></span>
          <span class='direction-hover__top' data-label='Brand ID'></span>
          <span class='direction-hover__bottom' data-label='Brand ID'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-com-4' name='compulutions' type='radio'>
        <label class='thumbnail thumbnail--no-spacer thumbnail-4 direction-hover' for='thumbnail-com-4' style='background-image: url(static/img/slides/compulutions/nexgen.png)'>
          Brand ID
          <span class='direction-hover__right' data-label='Brand ID'></span>
          <span class='direction-hover__left' data-label='Brand ID'></span>
          <span class='direction-hover__top' data-label='Brand ID'></span>
          <span class='direction-hover__bottom' data-label='Brand ID'></span>
        </label>
        <img class='main-image' id='main-com-1' data-src='static/img/slides/compulutions/compulutions.png' alt='Compulutions Logo' />
        <img class='main-image' id='main-com-2' data-src='static/img/slides/compulutions/freight-rush.png' alt='Freight Rush' />
        <img class='main-image' id='main-com-3' data-src='static/img/slides/compulutions/lcom.png' alt='Lcom Vehicle Branding' />
        <img class='main-image' id='main-com-4' data-src='static/img/slides/compulutions/nexgen.png' alt='Nexgen Business Cards' />
        <div class='description'>
          <p class='description__slide'>
            I worked in partnership with back-end developer and founder of
            <a href="https://compulutions.co.za/" target="_blank">Compulutions (PTY) Ltd</a> to offer quality design and development services.
          </p>
        </div>
      </article>
      <!-- Yesman Section -->
      <article class='slideshow'>
        <header class='slide-header'>
          <h1 class='header slide-header__main'>Yesman</h1>
          <h2 class='sub-header slide-header__sub'>Jul 2010 - Feb 2015</h2>
        </header>
        <input checked='checked' class='thumbnail-radio' id='thumbnail-ym-1' name='yesman' type='radio'>
        <label class='thumbnail thumbnail-1 direction-hover' for='thumbnail-ym-1' style='background-image: url(static/img/slides/yesman/brands.png)'>
          DTP
          <span class='direction-hover__right' data-label='DTP'></span>
          <span class='direction-hover__left' data-label='DTP'></span>
          <span class='direction-hover__top' data-label='DTP'></span>
          <span class='direction-hover__bottom' data-label='DTP'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-ym-2' name='yesman' type='radio'>
        <label class='thumbnail thumbnail-2 direction-hover' for='thumbnail-ym-2' style='background-image: url(static/img/slides/yesman/gotv.png)'>
          3D Mockups
          <span class='direction-hover__right' data-label='3D Mockups'></span>
          <span class='direction-hover__left' data-label='3D Mockups'></span>
          <span class='direction-hover__top' data-label='3D Mockups'></span>
          <span class='direction-hover__bottom' data-label='3D Mockups'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-ym-3' name='yesman' type='radio'>
        <label class='thumbnail thumbnail-3 direction-hover' for='thumbnail-ym-3' style='background-image: url(static/img/slides/yesman/brochure-chapters.jpg)'>
          Inhouse Marketing
          <span class='direction-hover__right' data-label='Inhouse Marketing'></span>
          <span class='direction-hover__left' data-label='Inhouse Marketing'></span>
          <span class='direction-hover__top' data-label='Inhouse Marketing'></span>
          <span class='direction-hover__bottom' data-label='Inhouse Marketing'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-ym-4' name='yesman' type='radio'>
        <label class='thumbnail thumbnail--no-spacer thumbnail-4 direction-hover' for='thumbnail-ym-4' style='background-image: url(static/img/slides/yesman/brochure-products.jpg)'>
          Brochure
          <span class='direction-hover__right' data-label='Brochure'></span>
          <span class='direction-hover__left' data-label='Brochure'></span>
          <span class='direction-hover__top' data-label='Brochure'></span>
          <span class='direction-hover__bottom' data-label='Brochure'></span>
        </label>
        <img class='main-image' id='main-ym-1' data-src='static/img/slides/yesman/brands.png' alt='Yesman Clients' />
        <img class='main-image' id='main-ym-2' data-src='static/img/slides/yesman/gotv.png' alt='3D Mocukups for clients' />
        <img class='main-image' id='main-ym-3' data-src='static/img/slides/yesman/brochure-chapters.jpg' alt='Yesman brochure design'
        />
        <img class='main-image' id='main-ym-4' data-src='static/img/slides/yesman/brochure-products.jpg' alt='Yesman brochure design'
        />
        <div class='description'>
          <p class='description__slide'>
            As lead designer at
            <a href="https://www.yesman.co.za/" target="_blank">Yesman</a> I took many initiatives that were instrumental in evolving an organised and professional printing
            workflow. My efforts were key to helping Yesman provide world class service and meet growing demand.
          </p>
        </div>
      </article>
      <!-- Hillcrest Signs Section -->
      <article class='slideshow'>
        <header class='slide-header'>
          <h1 class='header slide-header__main'>Hillcrest Signs</h1>
          <h2 class='sub-header slide-header__sub'>Jan 2008 - Jun 2010</h2>
        </header>
        <input checked='checked' class='thumbnail-radio' id='thumbnail-hs-1' name='hillcrest-signs' type='radio'>
        <label class='thumbnail thumbnail-1 direction-hover' for='thumbnail-hs-1' style='background-image: url(static/img/slides/hillcrest-signs/decals.png)'>
          Vehicle Decals
          <span class='direction-hover__right' data-label='Vehicle Decals'></span>
          <span class='direction-hover__left' data-label='Vehicle Decals'></span>
          <span class='direction-hover__top' data-label='Vehicle Decals'></span>
          <span class='direction-hover__bottom' data-label='Vehicle Decals'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-hs-2' name='hillcrest-signs' type='radio'>
        <label class='thumbnail thumbnail-2 direction-hover' for='thumbnail-hs-2' style='background-image: url(static/img/slides/hillcrest-signs/horse.png)'>
          Stickers
          <span class='direction-hover__right' data-label='Stickers'></span>
          <span class='direction-hover__left' data-label='Stickers'></span>
          <span class='direction-hover__top' data-label='Stickers'></span>
          <span class='direction-hover__bottom' data-label='Stickers'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-hs-3' name='hillcrest-signs' type='radio'>
        <label class='thumbnail thumbnail-3 direction-hover' for='thumbnail-hs-3' style='background-image: url(static/img/slides/hillcrest-signs/banners-1.jpg)'>
          Banners
          <span class='direction-hover__right' data-label='Banners'></span>
          <span class='direction-hover__left' data-label='Banners'></span>
          <span class='direction-hover__top' data-label='Banners'></span>
          <span class='direction-hover__bottom' data-label='Banners'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-hs-4' name='hillcrest-signs' type='radio'>
        <label class='thumbnail thumbnail--no-spacer thumbnail-4 direction-hover' for='thumbnail-hs-4' style='background-image: url(static/img/slides/hillcrest-signs/banners-2.jpg)'>
          Banners
          <span class='direction-hover__right' data-label='Banners'></span>
          <span class='direction-hover__left' data-label='Banners'></span>
          <span class='direction-hover__top' data-label='Banners'></span>
          <span class='direction-hover__bottom' data-label='Banners'></span>
        </label>
        <img class='main-image' id='main-hs-1' data-src='static/img/slides/hillcrest-signs/decals.png' alt='Vehicle decals' />
        <img class='main-image' id='main-hs-2' data-src='static/img/slides/hillcrest-signs/horse.png' alt='Sticker design of a cartoon horse'
        />
        <img class='main-image' id='main-hs-3' data-src='static/img/slides/hillcrest-signs/banners-1.jpg' alt='Banner designs' />
        <img class='main-image' id='main-hs-4' data-src='static/img/slides/hillcrest-signs/banners-2.jpg' alt='Banner designs' />
        <div class='description'>
          <p class='description__slide'>
            At Hillcrest Signs I worked as a store clerk and DTP operator. I was completely unsupervised and delivered under pressure
            with very short deadlines.
          </p>
        </div>
      </article>
      <!-- Anupi Section -->
      <article class='slideshow'>
        <header class='slide-header'>
          <h1 class='header slide-header__main'>Anupi</h1>
          <h2 class='sub-header slide-header__sub'>Aug 2006 - Dec 2007</h2>
        </header>
        <input checked='checked' class='thumbnail-radio' id='thumbnail-anu-1' name='anupi' type='radio'>
        <label class='thumbnail thumbnail-1 direction-hover' for='thumbnail-anu-1' style='background-image: url(static/img/slides/anupi/shirts-faces.png)'>
          Garment Prints
          <span class='direction-hover__right' data-label='Garment Prints'></span>
          <span class='direction-hover__left' data-label='Garment Prints'></span>
          <span class='direction-hover__top' data-label='Garment Prints'></span>
          <span class='direction-hover__bottom' data-label='Garment Prints'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-anu-2' name='anupi' type='radio'>
        <label class='thumbnail thumbnail-2 direction-hover' for='thumbnail-anu-2' style='background-image: url(static/img/slides/anupi/shirts-abstract.png)'>
          Garment Prints
          <span class='direction-hover__right' data-label='Garment Prints'></span>
          <span class='direction-hover__left' data-label='Garment Prints'></span>
          <span class='direction-hover__top' data-label='Garment Prints'></span>
          <span class='direction-hover__bottom' data-label='Garment Prints'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-anu-3' name='anupi' type='radio'>
        <label class='thumbnail thumbnail-3 direction-hover' for='thumbnail-anu-3' style='background-image: url(static/img/slides/anupi/cads.png)'>
          Product CADs
          <span class='direction-hover__right' data-label='Product CADs'></span>
          <span class='direction-hover__left' data-label='Product CADs'></span>
          <span class='direction-hover__top' data-label='Product CADs'></span>
          <span class='direction-hover__bottom' data-label='Product CADs'></span>
        </label>
        <input class='thumbnail-radio' id='thumbnail-anu-4' name='anupi' type='radio'>
        <label class='thumbnail thumbnail--no-spacer thumbnail-4 direction-hover' for='thumbnail-anu-4' style='background-image: url(static/img/slides/anupi/storyboards.jpg)'>
          Storyboards
          <span class='direction-hover__right' data-label='Storyboards'></span>
          <span class='direction-hover__left' data-label='Storyboards'></span>
          <span class='direction-hover__top' data-label='Storyboards'></span>
          <span class='direction-hover__bottom' data-label='Storyboards'></span>
        </label>
        <img class='main-image' id='main-anu-1' data-src='static/img/slides/anupi/shirts-faces.png' alt='Abstract t-shirt design' />
        <img class='main-image' id='main-anu-2' data-src='static/img/slides/anupi/shirts-abstract.png' alt='Abstract t-shirt design'
        />
        <img class='main-image' id='main-anu-3' data-src='static/img/slides/anupi/cads.png' alt='Garment technical CADs' />
        <img class='main-image' id='main-anu-4' data-src='static/img/slides/anupi/storyboards.jpg' alt='Clothing range storyboard presentations'
        />
        <div class='description'>
          <p class='description__slide'>
            I held a leading position in a team of young fashion designers in a newly established design department. Anupi was a clothing
            distributor for companies such as Mr Price, The Hub and Ackermans.
          </p>
        </div>
      </article>
    </section>
    <!-- About Me Page -->
    <section class="section u-flex-center aboutPage">
      <h1 class="u-hidden">About Me</h1>
      <div class="col-lg-8 about">
        <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 proficiencies" id="js-proficiencies">
          <h1 class="about__header header">Proficiencies</h1>
          <ul class="proficiency-stats">
            <li class="proficiency-stats__stat">
              <img class="profiency-stats__icon" data-src="static/img/program-icons/illustrator.png" title="Adobe Illustrator" alt="Adobe Illustrator Icon"
              />
              <div class="proficiency-stats__bar">
                <div class="proficiency-stats__percentage-wrap">
                  <div class="proficiency-stats__percentage" style="transform: translateX(0)">100%</div>
                </div>
              </div>
            </li>

            <li class="proficiency-stats__stat">
              <img class="profiency-stats__icon" data-src="static/img/program-icons/photoshop.png" title="Adobe Photoshop" alt="Adobe Photoshop Icon"
              />
              <div class="proficiency-stats__bar">
                <div class="proficiency-stats__percentage-wrap">
                  <div class="proficiency-stats__percentage" style="transform: translateX(-10%)">90%</div>
                </div>
              </div>
            </li>

            <li class="proficiency-stats__stat">
              <img class="profiency-stats__icon" data-src="static/img/program-icons/indesign.png" title="Adobe InDesign" alt="Adobe Indesign Icon"
              />
              <div class="proficiency-stats__bar">
                <div class="proficiency-stats__percentage-wrap">
                  <div class="proficiency-stats__percentage" style="transform: translateX(-20%)">80%</div>
                </div>
              </div>
            </li>

            <li class="proficiency-stats__stat">
              <img class="proficiency-stats__icon" data-src="static/img/program-icons/html.png" title="HTML5" alt="HTML5 Icon" />
              <div class="proficiency-stats__bar">
                <div class="proficiency-stats__percentage-wrap">
                  <div class="proficiency-stats__percentage" style="transform: translateX(-20%)">80%</div>
                </div>
              </div>
            </li>

            <li class="proficiency-stats__stat">
              <img class="proficiency-stats__icon" data-src="static/img/program-icons/css.png" title="CSS3" alt="CSS3 Icon" />
              <div class="proficiency-stats__bar">
                <div class="proficiency-stats__percentage-wrap">
                  <div class="proficiency-stats__percentage" style="transform: translateX(-10%)">90%</div>
                </div>
              </div>
            </li>
            <li class="proficiency-stats__stat">
              <img class="profiency-stats__icon" data-src="static/img/program-icons/javascript.png" title="JavaScript" alt="Javascript Icon"
              />
              <div class="proficiency-stats__bar">
                <div class="proficiency-stats__percentage-wrap">
                  <div class="proficiency-stats__percentage" style="transform: translateX(-40%)">60%</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 aboutMe">
          <h1 class="about__header header">About Me</h1>
          <p class="aboutMe__story">I'm a graphic designer and web developer with over ten years' combined experience. My first job, before pursuing
            a career in graphic design, was working for my brother as a carpenter. He designs and manufactures
            <a href="http://houtlander.co.za/" target="_blank">award-winning</a> furniture and I'm grateful for my formative years spent with him as I learned the value of
            exceptional workmanship.</p>
          <p class="aboutMe__story"> Through hard work, passion and determination I became the leader of a world class printing department at
            <a href="http://www.yesman.co.za/" target="_blank">Yesman</a>. From there I dived into web development and came to join
            <a href="http://www.zailab.com/" target="_blank">ZaiLab</a> - an amazing tech startup set to revolutionise the call center industry.</p>
          <p class="aboutMe__story">When I'm not working hard to make the web more beautiful you can find me spending endless hours reading about best
            practices, the latest trends or admiring awesome designs.</p>
          <p class="aboutMe__story">
            My favourite sites are:
            <a href="http://www.smashingmagazine.com/" target="_blank">smashingmagazine.com</a> |
            <a href="https://alistapart.com" target="_blank">alistapart.com</a> |
            <a href="https://www.fastcodesign.com/" target="_blank">fastcodesign.com</a> and sometimes just for fun:
            <a href="http://manbabies.com/" target="_blank">manbabies.com</a>
          </p>
          <p class="aboutMe__story">For a detailed CV please e-mail me:
            <a class="emailLink" href="mailto:jamesjw01@gmail.com">jamesjw01@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
    <!-- Footer Page -->
    <section class="section u-flex-center section--bg-fixed footerPage">
      <h1 class="header text3d">Thanks For<br/> Visiting</h1>
      <img class="icon-smiley" data-src="static/img/backgrounds/smiley.png" alt="Smiley face" />
      <img class="doughnut" data-src="static/img/backgrounds/doughnut.png" alt="Doughnut illustration" />
      <div class="footerCopyright">
        <div class="col-sm-6">
          <p class="text-left">Copyright © 2018 James Wilson. All Rights Reserved.</p>
        </div>
        <div class="col-sm-6 pull-right">
          <p class="text-right">Version 2.0 | <a href="./humans.txt">Humans.txt</a>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "./assets/css/bootstrap-grid.css";
@import "./assets/css/styles.css";
@import "./assets/css/slideshow.css";
</style>
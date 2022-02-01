<template>
  <div>
    <PageIntro title="About us"/>
    <ContactUs />
    <WhyChooseUs/>
  </div>
</template>

<script>
import PageIntro from "@/components/common/PageIntro";
import ContactUs from "@/components/about/ContactUs";
import WhyChooseUs from "@/components/about/WhyChooseUs";
export default {
  name: "About",
  components: {WhyChooseUs, ContactUs, PageIntro}
}
</script>

<style scoped lang="scss">

</style>
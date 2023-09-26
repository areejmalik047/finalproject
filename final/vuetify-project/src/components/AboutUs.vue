<template>
  <div class="about">
    <div class="image-container">
      <v-img src="/about.jpg" class="image" />
    </div>
    <div class="text-container">
      <h1>About Us</h1>
      <p>
        We are a passionate team of developers and book enthusiasts dedicated to
        bringing you the finest online book shopping experience. With our
        state-of-the-art Super Fine Book Store, we aim to provide bookworms and
        literary enthusiasts with a seamless platform to explore, discover, and
        purchase their favorite reads. Our commitment to excellence extends from
        the comprehensive book catalog to user-friendly features like reviews
        and recommendations, ensuring that your literary journey is enriched
        with every visit. Your security and satisfaction are paramount, and
        we've implemented robust measures to safeguard your data and enhance
        your trust. Join us in this exciting adventure, and let's embark on a
        reading journey together!
      </p>
    </div>
  </div>
</template>
<style scoped>
.about {
  padding: 20px;
  display: flex;
  
  background-color: #f0f0f0;
}

.content-container {
  display: flex;
  align-items: center;
}

.image-container {
  flex: 1;
  text-align: center;
}

.image {
  max-width: 100%; 
  margin: 0 auto; 
}

.text-container {
  flex: 1;
}

.text-container h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.text-container p {
  font-size: 16px;
  line-height: 1.5;
}
</style>

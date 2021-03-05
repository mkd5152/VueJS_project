<template>
  <div class="container">
    <br />

    <div
      class="card text-white mb-3 border-secondary"
      style="background-color: #292929; max-width: auto;"
    >
      <div
        class="card-header"
        style="border-bottom-color: #50e3c2; border-bottom-width: 5px"
      >
        <div class="d-flex justify-content-between">
          <div class="p-1">
            <img v-if="image" :key="image.id" @click="switchImage(), isHidden = !isHidden" class="image" :src="image.src" alt="image.alt">
          </div>
          <div class="p-1">PENDING</div>
          <div class="p-1 text-dark rounded" style="background-color: #50e3c2">
            {{ length }}
          </div>
        </div>
      </div>
      <div v-if="!isHidden" class="overflow-auto" style="overflow-y: scroll; max-height:600px; width: auto;scrollbar-color: #50e3c2;">
      <div
        class="card-body p-1 mh-100"
        v-for="post in posts.pending_orders"
        :key="post.order_number"
      >
        <div class="p-0 mb-0 bg-white text-dark rounded">
          <div class="p-2 mb-0 bg-white text-dark rounded">
            <div class="d-flex justify-content-start">
              <div class="p-0 small">REF/PO</div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="p-0">{{ post.load_ref }}</div>
              <div class="p-0">
                {{ monthNames[new Date(post.created_at).getMonth()] }}
                {{ post.created_at.substr(8, 2) }}
              </div>
            </div>
          </div>
          <div class="p-2 mb-0 bg-dark text-white">
            <div class="d-flex justify-content-center">
              <div class="p-0">
                Order {{post.order_number.replace(/[\s\/]/g, "")}}
              </div>
            </div>
            <br />
            <div class="d-flex justify-content-center">
              <div class="p-0 small">CREATED AT</div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="p-0">
                {{ new Date(post.created_at) | dateFormat("DD/MM HH:mm") }}
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="p-0 small">CUSTOMER NAME</div>
              <div class="p-0 small">PHONE NUMBER</div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="p-0">{{ post.customer_name }}</div>
              <div class="p-0">{{ post.phone_number }}</div>
            </div>
            <br />
            <div class="d-flex justify-content-between">
              <div class="p-0 small">PRICE TO CUSTOMER</div>
              <div class="p-0 small">TAHMEEL FEE</div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="p-0">{{ post.order_price_formatted }}</div>
              <div class="p-0">{{ post.tahmeel_fee_in_cents }} AED</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Pending",
  data() {
    return {
      posts: [],
      isHidden: true,
      length: "",
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
            index: 0,
      image: null,
      images: [{
          id: 1,
          src: "http://smithlab.uga.edu/Research/Uptake/files/stacks_image_8633.png",
          alt: "Image Up"
        },
        {
          id: 2,
          src: "http://smithlab.uga.edu/Research/Uptake/files/stacks_image_2408.png",
          alt: "Image Down"
        }
      ]
    };
  },
  mounted() {
    this.switchImage();
  },
  created() {
    axios
      .get(
        "https://api.stagingtahmeelapp.com/technical_interview/orders/pending"
      )
      .then((posts) => {
        this.posts = posts.data;
        console.log(posts);
        this.length = posts.data.pending_orders.length;
      });
  },
    methods: {
    switchImage() {
      this.image = this.images[this.index];
      this.index = (this.index + 1) % this.images.length;
    }
  }
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 5px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #50e3c2; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #20c6a1; 
}

.image {
  width: 20px;
  height: 20px;
  margin: 2px;
  cursor: pointer;
  transition: filter 0.3s ease-in;
}

.image:hover {
  filter: brightness(1.2);
}
</style>
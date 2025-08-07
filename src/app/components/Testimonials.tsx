import InfiniteMovingCards from '../components/InfiniteMovingCards';

const testimonialsItems = [
  {
    quote: "Nimbus Technologies has been a game changer for our honey business. Their software solutions are top-notch and their support is exceptional.",
    name: "Ekta Upadhyay",
    title: "Founder, JustHoney"
  },
  {
    quote: "Nimbus Technologies delivered our e-commerce platform ahead of schedule. Their attention to detail and technical expertise exceeded our expectations.",
    name: "Priyanka Raghav",
    title: "NewU"
  },
  {
    quote: "Working with Nimbus was seamless. They understood our vision perfectly and built a robust mobile and web-app that our users love.",
    name: "Arjun Srivastava",
    title: "Owner, Wellness Forever"
  },
  {
    quote: "From concept to launch, Nimbus Technologies guided us through every step. Their custom software solution transformed our operations.",
    name: "Rajesh Chauhan",
    title: "Agropower India"
  },
  {
    quote: "Nimbus built me the MVP for my first investment round within 30 days. Super work! 😃",
    name: "Rohit Pawar",
    title: "Founder & CEO, GRETA-1"
  },
];

const Testimonials = () => (
  <InfiniteMovingCards items={testimonialsItems} />
);

export default Testimonials;

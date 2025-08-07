import InfiniteMovingCards from '../components/InfiniteMovingCards';

const testimonialsItems = [
  {
    quote: "Nimbus Technologies has been a game changer for our honey business. Their software solutions are top-notch and their support is exceptional.",
    name: "Ekta Upadhyay",
    title: "Founder, JustHoney"
  },
  {
    quote: "Nimbus Technologies built me the MVP for my first invenstment round within 30 days. Super work! 😃",
    name: "Rohit Pawar",
    title: "Founder & CEO, GRETA-1"
  },
];

const Testimonials = () => (
  <InfiniteMovingCards items={testimonialsItems} />
);

export default Testimonials;

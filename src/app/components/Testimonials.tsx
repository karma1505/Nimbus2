import InfiniteMovingCards from '../components/InfiniteMovingCards';

const testimonialsItems = [
  {
    quote: "I had my hotel website created with Nimbus along with their SEO service. I must say, they really went ahead and were dedicated towards the project and benefit my business",
    name: "Aryan Kumar",
    title: "Owner, Dilli House"
  },
  {
    quote: "Nimbus Technologies has been a game changer for our honey business. Their software solutions are top-notch and their support is exceptional.",
    name: "Ekta Upadhyay",
    title: "Founder, Just Honey"
  },
  {
    quote: "Great experience!",
    name: "Emily Davis",
    title: "COO"
  },
];

const Testimonials = () => (
  <InfiniteMovingCards items={testimonialsItems} />
);

export default Testimonials;

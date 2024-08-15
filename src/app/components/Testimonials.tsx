import InfiniteMovingCards from '../components/InfiniteMovingCards';

const testimonialsItems = [
  { quote: "I had my hotel website created with Nimbus along with their SEO service. I must say, they really went ahead and were dedicated towards the project and benefit my business", name: "Aryan Kumar", title: "Owner, Dilli House" },
  { quote: "Excellent support.", name: "Jane Smith", title: "CTO" },
  { quote: "Great experience!", name: "Emily Davis", title: "COO" },
];

const Testimonials = () => (
  <InfiniteMovingCards items={testimonialsItems} />
);

export default Testimonials;

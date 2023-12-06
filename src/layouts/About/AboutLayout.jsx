import HistoryDetails from "../../components/About/HistoryDetails";
import HistoryVideo from "../../components/About/HistoryVideo";

const AboutLayout = () => {
  return (
    <section className="history-section">
      <div className="container">
        <HistoryDetails />

        <HistoryVideo />
      </div>
    </section>
  );
};

export default AboutLayout;

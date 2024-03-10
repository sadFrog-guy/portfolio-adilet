import WorkCaseTiser from "./WorkCaseTiser/WorkCaseTiser";
import data from "../../data";
import Title from "../../components/Title/Title";
import Btn from "../../components/Btn/Btn";
import useSendAnalytics from "../../analytics/useSendPageViewAnalytics";

const Portfolio = () => {
  useSendAnalytics({ title: "Portfolio page" });
  return (
    <section className={"page"}>
      <Title
        title="Мои проекты"
        subtitle="Опыт работы во фрилансе, менторстве, аутсорсе и в компаниях. Тут не все, что я делал, но для презентации достаточно"
      />
      {data.portfolio.map((wCase) => {
        return <WorkCaseTiser key={wCase.title} props={{ ...wCase }} />;
      })}
    </section>
  );
};

export default Portfolio;

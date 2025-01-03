import Link from "next/link";
import "./dashboard.modules.css";
const pages = () => {
  return (
    <div className="dashboard-container">
      <div className="logo">
        <img src="./logo.png" alt="" />
      </div>
      <p className="text-1">Ready to Mock Test?</p>
      <p className="text-2">Pick up your Exam</p>

      <Link href={"/ssc"}>
        <span className="exam-option">SSC</span>
      </Link>

      <Link href={"/banking"}>
        <span className="exam-option">Banking</span>
      </Link>

      <Link href={"/upsc"}>
        <span className="exam-option">UPSC</span>
      </Link>
    </div>
  );
};

export default pages;

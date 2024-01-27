import { PageHeaderProps } from "../../interfaces/props";

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="page__header">
      <h2>{title}</h2>
    </div>
  );
};

export default PageHeader;

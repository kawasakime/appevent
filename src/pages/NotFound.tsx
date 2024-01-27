import PageHeader from "../components/UI/PageHeader";

const NotFound = () => {
  return (
    <div className="page wrapper">
      <div className="not_found">
        <PageHeader title="" />
        <p>Страница не найдена</p>
        <span>Попробуйте перезагрузить страницу</span>
      </div>
    </div>
  );
};

export default NotFound;
